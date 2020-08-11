//pop up appears when the web page loads

$(document).ready(function () {
  setTimeout(function () {
    Swal.fire({
      title: "Are latest deals and more",
      text: "Are you after the best items at the lowest cost?",
      imageUrl: "../assets/img/20off.jpg",

      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "20% off",
      confirmButtonText: "Click here to find out more!",
      showCloseButton: true,
    });
  }, 1000);
});

//pop up sign up

$(document).ready(function () {
  setTimeout(function () {
    Swal.fire({
      // title: "Are latest deals and more",
      // text: "Are you after the best items at the lowest cost?",
      // imageUrl: "",
      // imageWidth: 400,
      // imageHeight: 200,
      // confirmButtonText: "Click here to find out more!",
      showCloseButton: true,
      showConfirmButton: false,
      width: 900,

      html:
        "<div class=popUp>" +
        "<img src=../assets/img/20off.jpg class=mainImg alt='20% off'>" +
        "<div class=rightSide>" +
        "<h2 class=popTitle>A discount you can save for later!</h2>" +
        "<p class=subText>Enter your email address below:</p>" +
        "<input type='email' name='email' id='input'>" +
        "<br>" +
        "<button class='popUpButton' onclick='popupInput()'> Discover our offers </button> <br>" +
        "<button class='popUpButton2' onclick='swal.close()'> contiune with offers</button>" +
        "<a href='http://www.google.com' target='_blank'>Offer is Exclusive</a>" +
        "</div> " +
        "</div>",
    });
  }, 1000);
});

function popupInput() {
  Swal.fire({
    icon: "success",
    title: "your email address has been added",
    text: $("#input").val(),
  });
}

//produces an alert for the userAgent, The userAgent property returns the value of the user-agent header sent
//by the browser to the server. The value returned, contains information about the name, version and platform
//of the browser.

function userAgent() {
  console.log("before the function");

  setTimeout(function () {
    alert(window.navigator.userAgent);
    console.log("inside the function");
  }, 2000);
}

//userAgent();

// this provides the json object information

function getUserInfo() {
  $.getJSON(wwwrooot + "/assets/js/info.json", function (data) {
    console.log(data);
    alert(data.geobytescapital);
  });
}

//getUserInfo();

// using the below you can produce specific infomraiton, here the title of the web page is changed to
// show the location of the user aswell

function changeTitle() {
  $.getJSON(wwwrooot + "/assets/js/info.json", function (data) {
    jQuery(".navbar-brand").html(
      jQuery(".navbar-brand").html() + " (" + data.geobytescapital + ") "
    );
  });
}

//changeTitle();

// after a 3 second wait the user country locaton is shown in the footer of the web page

function userLocation() {
  setTimeout(function () {
    $.getJSON(wwwrooot + "/assets/js/info.json", function (data) {
      jQuery(".country-location").html(data.geobytescountry);
      currentDate();
    });
  }, 3000);
}

userLocation();

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

// current time

function currentDate() {
  $(".country-location").after(
    '<span id="newDT" onclick="newDateAndTime()">' + new Date() + "</span>"
  );
}

function newDateAndTime() {
  $("#newDT").text(new Date());
}

function ageCheck() {
  age = $("#age").val();

  console.log(age);

  if (age == "") {
    $(".ageResult").html(
      "<span class='errorMessage'> please add correct age value </span>"
    );

    red;
  } else {
    if (age > 18) {
      $(".ageResult").html(
        "<span class='okMessage'> You are old enough </span>"
      );
    } else {
      $(".ageResult").html(
        "<span class='errorMessage'> You are to Young </span>"
      );
      red;
    }
  }
}

function sendForm() {
  $(".form--result").html(
    `<span class='formResult-style'>${$("#input--firstName").val()} ${$(
      "#input--lastName"
    ).val()} ${$("#input--email").val()}</span>`
  );
}

function boxHides() {
  $(".form--result").hide();
}

// html table

function rowChange() {
  setTimeout(function () {
    even(), odd();
  }, 3000);
}

rowChange();

function even() {
  $("table tr:even").css("background", "blue");
}

function odd() {
  $("table tr:odd").css({ background: "green", color: "white" });
}

// change border of form

function changeBorder() {
  setTimeout(function () {
    $(".form-style-border").css({ border: "solid blue 10px" });
  }, 3000);
}

changeBorder();

function changeName() {
  setTimeout(function () {
    $(".subTitle").html("please enter your details");
  }, 3000);
}

changeName();

// age form - only works with timeout included

function ageInput() {
  $(".form-style-input").css({
    width: "30rem",
    height: "4rem",
  });
}

function ageButton() {
  $(".form-style-button").css({
    width: "7rem",
    height: "4rem",
  });
}

$(document).ready(function () {
  ageInput();
  ageButton();

  // jquery event change

  $(".submitForm").click(function () {
    $(".form--result").html(
      `<span class='formResult-style'>${$("#input--firstName").val()} ${$(
        "#input--lastName"
      ).val()} ${$("#input--email").val()}</span>`
    );
  });

  $(".box-hide").click(function () {
    $(".form--result").hide();
  });

  $(".age-submit").click(function () {
    age = $("#age").val();

    console.log(age);

    if (age == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please complete this feild to proceed",
      });
    } else {
      if (age > 18) {
        Swal.fire({
          icon: "success",
          title: "Hurray",
          text: "You have confirmed your over 18, please proceed",
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "No entry",
          text: "Please note you must be over the age of 18",
        });
      }
    }

    // if (age == "") {
    //   $(".ageResult").html(
    //     "<span class='errorMessage'> please add correct age value </span>"
    //   );
    // } else {
    //   if (age > 18) {
    //     $(".ageResult").html("<span class='okMessage'> You are old enough </span>");
    //   } else {
    //     $(".ageResult").html(
    //       "<span class='errorMessage'> You are to Young </span>"
    //     );
    //     red;
    //   }
    // }
  });
});

// does this one need to be changed? - also what is newDT

// function currentDate() {
//   $(".country-location").after(
//     '<span id="newDT" onclick="newDateAndTime()">' + new Date() + "</span>"
//   );
// }

// function newDateAndTime() {
//   $("#newDT").text(new Date());
// }

// sweetalert

function tester1() {
  Swal.fire("Any fool can use a computer");
}

//table code
$(document).ready(function () {
  $("#table_id").DataTable();
});

// $(document).ready(function () {
//   var table = $("#example").DataTable();

//   $("#example").on("click", "tr", function () {
//     var data = table.row(this).data();
//     alert("You clicked on " + data[0] + "'s row");
//   });
// });
