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

// function tester1() {
//   alert("worrking exampler");
// }

// tester1();

$(document).ready(function () {
  $("#buttonTest").click(function () {
    $("p").hide();
  });
});

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
