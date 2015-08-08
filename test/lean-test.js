var test = require('tape');

var lean = require('../lean.min.js');

test('require html file', function(t) {

    var src = 'https://www.polymer-project.org/0.5/components/core-toolbar/core-toolbar.html';

    var webComponent = lean.require(src);
    var isEl = isElement(webComponent);
    t.equal(isEl, true);

    t.end();

});

test('inject html file', function(t) {

    var src = 'https://www.polymer-project.org/0.5/components/paper-fab/paper-fab.html';

    lean.inject(src);

    var webComponent = lean.inject(src);
    webComponent = document.createElement(webComponent);
    document.body.appendChild(webComponent);
    t.equal(isElement(webComponent), true);

    t.end();
});


test('error on no file', function(t) {

    var src = 'https://www.polymer-project.org/0.5/components/paper-fab/paper-fab.png';

    t.throws(lean.inject, Error);

    t.end();

});


function isElement($obj) {
    return ($obj.constructor === HTMLElement) ? true : false;
}
