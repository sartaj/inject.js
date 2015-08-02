lean.js (1.0.0)
=========

![leanjs!](./about/lean.png)

Simple and small library client-side browser library to inject HTML, CSS, or JS into DOM at any time.

## API
```
  lean.inject('bundle.js');
  lean.inject('elements/web-component.html');
  lean.inject('styles/ui-skin.css');
```
## Features
* Synchronous module injection
* JS, CSS, HTML Support

## Requirements

* **This module is currently in development and not ready for production.**
* This module will only test evergreen browsers (latest versions).
* HTML injection requires Web Components to be enabled. See `Polymer` for a shim.
* Dynamic names not support yet.

## Possible Use Cases

### Lazy Loading for:

* **Conditional builds**: inject files based on any conditions, whether browser type or user event.
* **Ecosystem apps**: Load modules like widgets as you need them.
* **Module loaders that don't support lazy loading (like Browserify)**: Load modules as you need them.

## Design Goals

#### Primary Goals
1. Extremely Simple API 
2. Keep it small.
3. Keep it fast.
4. Properly tested.

#### Design decisions to achieve goals
* Use simple injection techniques. (Simple script loads) [2] [3]
* Avoid parsing HTML for logic (2-way binding style). [2]
* Support only evergreen browsers [2] [3]

## Roadmap

#### 0.2.0
* Write tests
* Hook into OSS devops services

#### 1.0.0 [production release]
* Dynamic names (for minification)

#### 1.1.0
* Emit events on module loads for loading screen integration.

#### Backlog
* Enable Browserify bundle lazy loading
* Ability to remove resources (?)
* Async loading (?)

## Credits
* Portions of the codebase are a fork of `yepnope.js`
