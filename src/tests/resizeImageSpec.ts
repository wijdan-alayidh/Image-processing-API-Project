import resizeImage from '../server/utilites/resizeImage';

/* ---- Test resizeimages function ---- */

// Test with sending image name with image dimentions
const image = 'encenadaport';
const height = 500;
const width = 1200;
it('The function should resize the input image to added dimentions', (): void => {
  const newImage = resizeImage(image, width, height);
  expect(newImage).toBeTruthy();
});
