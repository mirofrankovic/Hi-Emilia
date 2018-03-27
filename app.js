$(document).ready(function(){
    $("p").click(function(){
     $(this).hide();
    });
});

var rex = document.getElementById("rex");
console.log(rex.style.color);
rex.style.color = "magenta"


/*var animal = "T-rex";
document.getElementById("rex").innerHTML = animal;*/