const minimist = require('minimist');

module.exports.getParams = (baseName, argv) => {

  if (argv.length <= 2) {
    process.stderr.write(`Usage: ${baseName} SOME_PARAM!\n`);
    process.exit(-1);
  }

  const args = minimist(argv.slice(2), {
    string: ['i', 'o', 'a'],
    alias: {
      's': 'shift',
      'i': 'input',
      'o': 'output',
      'a': 'action',
      // 'h': 'help',
    },
    unknown: (arg) => {
      console.error('Unknown option: ', arg);
      process.exit(-1); 
    }
  });

  const {s: shift, i: input, o: output, a: action, /* h: help */} = args;

  if (typeof shift !== 'number') {
    process.stderr.write('Missing or invalid required parameter: Shift!. The parameter: Shift! must be an integer');
    process.exit(-1);
  }

  if (!action) {
      process.stderr.write('Missing required parameter: Action!. Use an -a --action');
      process.exit(-1);
  }
  
  if (action !== 'encode' && action !== 'decode'){
    process.stderr.write('Invalid parameter value specified! Allowed value encode or decode');
    process.exit(-1);
  }

  return {shift, input, output, action};
};