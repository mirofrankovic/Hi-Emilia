$(document).ready(function(){
    $("p").text("This is not a joke");
    $(this).onclick("hide");
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