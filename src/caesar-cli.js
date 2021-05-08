const path = require('path');
// const { pipeline, Transform } = require('stream');
const params = require('./params');

const baseName = path.basename(__filename);

const {shift, input, output, action} = params.getParams(baseName, process.argv);



