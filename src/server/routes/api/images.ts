/*** --- Steps to create route --- ***/

// STEP 1 : Import Express
import express from 'express';
import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

// STEP 2 : use router function from express
const images = express.Router();

// STEP 3 : create route functionality
images.get('/', async (req, res): Promise<void> => {
  // Query parameters - Image name - height - width
  const image: unknown = req.query.image as string;
  const imageHeight = Number(req.query.height) as number;
  const imageWidth = Number(req.query.width) as number;

  /* --- Validate query inputs --- */

  const queryHasImage: boolean = 'image' in req.query;
  const queryHasHeight: boolean = 'height' in req.query;
  const queryHasWidth: boolean = 'width' in req.query;

  /* --- Folders that contain pictures   --- */
  const currentDir: string = __dirname;
  const fullImagesDir = '../../../../assets/images/full' as string;
  const thumbImagesDir = '../../../../assets/images/thumb' as string;

  const imagePathFull: string = path.join(currentDir, fullImagesDir);
  const imagePathThumb: string = path.join(currentDir, thumbImagesDir);

  /* --- URL Query Cases --- */

  // CASE 1: If URL Query contains only image name
  if (queryHasImage) {
    if (fs.existsSync(`${imagePathFull}/${image}.jpg`)) {
      if (
        fs.existsSync(
          `${imagePathThumb}/${image}_${imageHeight}_${imageWidth}.jpg`
        )
      ) {
        res.sendFile(
          `${imagePathThumb}/${image}_${imageHeight}_${imageWidth}.jpg`
        );

        // CASE 2: If URL Query contains image name and image dimensions
      } else if (queryHasHeight && queryHasWidth) {
        // Resize the image based on image dimensions passed to the URL
        await sharp(`${imagePathFull}/${image}.jpg`)
          .resize(imageWidth, imageHeight)
          .toFile(
            `${imagePathThumb}/${image}_${imageHeight}_${imageWidth}.jpg`
          );
        // Sending the resized image to the browser
        res.sendFile(
          `${imagePathThumb}/${image}_${imageHeight}_${imageWidth}.jpg`
        );
        // Sending the Original image if the URL does not contain image dimensions
      } else {
        res.sendFile(`${imagePathFull}/${image}.jpg`);
      }
    } else {
      res.status(404).send('Image not found');
    }
  }
});

// STEP 4 : export route
export default images;
