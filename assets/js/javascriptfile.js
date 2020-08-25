//looked up the function "join, tolowercase, touppercase",
//took off the internet lower.charAt(0).toUpperCase() + lower.slice(1);

let array1 = ["g", "i", "a", "n", "l", "u", "c", "a"];
let array2 = ["G", "E", "N", "A", "R", "O"];

function oneWord(text1, text2) {
  stringOneWord1 = text1.join("");
  lower = stringOneWord1.toLowerCase();
  final1 = lower.charAt(0).toUpperCase() + lower.slice(1);
  console.log(final1);

  stringOneWord2 = text2.join("");
  upper = stringOneWord2.toUpperCase();
  console.log(upper);
}

oneWord(array2, array1);

// times table from input feild - got stuck needed to use the below example, issue was around the content of the for loop
//  updates added but did copy and use some of the below code to work out 24/08/2020
function timesTable() {
  let inputField = document.getElementById("value").value;

  let layout = "";

  for (i = 0; i <= 12; i++) {
    result = i * inputField;
    layout += inputField + "x" + i + "=" + result + "<br>";
    console.log(result);
  }
  document.getElementById("timestable-results").innerHTML = layout;
}

timesTable();

// function fiveTimesTable() {
//   var display = ""; // The table output HTML

//   for (i = 1; i <= 12; i++) {
//     var multiplier = i;
//     var result = i * 5;

//     display += multiplier + " * " + i + " = " + result + "<br>"; //Add each line to our output HTML
//   }

//   document.getElementById("outputDiv").innerHTML = display;
// }
///////
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //

//alert("test")

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function meanTotal(numbers) {
  answer = 0;
  for (i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }

  answer = answer / numbers.length;

  return answer;
}

console.log(meanTotal(array));

// fiveTimesTable();

// attempt to copy above - works out mean - got stuck on the input[i] section and putting the fugres outside the for loop

let phone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function meanFig(input) {
  figures = 0;
  for (i = 0; i < input.length; i++) {
    figures += input[i];
  }
  total = figures / input.length;
  return total;
}

console.log(meanFig(phone));

// works out minutes into second

function minutes() {
  totalTime = document.getElementById("timeValue").value;

  totalSeconds = parseInt(totalTime) * 60;

  console.log(totalSeconds);
}

minutes();
