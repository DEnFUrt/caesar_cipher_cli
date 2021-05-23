const fs = require('fs');

exports.creareReadable = (inFile) => {
  if (inFile !== null) {
    fs.access(inFile, fs.constants.F_OK | fs.constants.R_OK, (err) => {
      if (err) {
        process.stderr.write(
          `The specified input file: "${inFile}" ${err.code === 'ENOENT' ? 'does not exist' : 'is not readable'}`);
        process.exit(-2);
      } 
    });

    return fs.createReadStream(inFile, {encoding: 'utf8'})
  }

  return process.stdin
};

exports.creareWritable = (outFile) => {
  if (outFile !== null) {
    fs.access(outFile, fs.constants.F_OK | fs.constants.W_OK, (err) => {
      if (err) {
        process.stderr.write(
          `The specified output file: "${outFile}" ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
        process.exit(-2);
      } 
    });
    
    return fs.createWriteStream(outFile, {encoding: 'utf8', flags: fs.constants.O_WRONLY|fs.constants.O_APPEND});
  }

  return process.stdout;
};
