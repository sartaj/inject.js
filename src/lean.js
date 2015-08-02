module.exports.inject = function(file) {

    "use strict";


    var firstScript;

    function readFirstScript() {
        // if (!firstScript || !firstScript.parentNode) {
        //     firstScript = document.head;
        // }
        return document.head;
    }


    function getFileType(file) {

        var fileType;

        fileType = file.split('.');
        fileType = fileType[fileType.length - 1];

        // console.log("fileType", fileType);

        return fileType;

    }

    function injectFile(file, fileType) {

        // console.log('injectFile', fileType);

        var injectFile = {
            'js': injectJs,
            'css': injectCss,
            'html': injectHtml
        }

        injectFile[fileType](file);

    }

    function injectJs(file) {


        // console.log("injectJs", file)

        var script = document.createElement('script');
        script.src = file;

        // Inject script into to document
        var doc = readFirstScript();
        doc.appendChild(script);

    }


    function injectCss(file) {

        // console.log("injectCss", file)

        // Create stylesheet link
        var link = document.createElement('link');

        // Add attributes
        link.href = file;
        link.rel = 'stylesheet';

        // Technique to force non-blocking loading from:
        // https://github.com/filamentgroup/loadCSS/blob/master/loadCSS.js#L20
        link.media = 'only x';
        link.type = 'text/css';

        // Inject script into to document
        var doc = readFirstScript();
        doc.appendChild(link);

    }


    function injectHtml(file) {


        // console.log("injectHtml", file);

        // Create stylesheet link
        var link = document.createElement('link');

        // Add attributes
        link.href = file;
        link.rel = 'import';

        // Inject script into to document
        var doc = readFirstScript();
        doc.appendChild(link);

    }

    function run() {

        var fileType = getFileType(file);
        // console.log("fileType", fileType);
        injectFile(file, fileType);

    }

    run();

}
