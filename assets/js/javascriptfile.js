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

// times table from input feild - got stuck needed to use the below example, issue was around the content of the for loop

function timesTable() {
  let inputField = document.getElementById("value").value;

  for (i = 0; i <= 12; i++) {
    result = i * inputField;
    console.log(result);
  }
}

timestable();

// function fiveTimesTable() {
//   var display = ""; // The table output HTML

//   for (i = 1; i <= 12; i++) {
//      var multiplier = 5;
//      var result = i*5;

//      display += multiplier+" * "+i+" = "+result+"<br>"; //Add each line to our output HTML
//   }

//   document.getElementById("outputDiv").innerHTML = display;
// }

// attempt to copy above - got stuck on the input[i] section and putting the fugres outside the for loop

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
