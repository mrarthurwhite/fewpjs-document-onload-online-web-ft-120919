document.addEventListener("DOMContentLoaded", function() {
    //console.log("The DOM has loaded");
    changetext();
});
   


function changetext(){
    let t= document.getElementById("text");
    //t = document.querySelector( 'p' );
    t.innerHTML="This is really cool!";
}