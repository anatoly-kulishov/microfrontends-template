# api-middleware

To install Amplify use following steps:

1. npm install -g @aws-amplify/cli

2. amplify init  
   Use AWS credintials provided to you to initialize amplify project.

3. amplify import auth  
   Import existing authentication Cognito service. (web client - no secret key, native client - with secret key)

4. amplify push  
   Save changes.

5. npm install aws-amplify  
   Use js library with Auth methods.

6. GitIgnore amplify folder and aws-exports before commit!
