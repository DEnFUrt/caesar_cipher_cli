const path = require('path');
const { pipeline, Transform } = require('stream');
const params = require('./params');
const { creareReadable, creareWritable } = require('./streams');

const baseName = path.basename(__filename);

const {shift, input, output, action} = params.getParams(baseName, process.argv);
console.log('shift, input, output, action: ', shift, input, output, action);

const inFile = (typeof input === 'string' && input.length !== 0) ? path.resolve(input) : null; 
console.log('inFile: ', inFile);
const outFile = (typeof output === 'string' && output.length !== 0) ? path.resolve(output) : null; 
console.log('outFile: ', outFile);

const streamIn = creareReadable(inFile);
const streamOut = creareWritable(outFile);

pipeline(
  streamIn,

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