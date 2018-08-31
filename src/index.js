var $ = require('jquery');
var utils = require('./utils');
var sum = require('./utils').sum;

function init() {
  $("body").append("hello");
  utils.log('test');
  utils.forEach(document.getElementsByTagName("div"), function() {
  	utils.log("Another");
  });
  alert(sum(2,2));
  alert(utils.data.title);
}

init();