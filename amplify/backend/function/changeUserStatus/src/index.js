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

    // if disable is true, disable user
    // if disable is false, enable user

    const params = {
        UserPoolId: process.env.AUTH_AMPLIFYAPPFB6EF5EA_USERPOOLID,
        Username: event.arguments.id
    };

    try {
        if (event.arguments.disable === true) {
            await cognitoidentityserviceprovider.adminDisableUser(params).promise();
        } else {
            await cognitoidentityserviceprovider.adminEnableUser(params).promise();
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
        body: {id: event.arguments.id, disable: event.arguments.disable},
    };
};
