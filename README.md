# gdghyddevfest2018

Download NodeJS for your platform 

npm install -g firebase-tools

firebase login

firebase functions init 

cd functions 

npm install firebase-functions

npm install firebase-admin

firebase list

firebase use devfesthyd2018fb

firebase deploy --only functions --project <project_id>

firebase serve --only functions


curl http://localhost:5000/devfesthyd2018fb/us-central1/helloWorld

npm install -g @google-cloud/functions-emulator

console.log(JSON.stringify(JSON.stringify({
  "databaseURL": "https://devfesthyd2018fb.firebaseio.com",
  "storageBucket": "devfesthyd2018fb.appspot.com",
  "projectId": "devfesthyd2018fb"
})))


node

{\"databaseURL\":\"https://devfesthyd2018fb.firebaseio.com\",\"storageBucket\":\"devfesthyd2018fb.appspot.com\",\"projectId\":\"devfesthyd2018fb\"}


 FIREBASE_CONFIG={\"databaseURL\":\"https://devfesthyd2018fb.firebaseio.com\",\"storageBucket\":\"devfesthyd2018fb.appspot.com\",\"projectId\":\"devfesthyd2018fb\"}

functions start 

functions deploy --trigger-http --timeout 600s  helloWorld

http://localhost:8010/gdgdevfest2018/us-central1/helloWorld 

cd functions 
-----------------------
gcloud -v
npm -v

npm init 
touch index.js
code .
exports.helloWorld = (req, res) => {
	res.send('Hello World!');
};

gcloud functions deploy helloWorld --runtime nodejs6 --trigger-http

curl https://us-central1-jdalabs-retail-me-dev01.cloudfunctions.net/helloWorld

npm install -g @google-cloud/functions-emulator
functions -v

functions start

 functions deploy helloWorld --trigger-http
 
 http://localhost:8010/jdanextsandbox/us-central1/helloWorld
 
 functions inspect  helloWorld
 
 Add configuration '
 
   "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Debug function emulator ",
      "port": 9229
    },
    
 add a breakpoint 
 
 
 functions call helloWorld
 
functions inspect  helloWorld

add source 

add debug point 


 functions call helloWorld
 
 
 functions reset helloWorld --keep


gcloud functions list

gcloud functions describe helloWorld
npm install --save @google-cloud/debug-agent

require('@google-cloud/debug-agent').start();





