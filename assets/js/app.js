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
  $.getJSON(wwwrooot+"/assets/js/info.json", function (data) {
    console.log(data);
    alert(data.geobytescapital);
  });
}

//getUserInfo();

// using the below you can produce specific infomraiton, here the title of the web page is changed to
// show the location of the user aswell

function changeTitle() {
  $.getJSON(wwwrooot+"/assets/js/info.json", function (data) {
    jQuery(".navbar-brand").html(
      jQuery(".navbar-brand").html() + " (" + data.geobytescapital + ") "
    );
  });
}

//changeTitle();

// after a 3 second wait the user country locaton is shown in the footer of the web page

function userLocation() {
  setTimeout(function () {
    $.getJSON(wwwrooot+"/assets/js/info.json", function (data) {
      jQuery(".country-location").html(data.geobytescountry);
    });
  }, 3000);
}

userLocation();

// onlcick image text

function showBox(posi) {
  if($(".text-box-" + posi).is(':visible')){
      $(".text-box-" + posi).hide();
  }else{
      $(".text-box-" + posi).show();
  }


}
