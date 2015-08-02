var test = require('tape');

var lean = require('../lean.min.js');

test('inject css file', function(t) {


    var href = './test/spec-resources/bootstrap.min.css';

    lean.inject(href);

    var thisHref = document.querySelector('head').querySelector('link').getAttribute('href')

    t.isEqual(thisHref, href);
    t.end();

});

test('inject js file', function(t) {


    var src = './test/spec-resources/jquery.min.js';

    lean.inject(src);

    var deezScripts = document.querySelectorAll('script')
    for (var x=0;x<deezScripts.length; x++) {
		if (deezScripts[x].getAttribute('src') === src) {
			var thisSrc = deezScripts[x].getAttribute('src');
		}
    }
	t.equal(thisSrc, src)
    t.end();

});

test('inject html file', function(t) {


    var src = './test/spec-resources/widget.html';

    lean.inject(src);

    var deezScripts = document.querySelectorAll('link')
    for (var x=0;x<deezScripts.length; x++) {
		if (deezScripts[x].getAttribute('href') === src) {
			var thisSrc = deezScripts[x].getAttribute('href');
		}
    }
	t.equal(thisSrc, src)
    t.end();

});