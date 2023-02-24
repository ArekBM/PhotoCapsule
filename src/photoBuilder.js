const fs = require('fs');
const path = require('path');

function createPhotoObjectAndSaveAsJSON(folderPath, outputFile) {
  // Create an empty object to store photo information
  const photoObject = {};

  // Get a list of all files in the specified folder
  const files = fs.readdirSync(folderPath);

  // Iterate through each file in the folder
  files.forEach((file, i) => {
    // Only process image files
    if (path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.png') {
      // Get the full path to the file
      const filePath = path.join(folderPath, file);

      // Get the file stats (size, modified date, etc.)
      const stats = fs.statSync(filePath);

      // Add an entry to the photo object with the file name as the key
      photoObject[i] = {
        path: filePath,
        year: file.slice(0, 4)
      };
    }
  });

  // Convert the photo object to JSON
  const photoObjectJSON = JSON.stringify(photoObject);

  // Write the JSON to a file
  fs.writeFileSync(outputFile, photoObjectJSON);

  console.log(`Photo information saved to ${outputFile}`);
}




createPhotoObjectAndSaveAsJSON(path.normalize('./photos'), path.normalize('photos.json'));
