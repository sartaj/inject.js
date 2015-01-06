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
* JS, CSS, HTML Support

## Requirements

* This module only tests evergreen browsers (latest versions).
* HTML injection requires Web Components to be enabled. See `Polymer` for a shim.

## Design Goals

#### Primary Goals
1. Extremely Simple API 
2. Keep it small (micro library size).
3. Keep it fast.
4. Properly tested.

#### Design decisions to achieve goals
* Use simple injection techniques. (Simple script loads) [2] [3]
* Avoid parsing HTML for logic (2-way binding style). [2]
* Support only evergreen browsers [2] [3]

## Possible Use Cases

* **Lazy loading for conditional builds**: inject files based on any conditions, whether browser type or user event.
* **Lazy loading for large-scale apps**: Load modules as you need them.
* **Lazy loading for module loaders (like Browserify)**: Load modules as you need them.

## Roadmap

* Enable Browserify bundle lazy loading
* Emit events on module loads for loading screen integration.
* Ability to remove resources (?)
* Async loading (?)

## Credits
* Portions of the codebase are a fork of `yepnope.js`
