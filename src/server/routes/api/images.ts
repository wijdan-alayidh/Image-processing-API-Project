/*** --- Steps to create route --- ***/

// STEP 1 : Import Express
import express, { Request, Response } from 'express';
import fs from 'fs-extra';
import path from 'path';
import validateInputIsNumber from '../../utilites/validateInputs';
import resizeImage from '../../utilites/resizeImage';

// STEP 2 : use router function from express
const images = express.Router();

// STEP 3 : create route functionality
images.get('/', async (req: Request, res: Response): Promise<void> => {
  // Query parameters - Image name - height - width
  const image: unknown = req.query.image;
  const imageHeight = Number(req.query.height);
  const imageWidth = req.query.width;

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
        // Validate height and width is numbers
        const validHeight: boolean = validateInputIsNumber(imageHeight);
        const validWidth: boolean = validateInputIsNumber(imageWidth);

        if (validHeight && validWidth) {
          // Resize the image based on image dimensions passed to the URL

          const resizedImage = await resizeImage(
            image as string,
            imageWidth,
            imageHeight
          );
          // Sending the resized image to the browser
          try {
            res.sendFile(resizedImage);
          } catch (error) {
            console.error(error);
          }
        } else {
          res.send('Please input correct height and width');
        }
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
