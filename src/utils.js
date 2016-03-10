'use strict';

const colors = require('colors');
const got = require('got');
const _ = require('underscore');
const open = require('opn');

module.exports = () => {
  return {
    fetch: opt => got('https://www.reddit.com/r/todayilearned.json?limit=5', opt),
    filter: posts => {
      // remove stickied posts (i.e. modposts (i.e. non-TILs))
      const p = posts.data.children;
      return _.filter(p, post => {
        return !post.data.stickied;
      });
    },
  };
};
