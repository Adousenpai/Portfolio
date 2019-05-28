var img = document.querySelector(".cover img");
var button = document.querySelector(".close");

function couverture(argument) {
  img.setAttribute("src", "./media/image/" + argument + ".jpg");
  $(".cover").toggleClass("cover-active");
  $(".nom_jeux").text(argument.toUpperCase());
};


button.addEventListener("click", function() {
    console.log("ok");
    $(".cover").removeClass("cover-active");
})