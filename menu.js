$(".li1").click(function() {
  $(".liste-active").removeClass("liste-active");
});

// emil boutton

$("#emil").click(function() {
  $(".liste").toggleClass("liste-active");
  $(".li1").toggleClass("li1-active");
  $(".wrapper").toggleClass("wrapper-active");
  $(".Emilia").toggleClass("Emilia-active");
});

// Passion animation bulle 1

$(".passion_img").hover(function() {
  $(".text_pass").toggleClass("text_pass-active");
  $(".h2_anime").toggleClass("h2_anime-active");
});

// Passion animation bulle 2

$(".passion_img2").hover(function() {
  $(".text_pass2").toggleClass("text_pass2-active");
  $(".h2_steam").toggleClass("h2_steam-active");
});

// Passion animation bulle 3

$(".passion_img3").hover(function() {
  $(".text_pass3").toggleClass("text_pass3-active");
  $(".h2_musique").toggleClass("h2_musique-active");
});

// Nigger theme

$("#switch").on("click", () => {
  if ($("#switch").prop("checked")) {
    $(".mybody").addClass("dark");
    $(".trait").addClass("trait-dark");
    $(".h2_anime").addClass("h2_anime-active-light");
  } else {
    $(".mybody").removeClass("dark");
    $(".trait").removeClass("trait-dark");
  }
});

// ================================================= Jeux ================================

$("#dk").click(function() {
  $("#empty").attr("src", "./media/image/2b.jpg");
});
