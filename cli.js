'use strict';
const minimist = require('minimist');

const til = require('./src/');
const version = require('./package.json').version;

const defaults = {
  boolean: [
    'help',
    'version',
    'open',
    'detailed',
    'sfw'
  ],
  alias: {
    h: 'help',
    v: 'version',
    p: 'posts',
    o: 'open',
    d: 'detailed',
    s: 'sfw'
  },
  default: {
    posts: 1,
    open: false,
    detailed: false,
    sfw: false
  }
};
const help = `
  Usage: til [OPTIONS]
    Open random TILs from /r/todayilearned.

  Options:
    -h --help         Display this help dialog
    -v --version      Display current version
    -p --posts        The number of TILs to display (defaults to 1)
    -o --open         Whether or not to open the TIL urls (defaults to false)
    -d --detailed     Whether or not to show detailed information for each TIL (defaults to false)
    -s --sfw          Whether or not to _only_ show sfw content (defaults to false)

  Example:
    $ til --posts 1 # view 1 post
    $ til --posts 7 --open # view and open 7 posts
    $ til --posts 3 --open --detailed # view (in detail) and open 3 posts
    $ til --posts 8 --open --detailed --sfw # view (in detail) and open 8 sfw posts
`;

const run = options => til(options);

exports.stdout = process.stdout;
exports.stderr = process.stderr;

exports.parse = argv => minimist(argv, defaults);

exports.run = options => {
  if (options.help) {
    exports.stdout.write(`${help}\n`);
    return;
  }

  if (options.version) {
    exports.stdout.write(`til v${version}\n`);
    return;
  }

  run(options);
};
