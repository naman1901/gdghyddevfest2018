const test = require(`ava`);
const sinon = require(`sinon`);

const helloWorld = require(`..`).helloWorld;

test(`helloWorld: should print hello world`, t => {
  // Mock ExpressJS 'req' and 'res' parameters
  const req = {
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloWorld(req, res);

  // Verify behavior of tested function
  t.true(res.send.calledOnce);
  t.deepEqual(res.send.firstCall.args, [`Hello World!`]);
});
