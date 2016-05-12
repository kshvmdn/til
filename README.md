# til
Read random TILs from [/r/todayilearned](https://reddit.com/r/todayilearned) through your command line. Available on [npm](https://www.npmjs.com/package/todayilearned).

### Installation/usage

+ Install via [npm](https://www.npmjs.com/package/todayilearned).

  ```
  npm i todayilearned -g
  ```

+ Run `til` to use.

  ```
  til
  ```

+ Options, run `-h` to see this dialog in your command line.

  ```
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
  ```

### Contribute

This project is completely open source. Feel free to open an [issue](https://github.com/kshvmdn/til/issues) or make a [PR](https://github.com/kshvmdn/til/pulls).
