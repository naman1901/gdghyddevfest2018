const debug = require('@google-cloud/debug-agent').start({ allowExpressions: true });

exports.helloWorld = (req, res) => {

  const text = req.query.text || 'No text provided.';
  const lang = req.query.lang || 'en-US';
  const gender = req.query.gender || 'NEUTRAL';
  const textToSpeech = require('@google-cloud/text-to-speech');
  console.log('Request received %j', req);
  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // Construct the request
  const request = {
    input: { text: text },
    // Select the language and SSML Voice Gender (optional)
    voice: { languageCode: lang, ssmlGender: gender },
    // Select the type of audio encoding
    audioConfig: { audioEncoding: 'MP3' },
  };

  // Performs the Text-to-Speech request
  client.synthesizeSpeech(request, (err, response) => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
    res.set('Content-Type', 'Content-Type: audio/mpeg');
    res.set('Content-Disposition', 'attachment; filename="output.mp3');
    res.send(new Buffer(response.audioContent, 'binary'))
  });
};