// b.Convert all the strings to title caps in a string array

let a = ["he is king", "she is queen", "this is their kingdom"];

(function (b) {
  for (let i = 0; i < b.length; i++) {
    let words = b[i].toLowerCase().split(" ")
    for (let j = 0; j < words.length; j++) {
      words[j] = words[j][0].toUpperCase() + words[j].slice(1)
    }
    b[i] = words.join(" ")
  }
  console.log(a)
})(a);
