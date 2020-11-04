var values = []

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

function get_values(N) {
  values = [];
  for (var i = 0; i < Math.pow(10, N); i++) {
     values.push(i);
  }
  shuffle(values)
  document.getElementById("number1").innerHTML = 0
  document.getElementById("number2").innerHTML = 0
}

get_values(2)


function buttonA1() {
  console.log("pressed button a1!")
  document.getElementById("number1").innerHTML = 0
}

function buttonB1() {
  console.log("pressed button b1!")
  n = parseInt(document.getElementById("number1").innerHTML)
  document.getElementById("number1").innerHTML = values[n]
}

function buttonA2() {
  console.log("pressed button a2!")
  document.getElementById("number2").innerHTML = 0
}

function buttonB2() {
  console.log("pressed button b2!")
  n = parseInt(document.getElementById("number2").innerHTML)
  document.getElementById("number2").innerHTML = values[n]
}

var w = window.innerWidth;
document.getElementById("widthinfo").innerHTML = w
