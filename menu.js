$("#emil").click(function() {
  $(".liste").toggleClass("liste-active");
  $(".li1").toggleClass("li1-active");
  $(".wrapper").toggleClass("wrapper-active");
  $(".Emilia").toggleClass("Emilia-active");
});






var body = $('body');
$( document ).ready(function() {
  body.addClass(localStorage.getItem("theme"));
$("#switch").prop("checked" , localStorage.getItem("checkbox"));

});
$("#switch").on("click", () => {
  if ($("#switch").prop("checked")) {
    $(".mybody").addClass("dark");
    $(".trait").addClass("trait-dark");
    localStorage.setItem("checkbox" , "checked");
    localStorage.setItem("theme", "dark");
    

  } else {
    $(".mybody").removeClass("dark");
    $(".trait").removeClass("trait-dark");
    localStorage.setItem("theme", " ");
    localStorage.setItem("checkbox" , "");
  }
});
