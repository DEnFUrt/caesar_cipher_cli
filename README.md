Caesar cipher CLI tool

Create
1. Clone this repo to anywhere on your computer.
git clone https://github.com/DEnFUrt/caesar_cipher_cli.git

2. Install
`npm i`

CLI tool that will encode and decode a text by Caesar cipher

For help on command line parameters, call the program with the parameter -h also --help
  
  `node src/caesar-cli.js -h`
  
  Examples:

```
    node caesar-cli.js -h, --help: help output
    node caesar-cli.js -s, --shift: a shift (use -s <value>, to pass a negative value use -s -<value>)
    node caesar-cli.js -i, --input: an input file (use --input input.txt also -i "c:\dirName\input.txt")
    node caesar-cli.js -o, --output: an output file (use --output output.txt also -o "c:\dirName\output.txt")
    node caesar-cli.js -a, --action: an action encode/decode (use -a encode also --action decode)
```

  Run

  1. Retrieving data from a file and saving to a file

```  
  node src/caesar-cli.js -s -10 -a encode -i input.txt -o output.txt
```
  
  Script termination message

```
  Finished "encode" the file "input.txt",
  the result is saved to a file "output.txt"
```  
  
  2. Retrieving data from a file and output to the console

  ```
  node src/caesar-cli.js -s 2 -a encode -i input.txt
  ```
  3. Retrieving data from the console and output to a file

```
  node src/caesar-cli.js -s 2 -a encode -o output.txt
```
  Press CTRL+C to finish

  4. Retrieving data from the console and output to the console

```
  node src/caesar-cli.js -s 2 -a encode
```

  Press CTRL+C to finish

