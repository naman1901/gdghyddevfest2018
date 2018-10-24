const debug = require('@google-cloud/debug-agent').start({ allowExpressions: true });

exports.helloWorld = (req, res) => {
    res.send('Hello World!');
};
