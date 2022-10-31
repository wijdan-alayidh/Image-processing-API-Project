import path from 'path';
import sharp from 'sharp';

// This function will work on resizing images if url query has a valid dimensions
const resizeImage = async (
  image: string,
  width: unknown,
  height: unknown
): Promise<string> => {
  /* --- Folders that contain pictures   --- */
  const currentDir: string = __dirname;
  const fullImagesDir = '../../../assets/images/full' as string;
  const thumbImagesDir = '../../../assets/images/thumb' as string;

  const imagePathFull: string = path.join(currentDir, fullImagesDir);
  const imagePathThumb: string = path.join(currentDir, thumbImagesDir);

  await sharp(`${imagePathFull}/${image}.jpg`)
    .resize(Number(width), Number(height))
    .toFile(`${imagePathThumb}/${image}_${height}_${width}.jpg`);

  const newImage = `${imagePathThumb}/${image}_${height}_${width}.jpg`;

  return newImage;
};

export default resizeImage;
