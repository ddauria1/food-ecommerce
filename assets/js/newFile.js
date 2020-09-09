// 4 input feilds football challenege results javascript and jquery

function inputFootball() {
  name = document.getElementById("name").value;
  win = document.getElementById("wins").value;
  draw = document.getElementById("draws").value;
  loss = document.getElementById("loss").value;
  console.log(name, win, draw, loss);

  if (name == "" || win == "" || draw == "" || loss == "") {
    alert("Not All feilds have been filled");
  } else {
    finalFigure = win * 3 + draw * 1 + loss * 0;
    document.getElementById("footballInputResult").innerHTML =
      "total Score of all wins, losses and draws for " +
      "<span class='footballTeamName'>" +
      name +
      "</span>" +
      " is " +
      +finalFigure;
  }

  // finalFigure = win * 3 + draw * 1 + loss * 0;
  // document.getElementById("footballInputResult").innerHTML =
  //   "total Score of all wins, losses and draws for " +
  //   name +
  //   " is " +
  //   finalFigure;
}

$(document).ready(function () {
  $("#inputFootballJ").click(function () {
    name = $("#name").val();
    win = $("#wins").val();
    draw = $("#draws").val();
    loss = $("#loss").val();

    console.log(name, win, draw, loss);

    if (name == "" || win == "" || draw == "" || loss == "") {
      alert("Not All feilds have been filled");
    } else {
      finalFigure = win * 3 + draw * 1 + loss * 0;
      $("#footballInputResult").html(
        "total Score of all wins, losses and draws for " +
          "<span class='footballTeamName'>" +
          name +
          "</span>" +
          " is " +
          +finalFigure
      );
    }

    // console.log(name, win, draw, loss);
    // finalFigure = win * 3 + draw * 1 + loss * 0;
    // $("#footballInputResult").html(
    //   "total Score of all wins, losses and draws for " +
    //     name +
    //     " is " +
    //     +finalFigure
    // );
  });
});

//--------------------------------------------------------------

//Add up the Numbers from a Single Number

function addUp(number) {
  result = 0;
  if (isNaN(number) || typeof number == "string") {
    alert("enter a number");
  } else {
    for (i = 1; i <= number; i++) {
      result += i;
    }
    console.log(result);
  }
}

addUp(4); //➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

//--------------------------------------------------------------

//What's Hiding Amongst the Crowd?

function detectWord(text, word) {
  if (isNaN(word) && isNaN(text)) {
    foundWord = "";
    for (i = 0; i < text.length; i++) {
      for (t = 0; t < word.length; t++) {
        if (text[i] == word[t]) {
          foundWord += text[i];
          break;
        }
      }
    }

    if (foundWord == word) {
      console.log(true);
    }
    console.log(foundWord);
  } else {
    alert("please enter a valid text string");
  }
}

//detectWord("UcUNFYGaFYFYGtNUH", "cat"); //➞

detectWord("bEEFGBuFBRrHgUHlNFYaYr", "burglar"); //➞

//detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") //➞ "embezzlement"

//--------------------------------------------------------------

//Tuck in Array

// how do you validate an array?

//concat()

function tuckIn(str1, str2) {
  arrayCom = str1.concat(str2);
  inOrder = arrayCom.sort((a, b) => a - b); // had to look this up as sort alone produced 1,10,2,3,4..
  console.log(inOrder);
}

tuckIn([1, 4], [2, 3, 5, 6, 7, 8, 9]); //➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

//----------------------------------------------------------------

//Count Instances of a Character in a String - looked up part about .length

function charCount(find, content) {
  if (typeof find == "string" && isNaN(find) && typeof find == "string") {
    letterA = 0;
    for (i = 0; i < content.length; i++) {
      if (content[i].toLowerCase() == find) {
        letterA += content[i].length;
      }
    }
    console.log(letterA);
  } else {
    console.log("enter a valid string");
  }
}

charCount("a", "edaaabit"); //➞ 1

// charCount("c", "Chamber of secrets"); //➞ 1

// charCount("b", "big fat bubble"); //➞ 4

//--------------------------------------------------------------

//Is it True?

// function isTrue(a) {
//   return eval(a);
// }

// console.log(isTrue("2 = 2")); //➞ true

// isTrue("8 < 7") ➞ false

// isTrue("5 = 13") ➞ false

// isTrue("15 > 4") ➞ true
