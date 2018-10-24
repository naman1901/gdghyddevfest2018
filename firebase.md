# Firebase Code Lab 

Download NodeJS for your platform and install firebase CLI 
```
npm install -g firebase-tools
```
Authenticate with a firebase project 
```
firebase login
```
Create a firebase function 
```
firebase functions init 

cd functions 

npm install firebase-functions

npm install firebase-admin
```

Deploy the function locally  
```
firebase list

firebase use devfesthyd2018fb

firebase deploy --only functions --project <project_id>

firebase serve --only functions
```
Call the function 
```

curl http://localhost:5000/devfesthyd2018fb/us-central1/helloWorld

