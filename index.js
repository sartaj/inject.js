/**
 * @name lean.js
 * @description microlibrary to import a css, html, or js resource into your project.
 * @maintainer sartaj
 * @license MIT
 */

"use strict";

var getFileInfo = require('./lib/getFileInfo.js');
var checkExtension = require('./lib/checkExtension.js');
var injectHtml = require('./lib/injectHtml.js');

/**
 * @param file {string} - a http file path.
 * @returns {string} - returns name of html file as a document create consumable name.
 * 
 * @example
 * // injects file if needed and returns DOMNode  <todo-widget></todo-widget>
 *  lean.inject('./widgets/todo-widget.html');
 *  var todoWidget = document.createElement('todo-widget');
 * 
 */
module.exports.inject = function(path) {

    var tagLocation = document.head;
    var fileInfo = getFileInfo(path);
    checkExtension(fileInfo)
    injectHtml(path, tagLocation);

    return fileInfo.name;

};


/**
 * @param file {string} - a http file path.
 * @returns {DOMElement} - HTML Imports return a createdDOM Element the import. This will execute the 'createdCallback' or 'created' function in the Web Component.
 * 
 * 
 * @example
 * // injects file if needed and returns DOMNode  <todo-widget></todo-widget>
 *  var todoWidget = lean.require('./widgets/todo-widget.html');
 * 
 */
module.exports.require = function(path) {

    var tagLocation = document.head;
    var fileInfo = getFileInfo(path);

    checkExtension(fileInfo);

    var newElement = document.createElement(fileInfo.name);

    if (newElement.constructor === HTMLElement) {
        injectHtml(path, tagLocation);
        newElement = document.createElement(fileInfo.name);
    }

    return newElement;

};
