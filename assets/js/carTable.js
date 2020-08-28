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

$(document).ready(function () {
  $("#inputButton").click(function () {
    make = $("#make").val();
    model = $("#model").val();
    price = $("#price").val();
    console.log(make + " " + model + " " + price);
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
