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

function boxHide() {
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
  setTimeout(function () {
    $(".form-style-input").css({
      width: "30rem",
      height: "4rem",
    });
  });
}

ageInput();

function ageButton() {
  setTimeout(function () {
    $(".form-style-button").css({
      width: "7rem",
      height: "4rem",
    });
  });
}

ageButton();
