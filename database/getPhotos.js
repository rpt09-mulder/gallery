const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);

async function getHomes() {
  return await readFile(`${__dirname}/homes.txt`, "utf8");
}

getHomes().then((data) => {
  console.log(data)
})

