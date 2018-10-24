# Firebase Code Lab 

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