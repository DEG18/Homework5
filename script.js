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
var currentDay = $("#currentDay");
// when user load the page it will show the text has been saved
// calling a function to pull texts from local storage

function displayDate() {
  currentDay.text(moment().format("dddd, MMMM Do, YYYY"));
  // currentDay.text(new Date($.now()));
  console.log(moment().format("dddd, MMMM Do, YYYY"));
}

var nine = [];
var ten = [];
var ele = [];
var twe = [];
var one = [];
var two = [];
var three = [];
var four = [];
var five = [];
init();

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
  textbox();
  displayDate();
  backgroundchange();
}
// 1st Part:
//save button

//add the info to local storage when user click save button
saveBtn.on("click", function () {
  //JSON function to get and set text
  var value = $(this).val(); // getting which save button has been click
  console.log(value);
  var v = parseInt(value); //turn string in html into int.
  console.log(typeof v);

  if (v === 0) {
    var text = textBox1.val();
    console.log(text);
    if (text === "") {
      return;
    }
    nine.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 1) {
    var text = textBox2.val();
    if (text === "") {
      return;
    }
    ten.push(text);

    storelocal(v);
    textbox();
  }

  if (v === 2) {
    var text = textBox3.val();
    if (text === "") {
      return;
    }
    ele.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 3) {
    var text = textBox4.val();
    if (text === "") {
      return;
    }
    twe.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 4) {
    var text = textBox5.val();
    if (text === "") {
      return;
    }
    one.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 5) {
    var text = textBox6.val();
    if (text === "") {
      return;
    }
    two.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 6) {
    var text = textBox7.val();
    if (text === "") {
      return;
    }
    three.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 7) {
    var text = textBox8.val();
    if (text === "") {
      return;
    }
    four.push(text);

    storelocal(v);
    textbox();
  }
  if (v === 8) {
    var text = textBox9.val();
    if (text === "") {
      return;
    }
    five.push(text);

    storelocal(v);
    textbox();
  }
});

function storelocal(num) {
  console.log(num);
  if (num === 0) {
    localStorage.setItem("nine", JSON.stringify(nine));
  }
  if (num === 1) {
    localStorage.setItem("ten", JSON.stringify(ten));
  }
  if (num === 2) {
    localStorage.setItem("ele", JSON.stringify(ele));
  }
  if (num === 3) {
    localStorage.setItem("twe", JSON.stringify(twe));
  }
  if (num === 4) {
    localStorage.setItem("one", JSON.stringify(one));
  }
  if (num === 5) {
    localStorage.setItem("two", JSON.stringify(two));
  }
  if (num === 6) {
    localStorage.setItem("three", JSON.stringify(three));
  }
  if (num === 7) {
    localStorage.setItem("four", JSON.stringify(four));
  }
  if (num === 8) {
    localStorage.setItem("five", JSON.stringify(five));
  }
}

// 2nd Part:
//get real local time
function backgroundchange() {
  // default class= future
  // current: remove class = future   add class = current
  // past : remove class=current  add class = past

  console.log(new Date($.now()));
  var date = new Date($.now());
  newDate = date.toString();
  var hour1 = newDate[16];
  var hour2 = newDate[17];
  console.log(hour1);
  console.log(hour2);
  var hour = hour1 + hour2;
  console.log(hour);
  var hr = parseInt(hour);
  console.log(hr);

  if (hr >= 9) {
    if (hr === 9) {
      $("#text1").attr("class", "current");
    } else {
      $("#text1").attr("class", "pass");
    }
  }
  if (hr >= 10) {
    if (hr === 10) {
      $("#text2").attr("class", "current");
    } else {
      $("#text2").attr("class", "pass");
    }
  }
  if (hr >= 11) {
    if (hr === 11) {
      $("#text3").attr("class", "current");
    } else {
      $("#text3").attr("class", "pass");
    }
  }
  if (hr >= 12) {
    if (hr === 12) {
      $("#text4").attr("class", "current");
    } else {
      $("#text4").attr("class", "pass");
    }
  }
  if (hr >= 13) {
    if (hr === 12) {
      $("#text5").attr("class", "current");
    } else {
      $("#text5").attr("class", "pass");
    }
  }
  if (hr >= 14) {
    if (hr === 14) {
      $("#text6").attr("class", "current");
    } else {
      $("#text6").attr("class", "pass");
    }
  }
  if (hr >= 15) {
    if (hr === 15) {
      $("#text7").attr("class", "current");
    } else {
      $("#text7").attr("class", "pass");
    }
  }
  if (hr >= 16) {
    if (hr === 16) {
      $("#text8").attr("class", "current");
    } else {
      $("#text8").attr("class", "pass");
    }
  }
  if (hr >= 17) {
    if (hr === 17) {
      $("#text9").attr("class", "current");
    } else {
      $("#text9").attr("class", "pass");
    }
  }
}
