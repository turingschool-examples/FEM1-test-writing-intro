var valentines = [
  {
    recipient: "Amy",
    poem: [
      "Roses are red",
      "Violets are blue",
      "My code would be nothing",
      "without your reviews"
    ],
    admirer: "Leta"
  }
]

function addValentine(person, poemArray, name) {
  var newValentine = {
    recipient: person,
    poem: poemArray,
    admirer: name || "your secret admirer"
  }

  valentines.push(newValentine);
}

module.exports = {
  addValentine
}
