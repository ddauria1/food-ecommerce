

function userAgent(){
    console.log("before the function");
    setTimeout(function(){
        alert(window.navigator.userAgent);
        console.log("inside the function");
    },2000);
}

//userAgent();