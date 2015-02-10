'use strict'

module.exports = createPerpsectiveCamera

var perspective = require('gl-mat4/perspective')

function PerspectiveCameraController(width, height, fovy, fovx, fovmode, near, far) {
  this.width    = width
  this.height   = height
  this.fovy     = fovy
  this.fovx     = fovx
  this.near     = near
  this.far      = far
  this._fovmode  = fovmode
  this._isDirty = true
}

var proto = PerspectiveCameraController.prototype

proto.dirty = function() {
  return this._isDirty
}

proto.get = function(matrix) {
  perspective(matrix, this.fovy, this.width/this.height, this.near, this.far)
  this._isDirty = false
}

proto._recalcFOV = function() {
  if(this._fovmode === 0) {
    this.fovx = this.fovy * this.width / this.height
  } else {
    this.fovy = this.fovx * this.height / this.width
  }
}

proto.setWidth = function(w) {
  this._isDirty = this.width !== w
  this.width = w
  this._recalcFOV()
}

proto.setHeight = function(h) {
  this._isDirty = this.height !== h
  this.height = h
  this._recalcFOV()
}

proto.setFOVY = function(fovy) {
  this._isDirty = this.fovy !== fovy
  this.fovy     = fovy
  this._fovmode = 1
  this._recalcFOV()
}

proto.setFOVX = function(fovx) {
  this._isDirty = this.fovx !== fovx
  this.fovx = fovx
  this._fovmode = 0
  this._recalcFOV()
}

proto.setNear = function(near) {
  this._isDirty = this.near !== near
  this.near     = near
}

proto.setFar = function(far) {
  this._isDirty = this.far !== far
  this.far      = far
}

function createPerpsectiveCamera(options) {
  var result = new PerspectiveCameraController(
    options.width  || 512,
    options.height || 512,
    fovx,
    fovy,
    fovmode,
    options.near   || 0.01,
    options.far    || 10000.0)
  result._recalcFOV()
  return result
}