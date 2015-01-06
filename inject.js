(function(inject) { "use strict";

  inject = function(file) {
    

    function getFileType(file) {

      var extension;

      extension = file.split('.');
      extension = extension[extension.length-1];

      return extension;
    }

    function injectFile(extension) {

      var injectFile = {
        'js': injectJs(file),
        'css': injectCss(file),
        'html': injectHtml(file)
      }

      injectFile[extension];

    }

    function injectJs(file) {
      console.log('inject', file)
      var script = document.createElement('script');
      script.src = file;

    }


    function injectCss(file) {

    // Create stylesheet link
      var link = document.createElement('link');

      // Add attributes
      link.href = file;
      link.rel = 'stylesheet';

      // Technique to force non-blocking loading from:
      // https://github.com/filamentgroup/loadCSS/blob/master/loadCSS.js#L20
      link.media = 'only x';
      link.type = 'text/css';

    }


    function injectHtml(file) {

      // var link = document.createElement('link');

      // // Add attributes
      // link.href = file;
      // link.rel = 'imports';

    }

    function run() {

      var fileType = getFileType(file);

      injectFile(file, fileType);

    }

    run();

  }

if (typeof exports === 'object') {
  // CommonJS support
  module.exports = inject;
} else if (typeof define === 'function' && define.amd) {
  // support AMD
  define(function() { return inject; });
} else {
  // support browser
  window.inject = inject;
}

})({});
