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

function timesTable() {
  document.getElementById("value").value;

  alert("working");
  for (i = 0; i < 12; i++) {}
}
