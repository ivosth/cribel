# **CRIBEL** LifeLong Learning platform
Cribel is a social network aimed at the continuous learning of users. Here you can find recommendations of quality content to learn about any subject. These recommendations are made by experts in the field, teachers or technicians in the sector. You can be sure that they have done a good content filtering!
<br/>

![Cribel](./public/screenshot.png)

<br/>

## In this social network you will be able to: 
**Consult expert channels**
You can consult the channels of experts on the topic you are interested in. And sort them by new, popularity or best rating

**Explore the best channels or posts**
You will be able to browse through all the existing channels or posts on the platform.

**Rate posts**
Your ratings are very important for other users. Don't forget to rate the posts you see.

**Subscribe to channels**
By subscribing to a channel you will be kept up to date with the latest posts.

**Create channels**
You can create channels dedicated to a specific topic of your choice. And start posting!

**Add participants to your channels**
Add other users to your channels so they can collaborate with you.

<br/>

## How to clone this project

### Prerequisites
To run this application, you will need the following:

- An AWS account
- An instance of Amplify CLI installed on your local machine. You can install it by following these instructions: https://docs.amplify.aws/cli/start/install
- Node.js and npm installed on your local machine. You can download them here: https://nodejs.org/en/download/


Clone the Github repository:

```sh
git clone https://github.com/ivosth/amplifyapp.git
cd amplifyapp
```

Initialise the Amplify CLI instance

```sh
npm install
```

Init Amplify project:

```sh
amplify init
```

Deploy the Amplify configuration and create the required resources on AWS:

```sh
amplify push
```

Start the project on local:

```sh
npm start
```

### Post-requisites
Para llenar de datos la aplicación:
Ve a la carpeta deployment

```sh
cd deployment
```

Edita el fichero de createContent modificando las variables, user_pool_id, client_id, bucket_name, identity_pool_id, account_id y api_appsync_url con los ARN de tus recursos ya desplegados (puedes usar el comando comentado para obtener esta información)
Una vez editado ejecutalo:

```sh
python createContent.py
```

Una vez populada de datos la aplicación te podras loguear con cualquier usuario de la siguiente lista:
- As Student:
  - User: student1@gmail.com Password: student1@gmail.com
  - User: student2@gmail.com Password: student2@gmail.com
  - ...
  - User: student8@gmail.com Password: student8@gmail.com
- As Graduated:
  - User: graduated1@gmail.com Password: graduated1@gmail.com
  - ...
  - User: graduated4@gmail.com Password: graduated4@gmail.com
- As Technical:
  - User: technical1@gmail.com Password: technical1@gmail.com
  - User: technical2@gmail.com Password: technical2@gmail.com
- As Professor:
  - User: professor1@gmail.com Password: professor1@gmail.com
  - User: professor2@gmail.com Password: professor2@gmail.com
  - User: professor3@gmail.com Password: professor3@gmail.com
- As Admin:
  - User: professor1@gmail.com Password: professor1@gmail.com
  
<br>

## Images
Imagenes sacadas de los siguientes repositorios:
- aa
- bggb

## Creator
**Javier Mancha Dieguez's Final Degree in Computer Science at the University of Cordoba (UCO)**

