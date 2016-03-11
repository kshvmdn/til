'use strict';

const til = require('./src/');
const minimist = require('minimist');
const version = require('./package.json').version;
const defaults = {
  boolean: [
    'help',
    'version',
    'open',
    'detailed'
  ],
  alias: {
    h: 'help',
    v: 'version',
    p: 'posts',
    o: 'open',
    d: 'detailed'
  },
  default: {
    posts: 1,
    open: false,
    detailed: false
  }
};
const help = `
  Usage: til [OPTIONS]
    Open random TILs from /r/todayilearned.

  Options:
    -h --help         Display this help dialog
    -v --version      Display current version
    -p --posts        The number of TILs to display (defaults to 1)
    -o --open         Whether or not to open the links for the TILs (defaults to false)
    -d --detailed     Whether or not to show detailed information for each TIL (defaults to false)

  Example:
    $ til --posts 1
`;

const run = options => til(options);

exports.out = process.stdout;
exports.err = process.stderr;

exports.parse = argv => minimist(argv, defaults);

exports.run = options => {
  if (options.help) {
    exports.out.write(`${help}\n`);
    return;
  }

  if (options.version) {
    exports.out.write(`til v${version}\n`);
    return;
  }

  run(options);
};
