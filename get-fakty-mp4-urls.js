// Count all of the links from the io.js build page
var jsdom = require("jsdom");
var faktyDomain = "http://fakty.tvn24.pl";
var faktyURL = faktyDomain + "/ogladaj-online,60";
var jqueryURL = "http://code.jquery.com/jquery.js";
// var util  = require('util'),
//     spawn = require('child_process').spawn, ls;



jsdom.env(
  faktyURL,
  [jqueryURL],
  function (err, window) {
    var $ = window.$; // jQuery

    $('.list-watch-facts:first article').each(function(i,v) {
      if (i === 0) {
        return;
      }
      var url = $(v).find('a').attr('href');
      // console.log(i +') ' + url);

      jsdom.env(faktyDomain + url, [jqueryURL], function(err,window) {
        var $ = window.$;
        var mp4Url = $('.video-player .videoPlayer[data-src]').attr('data-src');

        console.log(mp4Url);
      });
    });
  }
);
