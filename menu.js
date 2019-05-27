$("#emil").click(function() {
  $(".liste").toggleClass("liste-active");
  $(".li1").toggleClass("li1-active");
  $(".wrapper").toggleClass("wrapper-active");
  $(".Emilia").toggleClass("Emilia-active");
});

$(".passion_img").hover(function() {
  $(".text_pass").toggleClass("text_pass-active");
  $(".h2_anime").toggleClass("h2_anime-active");
});

$(".passion_img2").hover(function() {
  $(".text_pass2").toggleClass("text_pass2-active");
  $(".h2_steam").toggleClass("h2_steam-active");
});

$(".passion_img3").hover(function() {
  $(".text_pass3").toggleClass("text_pass3-active");
  $(".h2_musique").toggleClass("h2_musique-active");
});

$("#switch").on("click", () => {
  if ($("#switch").prop("checked")) {
    $(".mybody").addClass("dark");
    $(".trait").addClass("trait-dark");
    $(".h2_anime").addClass("h2_anime-active-light");
  } else {
    $(".mybody").removeClass("dark");
    $(".trait").removeClass("trait-dark");
    localStorage.setItem("theme", " ");
    localStorage.setItem("checkbox", "");
  }
});
