inject.js (0.0.1)
=========

**NOTE: This module is currently in development and not ready for production.**

Simple and small library to inject resources into DOM at any time. 

## API
```
  inject('script.js);
  inject('elements/web-component.html');
  inject('ui-skin.js');
```
## Features
* Synchronous module injection
* JS, CSS, HTML

## Requirements

* This module only tests evergreen browsers (latest versions).
* HTML injection requires Web Components to be enabled. See `Polymer` for a shim.

## Design Goals


### Design Goals (By Priority)

#### Primary
* Simple API 
* Keep it small (micro library size).
* Keep it fast.

#### Secondary
* Use simple injection techniques
* Avoid parsing HTML for logic (2-way binding style). These are usually slow.


## Possible Use Cases

* **Lazy loading for conditional builds and large scale apps**: inject files based on any conditions, whether browser type or user event.
* **Lazy loading for 


## Roadmap

* Enable Browserify bundle lazy loading
* Emit events on module loads
* Ability to remove resources (?)
* Async loading (?)

## Credits
* Portions of the codebase are a fork of `yepnope.js`
