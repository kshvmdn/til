'use strict';

const fetchOptions = require('./options');
const utils = require('./utils')();

const fetchPosts = () => {
  return utils.fetch(fetchOptions);
};

const filterPosts = posts => {
  return utils.filter(posts);
};

const run = options => {
  return fetchPosts()
    .then(response => {
      return filterPosts(response.body);
    })
    .then(response => {
    })
};
module.exports = options => {
  run(options);
};
