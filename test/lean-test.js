var test = require('tape');

var lean = require('../lean.min.js');

test('require html file', function(t) {

    t.plan(3);

    var src = 'https://www.polymer-project.org/0.5/components/core-toolbar/core-toolbar.html';

    setTimeout(function() {
        var webComponent = lean.require(src);
        t.equal(isElement(webComponent), true)
    }, 60);

    setTimeout(function() {
        var webComponent = lean.require(src);

        var linkarr = getScripts(src);
        console.log('link arr', linkarr);
        t.equal(linkarr.length, 1);
        t.equal(isElement(webComponent), true)

    }, 120);

});

test('inject html file', function(t) {

    t.plan(1);

    var src = 'https://www.polymer-project.org/0.5/components/paper-fab/paper-fab.html';

    lean.inject(src);

    setTimeout(function() {
        var webComponent = lean.inject(src);
        webComponent = document.createElement(webComponent);
        document.body.appendChild(webComponent);
        t.equal(isElement(webComponent), true)
    }, 2000);


});

function isElement($obj){
    try {
        return ($obj.constructor.__proto__.prototype.constructor.name)?true:false;
    }catch(e){
        return false;
    }
}

function getScripts(src) {
    var links = [];
    var deezScripts = document.querySelectorAll('link')
    for (var x = 0; x < deezScripts.length; x++) {
        if (deezScripts[x].getAttribute('href') === src) {
            links.push(deezScripts[x]);
        }
    }
    return links;

}
