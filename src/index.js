'use strict';

const fetchOptions = require('./options');
const utils = require('./utils')();

const fetchPosts = () => {
  return utils.fetch(fetchOptions);
};

const filterPosts = posts => {
  return utils.filter(posts);
};

const chooseRandomPost = (posts, n) => {
  return utils.choose(posts, n);
};

const outputContent = posts => {
  return utils.output(posts);
};

const openLinks = (links, toOpen) => {
  return utils.open(links, toOpen);
}

const run = options => {
  return fetchPosts()
    .then(response => {
      return filterPosts(response.body);
    })
    .then(response => {
      return chooseRandomPost(response, options.posts);
    })
    .then(response => {
      return outputContent(response);
    })
    .then(response => {
      return openLinks(response, options.open);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = options => {
  run(options);
};
