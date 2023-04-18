import boto3
import re
import shutil
import os
import requests
import json

# Initialize Cognito User Pool client
cognito_client = boto3.client('cognito-idp', region_name='eu-west-3')
user_pool_id = 'eu-west-3_XXXXXX' # aws cognito-idp list-user-pools --max-results 10
client_id = 'XXXXXXXXXXXXXXXXXXX' # It's the app_client || aws cognito-idp list-user-pool-clients --user-pool-id eu-west-3_q5eKRbPb2
bucket_name = 'amplifyappcXXXXXXXXXXXXXXXXXXXXXX' # aws s3 ls
identity_pool_id = 'eu-west-3:XXXXXXXXXXXXXXXX' # aws cognito-identity list-identity-pools --max-results 10
account_id = 'XXXXXXXXXX' # aws sts get-caller-identity
api_appsync_url = 'https://XXXXXXXXXXXXXXXX.appsync-api.eu-west-3.amazonaws.com/graphql' # It's uris > GRAPHQL || aws appsync list-graphql-apis


# Define array of users
users = [
    {'email': 'student1@gmail.com', 'givenName': 'Lucas', 'familyName': 'González', 'role': 'student', 'group': 'viewer', 'image_file': '002.jpg'},
    {'email': 'student2@gmail.com', 'givenName': 'Ana', 'familyName': 'López García', 'role': 'student', 'group': 'viewer', 'image_file': '001.jpg'},
    {'email': 'student3@gmail.com', 'givenName': 'Diego', 'familyName': 'Martínez Pérez', 'role': 'student', 'group': 'viewer', 'image_file': '004.jpg'},
    {'email': 'student4@gmail.com', 'givenName': 'María', 'familyName': 'Gutiérrez Sánchez', 'role': 'student', 'group': 'viewer', 'image_file': '003.jpg'},
    {'email': 'student5@gmail.com', 'givenName': 'Juan', 'familyName': 'Hernández Ruiz', 'role': 'student', 'group': 'viewer', 'image_file': '006.jpg'},
    {'email': 'student6@gmail.com', 'givenName': 'Luisa', 'familyName': 'Fernández Moreno', 'role': 'student', 'group': 'viewer', 'image_file': '005.jpg'},
    {'email': 'student7@gmail.com', 'givenName': 'Sofía', 'familyName': 'Sánchez García', 'role': 'student', 'group': 'viewer', 'image_file': '007.jpg'},
    {'email': 'student8@gmail.com', 'givenName': 'Javier', 'familyName': 'García Gutiérrez', 'role': 'student', 'group': 'viewer', 'image_file': '008.jpg'},
    {'email': 'graduated1@gmail.com', 'givenName': 'Marta', 'familyName': 'Martín Ruiz', 'role': 'graduated', 'group': 'viewer', 'image_file': '009.jpg'},
    {'email': 'graduated2@gmail.com', 'givenName': 'Carlos', 'familyName': 'Sanz García', 'role': 'graduated', 'group': 'viewer', 'image_file': '010.jpg'},
    {'email': 'graduated3@gmail.com', 'givenName': 'Pablo', 'familyName': 'Ortega Romero', 'role': 'graduated', 'group': 'viewer', 'image_file': '012.jpg'},
    {'email': 'graduated4@gmail.com', 'givenName': 'Cristina', 'familyName': 'Gutiérrez Sánchez', 'role': 'graduated', 'group': 'viewer','image_file': '011.jpg'},
    {'email': 'technical1@gmail.com', 'givenName': 'Laura', 'familyName': 'Jiménez García', 'role': 'technical', 'group': 'creator', 'image_file': '013.jpg'},
    {'email': 'technical2@gmail.com', 'givenName': 'Juan', 'familyName': 'Gómez López', 'role': 'technical', 'group': 'creator', 'image_file': '014.jpg'},
    {'email': 'professor1@gmail.com', 'givenName': 'Lucas', 'familyName': 'Martínez Ortiz', 'role': 'professor', 'group': 'admin', 'image_file': '016.jpg'},
    {'email': 'professor2@gmail.com', 'givenName': 'María', 'familyName': 'Sánchez Rodríguez', 'role': 'professor', 'group': 'creator', 'image_file': '015.jpg'},
    {'email': 'professor3@gmail.com', 'givenName': 'Lucas', 'familyName': 'Martínez López', 'role': 'professor', 'group': 'creator', 'image_file': '018.jpg'},

]

# Create admin group in Cognito User Pool
#cognito_client.create_group(
    #GroupName='admin',
    #UserPoolId=user_pool_id
#)

print("Adding policy to bucket: " + bucket_name)
# Add policy (bucketPolicy.json) to bucket 
# Make backup copy of template file
shutil.copyfile('bucketPolicy.json', 'bucketPolicy.json.bak')
with open('bucketPolicy.json', 'r', encoding='utf-8') as f:
    content = f.read()
    content = re.sub("<bucket_name>", bucket_name, content)
with open('bucketPolicy.json', 'w', encoding='utf-8') as f:
    f.write(content)

# Add policy to bucket
s3_client = boto3.client('s3')
s3_client.put_bucket_policy(
    Bucket=bucket_name,
    Policy=json.dumps(json.load(open('bucketPolicy.json')))
)

print("")

print("Activating Authentication flow ALLOW_USER_PASSWORD_AUTH in client_id: " + client_id)
# Activate Authentication flow ALLOW_USER_PASSWORD_AUTH in client_id
cognito_client.update_user_pool_client(
    UserPoolId=user_pool_id,
    ClientId=client_id,
    ExplicitAuthFlows=['ALLOW_USER_PASSWORD_AUTH','ALLOW_REFRESH_TOKEN_AUTH','ALLOW_CUSTOM_AUTH','ALLOW_USER_SRP_AUTH']
)



# Create empty dictionary to store Cognito User IDs
user_ids = {}
user_tokens = {}
owners_channels = []

# Loop through array of users
for user in users:
    email = user['email']
    given_name = user['givenName']
    family_name = user['familyName']
    role = user['role']
    group = user['group']

    print("\nCreating user: ", email)

    # Create user in Cognito User Pool
    response = cognito_client.admin_create_user(
        UserPoolId=user_pool_id,
        Username=email,
        UserAttributes=[
            {'Name': 'given_name', 'Value': given_name},
            {'Name': 'family_name', 'Value': family_name}
        ],
        TemporaryPassword=email,
        MessageAction='SUPPRESS'
    )
    
    # Store Cognito User ID in dictionary
    user_id = response['User']['Username']
    user_ids[email] = user_id

    # Confirm user's email address
    cognito_client.admin_update_user_attributes(
        UserPoolId=user_pool_id,
        Username=email,
        UserAttributes=[{'Name': 'email_verified', 'Value': 'True'}]
    )
    
    # Set permanent password for user
    cognito_client.admin_set_user_password(
        UserPoolId=user_pool_id,
        Username=email,
        Password=email,
        Permanent=True
    )

    if group == 'admin' or group == 'creator':
        cognito_client.admin_add_user_to_group(
            UserPoolId=user_pool_id,
            Username=email,
            GroupName=group
        )

    # Authenticate user to get identityId
    auth_response = cognito_client.initiate_auth(
        AuthFlow='USER_PASSWORD_AUTH',
        AuthParameters={
            'USERNAME': email,
            'PASSWORD': email
        },
        ClientId=client_id
    )

    print("User ID: ", user_id)
    id_token = auth_response['AuthenticationResult']['IdToken']

    user_tokens[email] = auth_response['AuthenticationResult']['AccessToken']
    
    logins = {'cognito-idp.' + 'eu-west-3' + '.amazonaws.com/' + user_pool_id: id_token}
    
    client = boto3.client('cognito-identity', region_name='eu-west-3')
    cognito_identity_id = client.get_id(
        AccountId=account_id,
        IdentityPoolId=identity_pool_id,
        Logins=logins
    )
    identity_id = cognito_identity_id['IdentityId']

    print("Identity ID: ", identity_id)
    if user['email'] == 'technical1@gmail.com' or user['email'] == 'professor1@gmail.com' or user['email'] == 'professor2@gmail.com':
        owners_channels.append(identity_id)

    # Upload user's profile image to S3
    image_file = user['image_file']
    if image_file:
        s3 = boto3.resource('s3')
        bucket = s3.Bucket(bucket_name)
        key = f"protected/{identity_id}/{image_file}"
        file_path = os.path.join('256 x 256', image_file)
        bucket.upload_file(file_path, key)
        user['image_file'] = "https://" + str(bucket_name) +".s3.eu-west-3.amazonaws.com/" + str(key)

print("")
print("")

# Make mutations in GraphQL using Cognito User IDs
appsync_client = boto3.client('appsync', region_name='eu-west-3')

for email, user_id in user_ids.items():

    for user in users:
        if user['email'] == email:
            # Make backup copy of template file
            shutil.copyfile('template.graphql', 'template.graphql.bak')

            # Replace IDs in text file
            with open('template.graphql', 'r', encoding='utf-8') as f:
                content = f.read()
            content = re.sub(f'ID{email.split("@")[0]}', user_id, content)
            with open('template.graphql', 'w', encoding='utf-8') as f:
                f.write(content)

            # Make GraphQL mutation using Cognito User ID
            mutation = f"""
                mutation CreateUser {{
                    createUser(input: {{
                        id: "{user_id}",
                        email: "{email}",
                        givenName: "{user['givenName']}",
                        familyName: "{user['familyName']}",
                        role: {user['role']},
                        group: {user['group']},
                        emailVerified: true,
                        disabled: false,
                        image: "{user['image_file']}"
                    }}){{
                        id
                    }}
                }}
            """
            
            session = requests.Session()
            response = session.request(
                url=api_appsync_url,
                method='POST',
                headers={'authorization': user_tokens[email]},
                json={'query': mutation}
                )
            print("Result of user creation: ", email)
            print(response.json())
            print("")

            # ADD IMAGE TO CHANNEL
            if user['email'] == 'technical1@gmail.com':
                s3 = boto3.resource('s3')
                bucket = s3.Bucket(bucket_name)
                key = f"protected/{owners_channels[0]}/3DPrinting.jpg"
                file_path = os.path.join('channelsImages', "3DPrinting.jpg")
                bucket.upload_file(file_path, key)
                # Replace key3DPrinting in template file
                with open('template.graphql', 'r', encoding='utf-8') as f:
                    content = f.read()
                content = re.sub('key3DPrinting', key, content)
                with open('template.graphql', 'w', encoding='utf-8') as f:
                    f.write(content)

            if user['email'] == 'professor1@gmail.com':
                s3 = boto3.resource('s3')
                bucket = s3.Bucket(bucket_name)
                key = f"protected/{owners_channels[1]}/Python.jpg"
                file_path = os.path.join('channelsImages', "Python.jpg")
                bucket.upload_file(file_path, key)
                # Replace keyPython in template file
                with open('template.graphql', 'r', encoding='utf-8') as f:
                    content = f.read()
                content = re.sub('keyPython', key, content)
                with open('template.graphql', 'w', encoding='utf-8') as f:
                    f.write(content)
                
            if user['email'] == 'professor2@gmail.com':
                s3 = boto3.resource('s3')
                bucket = s3.Bucket(bucket_name)
                key = f"protected/{owners_channels[2]}/BeginnerProjects.jpg"
                file_path = os.path.join('channelsImages', "BeginnerProjects.jpg")
                bucket.upload_file(file_path, key)
                # Replace keyBeginnerProjects in template file
                with open('template.graphql', 'r', encoding='utf-8') as f:
                    content = f.read()
                content = re.sub('keyBeginnerProjects', key, content)
                with open('template.graphql', 'w', encoding='utf-8') as f:
                    f.write(content)

                s3 = boto3.resource('s3')
                bucket = s3.Bucket(bucket_name)
                key = f"protected/{owners_channels[2]}/WebProgramming.jpg"
                file_path = os.path.join('channelsImages', "WebProgramming.jpg")
                bucket.upload_file(file_path, key)
                # Replace keyWebProgramming in template file
                with open('template.graphql', 'r', encoding='utf-8') as f:
                    content = f.read()
                content = re.sub('keyWebProgramming', key, content)
                with open('template.graphql', 'w', encoding='utf-8') as f:
                    f.write(content)

# Replace bucketName in template file
with open('template.graphql', 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub('bucketName', bucket_name, content)
with open('template.graphql', 'w', encoding='utf-8') as f:
    f.write(content)

print("")
print("")
print("Making mutations in GraphQL using template.graphql...")

with open("template.graphql", "r", encoding='utf-8') as file:
    content = file.read()

mutations = content.split("\n\n")

for i in range(len(mutations)):
    mutations[i] = mutations[i].strip()

for mutation in mutations:
    print("Mutation: ", mutation.split("\n")[0])
    session = requests.Session()
    response = session.request(
        url=api_appsync_url,
        method='POST',
        headers={'authorization': user_tokens['professor1@gmail.com']},
        json={'query': mutation}
        )
    
    if "error" in json.dumps(response.json()):
        print("Error: ", response.json())
    else:
        print("OK")
    print("")


print("")
print("")
