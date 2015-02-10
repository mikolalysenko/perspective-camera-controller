perspective-camera-controller
=============================
An interface for generating a perspective matrix from a set of input variables.

# Install

```
npm i perspective-camera-controller
```

# API

## Constructor

#### `var controller = require('perspective-camera-controller')(options)`
Constructs the perspective matrix controller

* `options.width` initial width
* `options.height` initial height
* `options.fovx` initial horizontal fov
* `options.fovy` initial vertical fov
* `options.znear` initial near clip distance
* `options.zfar` initial far clip distance

**Returns** A new controller object

## Properties

#### `controller.width`
The width of the view port for the camera

#### `controller.height`
The height of the view port for the camera

#### `controller.fovy`
Vertical fov angle in radians

#### `controller.fovx`
Horizontal fov angle in radians

#### `controller.near`
Near clip plane distance

#### `controller.far`
Far clip plane distance

## Methods

#### `controller.get(matrix)`
Retrieves the current camera matrix

* `matrix` gets the result of the camera matrix

**Returns** `matrix`

#### `controller.dirty()`
**Returns** `true` if the state of the matrix has changed since last call to `get`

#### `controller.setNear(zn)`
Sets near clip plane distance

#### `controller.setFar(zn)`
Sets far clip plane distance

#### `controller.setFOVX(fov)`
Sets horizontal fov angle

#### `controller.setFOVY(fov)`
Sets vertical fov angle

#### `controller.setWidth(w)`
Sets camera width

#### `controller.setHeight(h)`
Sets camera height

# License
(c) 2015 Mikola Lysenko. MIT License