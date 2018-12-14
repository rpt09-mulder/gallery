const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const download = require('image-downloader');

async function getHomes(uri) {
  return await readFile(uri, "utf8");
}

getHomes().then((data) => {
  const homesArray = data.toString().split("\n");
  async function downloadImages() {
    for (let i = 0; i < homesArray.length; i++) {
      const options = {
        url: homesArray[i],
        dest: `${__dirname}/downloads`                  
      }
      try {
        await download.image(options);
      } catch (e) {
        console.error(e)
      }
    }
  }
  downloadImages();
})