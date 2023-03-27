/* Amplify Params - DO NOT EDIT
	AUTH_AMPLIFYAPPFB6EF5EA_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Change user Group membership in Cognito
    // https://stackoverflow.com/questions/58614067/aws-cognito-add-user-to-a-group-from-lambda
    // https://docs.amplify.aws/cli/function/#graphql-from-lambda

    const params = {
        UserPoolId: process.env.AUTH_AMPLIFYAPPFB6EF5EA_USERPOOLID,
        Username: event.arguments.id
    };
    let oldGroup = 'none';

    try {
        const data = await cognitoidentityserviceprovider.adminListGroupsForUser(params).promise();

        // If user is already in a group, remove him and add him to the new group
        if (data.Groups.length > 0) {
            await cognitoidentityserviceprovider.adminRemoveUserFromGroup({
                UserPoolId: process.env.AUTH_AMPLIFYAPPFB6EF5EA_USERPOOLID,
                Username: event.arguments.id,
                GroupName: data.Groups[0].GroupName
            }).promise();
            oldGroup = data.Groups[0].GroupName;
        }

        // Add user to new group
        if (event.arguments.group !== 'viewer')
        {
            await cognitoidentityserviceprovider.adminAddUserToGroup({
                UserPoolId: process.env.AUTH_AMPLIFYAPPFB6EF5EA_USERPOOLID,
                Username: event.arguments.id,
                GroupName: event.arguments.group
            }).promise();
        }
        

    } catch (err) {
        console.log(err, err.stack);
        return {
            statusCode: 500,
            body: JSON.stringify(err),
        };

    }
    

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: {id: event.arguments.id, oldGroup: oldGroup, newGroup: event.arguments.group},
    };
};
