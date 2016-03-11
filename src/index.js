'use strict';

const _ = require('underscore');
const chalk = require('chalk');
const ent = require('ent');
const got = require('got');
const open = require('opn');

const requestOptions = require('./options').request;
const jsonUrl = 'https://www.reddit.com/r/todayilearned.json?limit=100';

const fetch = (url, opt) => got(url, opt);

const filter = posts => {
  // remove stickied posts (i.e. modposts (i.e. non-TILs))
  return _.filter(posts.data.children, post => {
    return !post.data.stickied;
  });
};

const chooseRandom = (posts, n) => {
  n = n >= 0 ? n : 1;
  return _.sample(posts, n);
};

const outputContent = posts => {
  return utils.output(posts);
const output = (posts, showDetailed) => {
  const urls = [];
  _.each(posts, post => {
    const p = post.data;
    urls.push(p.url);
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
      return filter(response.body);
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
