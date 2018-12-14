const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const _ = require('lodash');

async function randomImage(dir) {
  const rawList = await readFile(dir, "utf8");
  const photos = rawList.toString().split('\n');
  return photos[_.random(0, photos.length - 1)]
}

module.exports = {
  randomImage: randomImage
}