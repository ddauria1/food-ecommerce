//pop up sign up

// $(document).ready(function () {
//   setTimeout(function () {
//     Swal.fire({
//       // title: "Are latest deals and more",
//       // text: "Are you after the best items at the lowest cost?",
//       // imageUrl: "",
//       // imageWidth: 400,
//       // imageHeight: 200,
//       // confirmButtonText: "Click here to find out more!",
//       showCloseButton: true,
//       showConfirmButton: false,
//       width: 900,

//       html:
//         "<div class=popUp>" +
//         "<img src=../assets/img/20off.jpg class=mainImg alt='20% off'>" +
//         "<div class=rightSide>" +
//         "<h2 class=popTitle>A discount you can save for later!</h2>" +
//         "<p class=subText>Enter your email address below:</p>" +
//         "<input type='email' name='email' id='input'>" +
//         "<br>" +
//         "<button class='popUpButton' onclick='popupInput()'> Discover our offers </button> <br>" +
//         "<button class='popUpButton2' onclick='swal.close()'> contiune with offers</button>" +
//         "<a href='http://www.google.com' target='_blank'>Offer is Exclusive</a>" +
//         "</div> " +
//         "</div>",
//     });
//   }, 1000);
// });

// function popupInput() {
//   Swal.fire({
//     icon: "success",
//     title: "your email address has been added",
//     text: $("#input").val(),
//   });
// }

// onlcick image text

$(document).ready(function () {
  $(".food").click(function () {
    showBox($(this).attr("number"));
  });
});

function showBox(posi) {
  if ($(".text-box-" + posi).is(":visible")) {
    $(".text-box-" + posi).hide();
  } else {
    $(".text-box-" + posi).show();
  }
}
