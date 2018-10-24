# Codelab - Node.js in Google Cloud Functions



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


 gcloud functions deploy helloWorld --runtime nodejs6 --trigger-http --entry-point helloWorld --project gdgdevfest2018-218215




