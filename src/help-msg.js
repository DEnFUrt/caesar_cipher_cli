module.exports.getHelp = (baseName) => {
  console.log('===================');
  console.log('  Examples:')
  console.log('')
  console.log(`    node ${baseName} -h, --help: help output`)
  console.log(`    node ${baseName} -s, --shift: a shift (use --shift 7 also -s 7, to pass a negative value use -s -7)`)
  console.log(`    node ${baseName} -i, --input: an input file (use --input input.txt also -i "c:\\dirName\\input.txt")`)
  console.log(`    node ${baseName} -o, --output: an output file (use --output output.txt also -o "c:\\dirName\\output.txt")`)
  console.log(`    node ${baseName} -a, --action: an action encode/decode (use -a encode also --action decode)`)
  }