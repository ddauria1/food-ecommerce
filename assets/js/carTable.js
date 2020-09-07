// is the statemnt true

// function isTrue(a){

// eval(a =< a)

// }

// isTrue("2 = 2") //➞ true

// isTrue("8 < 7") ➞ false

// isTrue("5 = 13") ➞ false

// isTrue("15 > 4") ➞ true

// totaal number added up

function addUp(start) {
  finalTotal = 0;

  for (i = 1; i <= start; i++) {
    finalTotal += i;
  }

  return finalTotal;
}

console.log(addUp(4)); //➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

// hidden word section challenge

// function findCommonElements2(arr1, arr2) {
//   // Create an empty object
//   let obj = {};

//   // Loop through the first array
//   for (let i = 0; i < arr1.length; i++) {
//     // Check if element from first array
//     // already exist in object or not
//     if (!obj[arr1[i]]) {
//       // If it doesn't exist assign the
//       // properties equals to the
//       // elements in the array
//       const element = arr1[i];
//       obj[element] = true;
//     }
//   }

//   // Loop through the second array
//   for (let j = 0; j < arr2.length; j++) {
//     // Check elements from second array exist
//     // in the created object or not
//     if (obj[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findCommonElements2("qwekasdeghjvpofilkjnzxz", "kevin"));

// function findWord(string1, string2) {
//   if (string1.includes(string2)) {
//     console.log("true");
//   } else {
//     console.log("try again");
//   }
// }

// findWord("qwekasdeghjvpofilkjnzxzkevin", "kevin");

// function findWord2(word1, word2) {
//   if (word1 == "" || word2 == "") {
//     alert("enter a correct word");
//   } else {
//     for (i = 0; i < word1.length; i++) {
//       console.log(word1[i]);
//       if (word1[i] == word2) {
//         console.log("true"); // had to look up
//       } else {
//         return "did not work";
//       }
//     }
//   }
// }

// console.log(findWord2("UcUNFYGaFYFYGtNUH", "cat"));

//--------------------------------------------------------------

//hiding word

function detectWords(word) {
  decoded = ""; // got thid correct but did not implement it correctly
  if (word == "") {
    alert("enter a correct word");
  } else {
    for (i = 0; i < word.length; i++) {
      if (word[i] == word[i].toLowerCase()) {
        decoded += word[i]; // had to look up
      }
    }
    return decoded; // had to look up
  }
}

console.log(detectWords("UcUNFYGaFYFYGtNUH")); //➞ "cat"

// detectWords("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWords("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

//--------------------------------------------------------------

// Football Points function - with validation

function footballPoints(wins, draws, loss) {
  //______________changes made____________________
  // if (
  //   typeof wins == "number" &&
  //   typeof draws == "number" &&
  //   typeof loss == "number"
  // ) {
  //   totalScore = wins * 3 + draws * 1 + loss * 0;
  //   console.log("total Score = " + totalScore);
  // } else {
  //   alert("enter a valid number");
  // }

  if (isNaN(wins) || isNaN(draws) || isNaN(loss)) {
    alert("enter a valid number");
  } else {
    totalScore = wins * 3 + draws * 1 + loss * 0;
    console.log("total Score = " + totalScore);
  }
  //______________Before changes made____________________

  // scoreBreakdown = wins + draws + loss;

  // if (isNaN(scoreBreakdown)) {
  //   alert("enter a valid number");
  // } else {
  //   totalScore = wins * 3 + draws * 1 + loss * 0;
  //   console.log("total Score = " + totalScore);
  // }

  // if (typeof scoreBreakdown == "number") {
  //   totalScore = wins * 3 + draws * 1 + loss * 0;
  //   console.log("total Score = " + totalScore);
  // } else {
  //   alert("enter a valid number");
  // }
}

footballPoints(3, 4, 2); //➞ 13

//footballPoints(5, 0, 2) ➞ 15

//footballPoints(0, 0, 1) ➞ 0

//--------------------------------------------------------------

//   var character = '5';
// if (character == character.toUpperCase()) {
//  alert ('upper case true');
// }
// if (character == character.toLowerCase()){
//  alert ('lower case true');
// }

// jquery append example

$(document).ready(function () {
  $("#inputButton").click(function () {
    // make = $("#make").val();
    // model = $("#model").val();
    // price = $("#price").val();
    //console.log(make + " " + model + " " + price);
    $("tbody").append(
      "<tr><td>" +
        $("#make").val() +
        "</td> + <td> " +
        $("#model").val() +
        " </td> +  <td>" +
        $("#price").val() +
        " </td></tr> "
    );
  });
});

//--------------------------------------------------------------

// input feild less than

function lessThan(input1, input2) {
  inputTotal = input1 + input2;

  if (isNaN(inputTotal)) {
    return "please enter a number";
  } else if (inputTotal < 100) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThan(29, 70));

//--------------------------------------------------------------

// hiding in the crowd

function detectWord(text) {
  finalWord = "";
  for (i = 0; i < text.length; i++) {
    if (text[i] == text[i].toLowerCase()) {
      finalWord += text[i];
    }
  }

  return finalWord;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));

//--------------------------------------------------------------

//correctly works jquery background image

// $(document).ready(function () {
//   $("body").css("background-image", 'url("../assets/img/food3.jpg")');
// });

// $("body").css(
//   "background-image",
//   'url("https://www.w3resource.com/includes/jquery-images/jquery.gif")'
// );

//--------------------------------------------------------------

// Concatenating Two Integer Arrays

//conCat([1, 3, 5], [2, 6, 8]); // ➞ [1, 3, 5, 2, 6, 8]

// conCat([7, 8], [10, 9, 1, 1, 2]) // ➞ [7, 8, 10, 9, 1, 1, 2]

// conCat([4, 5, 1], [3, 3, 3, 3, 3]) // ➞ [4, 5, 1, 3, 3, 3, 3, 3]

//- i am unable to show the results in html without using an onclick
// and having the data inside the function

function conCat() {
  let data = [1, 3, 5];
  let data1 = [2, 6, 8];
  //combinedTotal = [data.join() + "," + data1.join()];
  combinedTotal1 = data.concat(data1);
  console.log(combinedTotal1);
  //return combinedTotal1;
  document.getElementById("conCatResult").innerHTML = combinedTotal1;
}
//conCat([1, 3, 5], [2, 6, 8]);

function conCat1(data, data1) {
  //combinedTot = [data.join() + "," + data1.join()];
  combinedTot1 = data.concat(data1);
  console.log(combinedTot1);
}

conCat1([1, 3, 5], [2, 6, 8]);

//--------------------------------------------------------------

// doesnt work

// function myFunction1(data, data1) {
//   //combine = data.concat(data1);
//   combine = [data.join() + "," + data1.join()];
//   return combine;
// }

// document.getElementById("demo1").innerHTML = myFunction1([1, 3, 5], [2, 6, 8]);

//--------------------------------------------------------------

// this will not work and dont understand why, below example does work

// function conCat1(data, data1) {
//   children1 = data.concat(data1);
//   document.getElementById("conCatResult").innerHTML = children1;
// }

// conCat1([1, 3, 5], [2, 6, 8]);

//--------------------------------------------------------------

// example case
function myFunction() {
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale);
  document.getElementById("demo").innerHTML = children;
}

//---------------------------------------------------------------------------------

// function tester1() {
//   alert("worrking exampler");
// }

// tester1();

$(document).ready(function () {
  $("#buttonTest").click(function () {
    $("p").hide();
  });
});

//table code
$(document).ready(function () {
  $("#table_Jquery").DataTable();
});

// alert("car");

// function tableTest() {
//   $("inputButton").click(function () {
//     console.log("tester");
//   });
// }

// // $(document).ready(function () {
// //   $(".food").click(function () {
// //     showBox($(this).attr("number"));
// //   });
// // });

// function game() {
//   console.log("alert");
// }

// game();
