const path = require('path');
const { pipeline, Transform } = require('stream');
const params = require('./params');
const { creareReadable, creareWritable } = require('./streams');
const cryptoApi = require('./crypto-api');

const baseName = path.basename(__filename);

const {shift, input, output, action} = params.getParams(baseName, process.argv);

const inFile = (typeof input === 'string' && input.length !== 0) ? path.resolve(input) : null; 
const outFile = (typeof output === 'string' && output.length !== 0) ? path.resolve(output) : null; 

const streamIn = creareReadable(inFile);
const streamOut = creareWritable(outFile);

const streamTransform = new Transform({
  transform: (data, _, callback) => {
    const newData = cryptoApi.onCrypto({shift: +shift, str: data.toString('utf8'), action})
    callback(null, newData)
  }
}) 

pipeline(
  streamIn,
  streamTransform,
  streamOut,
  (error) => {
    if (error) {
      console.error('Error stream!', error);
    } else {
      console.log(
        `Finished "${action}" the file "${input}", 
        the result is saved to a file "${output}"`
      );
    }
  }
);