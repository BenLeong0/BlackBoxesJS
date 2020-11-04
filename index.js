var values = [];
var N = 2;
for (var i = 0; i < Math.pow(10, N); i++) {
   values.push(i);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(values)
console.log(values)



function buttonA() {
  console.log("pressed button a!")
  document.getElementById("number").innerHTML = 0
}

function buttonB() {
  console.log("pressed button b!")
  n = parseInt(document.getElementById("number").innerHTML)
  document.getElementById("number").innerHTML = values[n]
}
