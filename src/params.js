const { program } = require('commander');
const helpMsg = require('./help-msg');

const CORRECT_ACTIONS = ['encode', 'decode'];

module.exports.getParams = (baseName, argv) => {

  if (argv.length <= 2) {
    process.stderr.write(`Usage: ${baseName} SOME_PARAM!\n`);
    process.exit(-1);
  }

  program
    .version('0.1')
    .description('CLI tool that will encode and decode a text by Caesar cipher')
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input [path]', 'an input file', '')
    .option('-o, --output [path]', 'an output file', '')
    .option('-a, --action [string]', 'an action encode/decode', '')
    .on('--help', () => helpMsg.getHelp(baseName))
    .parse(argv);

  const {shift, input, output, action} = program.opts();

  if (!shift) {
    process.stderr.write('Missing required parameter: <Shift>. Use an -s --shift. <Shift> must be an integer');
    process.exit(-1);
  }

  if (!Number.isInteger(+shift)) {
    process.stderr.write(`<Shift> iinvalid parameter, value specified: '${shift}'. 
      The parameter: <Shift> must be an integer`);
    process.exit(-1);
  }

  if (!action) {
      process.stderr.write('Missing required parameter: <Action>. Use an -a --action');
      process.exit(-1);
  }

  if (!CORRECT_ACTIONS.includes(action)){
    process.stderr.write(`<Action> invalid parameter, value specified: '${action}'. 
      Allowed value: ${CORRECT_ACTIONS.join(' / ')}`);
    process.exit(-1);
  }

  return {shift, input, output, action};
};