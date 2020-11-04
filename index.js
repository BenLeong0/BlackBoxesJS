console.log(window.innerHeight)
console.log(window.innerWidth)

if (window.innerHeight > window.innerWidth) {
  console.log('Portrait')
  document.getElementById("mobile").style.display = 'inline'
  document.getElementsByTagName("h1")[0].style.fontSize = "600%"
  document.getElementsByClassName("blackbox")[0].style.maxWidth = "100%"
  document.getElementsByClassName("blackbox")[1].style.maxWidth = "100%"
  document.getElementById("number1").style.fontSize = "250%"
  document.getElementById("number2").style.fontSize = "250%"
  document.getElementById("askdigits").style.fontSize = "250%"

  digitbuttons = document.getElementsByClassName("digitnumber")
  var i;
  for (i = 0; i < digitbuttons.length; i++) {
    digitbuttons[i].style.fontSize = "200%"
    digitbuttons[i].style.margin = "0 5"
  }

  document.getElementById("question_opener").style.width = "100%"
  document.getElementById("question_opener").style.fontSize = "250%"
  document.getElementById("questions").style.width = "100%"
  document.getElementById("questions").style.fontSize = "200%"
  document.getElementsByTagName("a")[1].style.width = "100%"
  document.getElementsByTagName("a")[1].style.fontSize = "250%"

  // questions = document.getElementsByClassName("question")
  // var j;
  // for (j = 0; j < questions.length; j++) {
  //   console.log(questions[j])
  //   questions[j].style.fontSize = "200%"
  //   questions[j].style.width = "100%"
  // }
} else {
  console.log('Landscape')
  document.getElementById("questions").style.width = "70%"
  document.getElementById("questions").style.maxWidth = "800px"
}

var values = []

function eval_f(N) {
  values = []
  var i
  for (i = 0; i < Math.pow(10,N); i++) {
    values.push(Math.floor(Math.pow(10,N) * Math.random()))
  }
  return values
}

function get_values(N) {
  values = [];
  eval_f(N)
  document.getElementById("number1").innerHTML = 0
  document.getElementById("number2").innerHTML = 0
  console.log('New function values:')
  console.log(values)
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

function getwidth() {
  document.getElementById("widthinfo").innerHTML =  window.innerHeight
}
