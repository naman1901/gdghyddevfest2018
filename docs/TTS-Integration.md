Text to speech integration 

```
npm install  @google-cloud/text-to-speech --save
curl https://us-central1-gdgdevfest2018-218215.cloudfunctions.net/helloWorld?text=hi&lang=en-GB --output output.mp3

```

```javascript
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// The text to synthesize
const text = 'Hello, world!';

// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
client.synthesizeSpeech(request, (err, response) => {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  // Respond with the binary audio content 
    res.set('Content-Type', 'Content-Type: audio/mpeg');
    res.set('Content-Disposition', 'attachment; filename="output.mp3');
    res.send(new Buffer(response.audioContent, 'binary'));
});

```