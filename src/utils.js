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
    choose: (posts, n) => {
      return _.sample(posts, n);
    },
    output: posts => {
      _.each(posts, post => {
        const p = post.data;
        p.permalink = 'https://reddit.com' + p.permalink;

        const title = colors.bold(`${p.title}`);
        const stats = colors.yellow(`👍: ${p.ups} | 💬: ${p.num_comments}`);
        const links = colors.blue(`${p.url}\n${p.permalink}`);

        console.log(`\n${title}\n${stats}\n${links}\n`);
      });
    },
  };
};
