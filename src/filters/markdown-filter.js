const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
}).use(require('markdown-it-container'), 'howitworks').use(require('markdown-it-container'), 'warning');


module.exports = function markdown(value) {
  return markdownIt.render(value);
};