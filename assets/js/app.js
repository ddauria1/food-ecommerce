

function userAgent(){
    console.log("before the function");
    setTimeout(function(){
        alert(window.navigator.userAgent);
        console.log("inside the function");
    },2000);
}

function getUserIPLocation(){
   $.getJSON("http://food-ecommerce.codingtech/assets/json/myIp.json",function(data){
       jQuery('#foodStoreName').html(jQuery('#foodStoreName').html()+" ("+data.geobytescapital+")");
   });
}
getUserIPLocation();
//userAgent();