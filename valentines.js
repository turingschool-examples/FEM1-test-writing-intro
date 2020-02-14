function makeValentine(valentine) {
  var sentiment = `Dear ${valentine.recipient},\n${valentine.poem[0]}\n${valentine.poem[1]}\n${valentine.poem[2]}\n${valentine.poem[3]}\nLove, ${valentine.admirer}`

  return sentiment;
}

module.exports = {
  makeValentine
}
