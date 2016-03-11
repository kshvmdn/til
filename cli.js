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

  Example:
    $ til --posts 5 --open

  Options:
    -h --help         Display this help dialog
    -v --version      Display current version
    -p --posts        The number of TILs to display (defaults to 1)
    -o --open         Whether or not to open the links for the TILs (defaults to false)
    -d --detailed     Whether or not to show detailed information for each TIL (defaults to false)

const run = argv => til(argv);

exports.exitCode = 0;

exports.stdout = process.stdout;
exports.stderr = process.stderr;

exports.parse = options => minimist(options, defaults);

exports.run = argv => {
  exports.exitCode = 0;

  if (argv.help) {
    exports.stderr.write(help);
    return;
  }

  if (argv.version) {
    exports.stderr.write(`til v${version}\n`);
    return;
  }

  run(argv);
};
