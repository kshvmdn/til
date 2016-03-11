'use strict';

const _ = require('underscore');
const chalk = require('chalk');
const ent = require('ent');
const got = require('got');
const open = require('opn');

const requestOptions = require('./options');
const jsonUrl = 'https://www.reddit.com/r/todayilearned.json?limit=100';

const fetch = (url, opt) => got(url, opt);

const filter = (posts, sfw) => {
  // remove stickied posts (i.e. modposts (i.e. non-TILs))
  return _.filter(posts.data.children, post => {
    return sfw ? !post.data.stickied && !post.data.over_18 : !post.data.stickied;
  });
};

const chooseRandom = (posts, n) => {
  n = n >= 0 ? n : 1;
  return _.sample(posts, n);
};

const output = (posts, showDetailed) => {
  const urls = [];
  _.each(posts, post => {
    const p = post.data;
    const title = chalk.bold(ent.decode(`${p.title}`));
    const stats = `▪ 👍: ${chalk.yellow(p.ups)} | 💬: ${chalk.yellow(p.num_comments)}`;
    const url = `▪ ${chalk.green(p.url)}\n▪ ${chalk.magenta(`https://reddit.com${p.permalink}`)}`;

    const str = showDetailed ? `${title}\n${stats}\n${url}` : `${title}`;
    console.log(`\n${str}\n`);
    urls.push(p.url);
  });
  return urls;
};

const openUrl = (urls, toOpen) => {
  if (!toOpen) {
    return;
  }

  _.each(urls, url => {
    open(url);
  });
};

const run = options => {
  return fetch(jsonUrl, requestOptions)
    .then(response => {
      return filter(response.body, options.sfw);
    })
    .then(response => {
      return chooseRandom(response, options.posts);
    })
    .then(response => {
      return output(response, options.detailed);
    })
    .then(response => {
      openUrl(response, options.open);
      return process.exit(0);
    })
    .catch(error => {
      console.log(error);
      return process.exit(1);
    });
};

module.exports = options => {
  run(options);
};
