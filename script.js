//use JQuery
var textBox1 = $("#text1");
var textBox2 = $("#text2");
var textBox3 = $("#text3");
var textBox4 = $("#text4");
var textBox5 = $("#text5");
var textBox6 = $("#text6");
var textBox7 = $("#text7");
var textBox8 = $("#text8");
var textBox9 = $("#text9");
var saveBtn = $(".savebtn");
// when user load the page it will show the text has been saved
// calling a function to pull texts from local storage
init();
var nine = [];
var ten = [];
var ele = [];
var twe = [];
var one = [];
var two = [];
var three = [];
var four = [];
var five = [];

function init() {
  // Get stored timelist from localStorage
  // Parsing the JSON string to an object
  var storedNine = JSON.parse(localStorage.getItem("nine"));
  var storedTen = JSON.parse(localStorage.getItem("ten"));
  var storedEle = JSON.parse(localStorage.getItem("ele"));
  var storedTwe = JSON.parse(localStorage.getItem("twe"));
  var storedOne = JSON.parse(localStorage.getItem("one"));
  var storedTwo = JSON.parse(localStorage.getItem("two"));
  var storedThree = JSON.parse(localStorage.getItem("three"));
  var storedFour = JSON.parse(localStorage.getItem("four"));
  var storedFive = JSON.parse(localStorage.getItem("five"));
  // If todos were retrieved from localStorage, update the todos array to it
  if (storedNine !== null) {
    nine = storedNine;
  }
  if (storedTen !== null) {
    ten = storedTen;
  }
  if (storedEle !== null) {
    ele = storedEle;
  }
  if (storedTwe !== null) {
    twe = storedTwe;
  }
  if (storedOne !== null) {
    one = storedOne;
  }
  if (storedTwo !== null) {
    two = storedTwo;
  }
  if (storedThree !== null) {
    three = storedThree;
  }
  if (storedFour !== null) {
    four = storedFour;
  }
  if (storedFive !== null) {
    five = storedFive;
  }

  // Render todos to the DOM
  textbox();
}

function textbox() {
  textBox1.text("");
  textBox2.text("");
  textBox3.text("");
  textBox4.text("");
  textBox5.text("");
  textBox6.text("");
  textBox7.text("");
  textBox8.text("");
  textBox9.text("");

  for (var i = 0; i < nine.length; i++) {
    var items = nine[i];
    textBox1.text(items);
  }
  for (var i = 0; i < ten.length; i++) {
    var items = ten[i];
    textBox2.text(items);
  }
  for (var i = 0; i < ele.length; i++) {
    var items = ele[i];
    textBox3.text(items);
  }
  for (var i = 0; i < twe.length; i++) {
    var items = twe[i];
    textBox4.text(items);
  }
  for (var i = 0; i < one.length; i++) {
    var items = one[i];
    textBox5.text(items);
  }
  for (var i = 0; i < two.length; i++) {
    var items = two[i];
    textBox6.text(items);
  }
  for (var i = 0; i < three.length; i++) {
    var items = two[i];
    textBox7.text(items);
  }
  for (var i = 0; i < four.length; i++) {
    var items = two[i];
    textBox8.text(items);
  }
  for (var i = 0; i < five.length; i++) {
    var items = two[i];
    textBox9.text(items);
  }
}
// 1st Part:
//save button

//add the info to local storage when user click save button
saveBtn.on("click", function () {
  //JSON function to get and set text
  var v = $(this).val(); // getting which save button has been click
  console.log(v);
  var value = parseInt(v); //turn string in html into int.
  console.log(typeof value);

  if (value === 0) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    nine.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 1) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    ten.push(text);

    storelocal(value);
    textbox();
  }

  if (value === 2) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    ele.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 3) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    twe.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 4) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    one.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 5) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    two.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 6) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    three.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 7) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    four.push(text);

    storelocal(value);
    textbox();
  }
  if (value === 8) {
    var text = textBox1.value.trim();
    if (text === "") {
      return;
    }
    five.push(text);

    storelocal(value);
    textbox();
  }
});

function storelocal(num) {
  if (num === 0) {
    localStorage.setItem("nine", JSON.stringify(nine));
  }
  if (num === 1) {
    localStorage.setItem("nine", JSON.stringify(ten));
  }
  if (num === 2) {
    localStorage.setItem("nine", JSON.stringify(ele));
  }
  if (num === 3) {
    localStorage.setItem("nine", JSON.stringify(twe));
  }
  if (num === 4) {
    localStorage.setItem("nine", JSON.stringify(one));
  }
  if (num === 5) {
    localStorage.setItem("nine", JSON.stringify(two));
  }
  if (num === 6) {
    localStorage.setItem("nine", JSON.stringify(three));
  }
  if (num === 7) {
    localStorage.setItem("nine", JSON.stringify(four));
  }
  if (num === 8) {
    localStorage.setItem("nine", JSON.stringify(five));
  }
}

// 2nd Part:
//get real local time
// default class= future
// current: remove class = future   add class = current
// past : remove class=current  add class = past

//
