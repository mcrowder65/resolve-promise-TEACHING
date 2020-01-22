const { getDogBreeds } = require("./utilities")

getDogBreeds().then(dogBreeds => {
  console.log(dogBreeds)
})
