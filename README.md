inject.js (0.0.0)
=========

**NOTE: This module is currently in development and not ready for production.**

Simple and small library to inject resources into DOM at any time. 

## API
```
  inject('script.js);
  inject('elements/web-component.html');
  inject('ui-skin.js');
```

## Requirements

* This module only tests evergreen browsers (latest versions).
* HTML injection requires Web Components to be enabled. See `Polymer` for a shim.

## Purpose

I wanted a simple micro library to lazy-load modules in large scale apps.

## Roadmap

* Enable Browserify bundle lazy loading
* Emit events on module loads
* Ability to remove resources (?)
* Async loading (?)

## Credits
* Portions of the codebase are a fork of `yepnope.js`
