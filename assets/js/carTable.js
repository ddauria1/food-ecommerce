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

//nothing i try will work

$(document).ready(function () {
  $("body").css("background-image", 'url("../assets/img/food3.jpg")');
});

// $("body").css("background-image", 'url("../img/food3.jpg")');

// $(document).ready(function () {
//   $("body").css(
//     "background-image",
//     'url("https://www.w3resource.com/includes/jquery-images/jquery.gif")'
//   );
// });

// $("body").css(
//   "background-image",
//   'url("https://www.w3resource.com/includes/jquery-images/jquery.gif")'
// );

//--------------------------------------------------------------

// Football Points function - with validation

function footballPoints(wins, draws, loss) {
  scoreBreakdown = wins + draws + loss;

  // if (isNaN(scoreBreakdown)) {
  //   alert("enter a valid number");
  // } else {
  //   totalScore = wins * 3 + draws * 1 + loss * 0;
  //   console.log("total Score = " + totalScore);
  // }

  if (typeof scoreBreakdown == "number") {
    totalScore = wins * 3 + draws * 1 + loss * 0;
    console.log("total Score = " + totalScore);
  } else {
    alert("enter a valid number");
  }
}

footballPoints(4, 2); //➞ 13

//footballPoints(5, 0, 2) ➞ 15

//footballPoints(0, 0, 1) ➞ 0

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
