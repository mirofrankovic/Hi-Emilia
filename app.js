$(document).ready(function(){
    $("p").click(function(){
     $(this).hide();
    });
});
function run () {
    alert ("You Clicked!");
var rex = document.getElementById("rex");
rex.innerHTML = "You Clicked!";
};
console.log(rex.style.color);
rex.style.color = "magenta"


/*var animal = "T-rex";
document.getElementById("rex").innerHTML = animal;*/