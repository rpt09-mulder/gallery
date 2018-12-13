const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const download = require('image-downloader');


async function getHomes() {
  return await readFile(`${__dirname}/homes.txt`, "utf8");
}

getHomes().then((data) => {
  const homesArray = data.toString().split("\n");
  async function downloadImages() {
    for (let i = 0; i < 500; i++) {
      try {
        await download.image(homesArray[i], `${__dirname}/downloads`);
      } catch (e) {
        console.error(e)
      }
    }
  }

  downloadImages();
})

