function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

function getDogBreeds() {
  return sleep(500).then(() => {
    return [
      {
        id: "2f349b0c-0faf-4c87-94b6-d26d2fe022ed",
        name: "Golden Retriever"
      },
      {
        id: "ea382216-985b-4558-8121-a7bbfaba06ad",
        name: "Corgi"
      },
      {
        id: "6f0e0d6e-ff65-40e1-8de7-d767b1218edf",
        name: "Yellow Lab"
      },
      {
        id: "e6450423-61f9-4d51-a161-a463e2b05aff",
        name: "Pit Bull"
      },
      {
        id: "2641706a-f5b8-49f9-8b9b-cf2327163e2c",
        name: "German Shepherd"
      }
    ]
  })
}

module.exports = {
  getDogBreeds
}
