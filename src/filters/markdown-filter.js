const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
  quotes: '“”‘’'
});


module.exports = function markdown(value) {
  return markdownIt.render(value);
};