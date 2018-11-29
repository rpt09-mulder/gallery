/*
Write a loop to create 100 documents
-make sure the the id of each property is a randomly generated 6 digit number, and convert it to a string
-make sure each document has at least 8 photos, each with randomly generated ids, but the same location urls

*/

const generateProperties = (qty) => {
  const properties = [];
  

  for (let i = 0; i < qty; i++) {
    const id = Math.floor(Math.random() * 90000) + 10000;
    console.log(id)
    const property = {
      id:  String,
      photos: [{ id: String, location: String }]
    }
  }
}

console.log(generateProperties(10))