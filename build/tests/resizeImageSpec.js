'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var resizeImage_1 = __importDefault(require('../server/utilites/resizeImage'));
/* ---- Test resizeimages function ---- */
// Test with sending image name with image dimentions
var image = 'encenadaport';
var height = 500;
var width = 1200;
it('The function should resize the input image to added dimentions', function () {
  var newImage = (0, resizeImage_1.default)(image, width, height);
  expect(newImage).toBeTruthy();
});
