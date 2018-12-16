const Promise = require('bluebird');
const readFile = Promise.promisify(require('fs').readFile);
const readDir = Promise.promisify(require('fs').readdir);
const _ = require('lodash');

async function randomImage(dir) {
  const rawList = await readFile(dir, "utf8");
  const photos = rawList.toString().split('\n');
  return photos[_.random(0, photos.length - 1)]
}

async function getFilename(dir) {
  const files = await readDir(dir);
  console.log(files)
}

getFilename(`${__dirname}/downloads`);


module.exports = {
  randomImage: randomImage,
  getFilename: getFilename
}