console.log("complete");
console.log($(window).width());
console.log($(window).height());

$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  let percentX = (mouseX / $(window).width()) * 500;
  let percentY = (mouseY / $(window).height()) * 150;

  $(".image").css("transform", `translate(${percentX}px, ${percentY}px)`);
});

$(".icon_img").on("click", function () {
  $(".icon_text").toggleClass("active");
});
$(".icon2_img").on("click", function () {
  $(".icon2_text").toggleClass("active");
});
$(".icon3_img").on("click", function () {
  $(".icon3_text").toggleClass("active");
});

let state = 0;

$(".click_Box").on("click", function () {
  if (state == 0) {
    $(".sunflower_img").removeClass("fadein").addClass("fadeout");
    $(".star_img").removeClass("fadeout").addClass("fadein");
    state = 1;
  } else if (state == 1) {
    $(".star_img").removeClass("fadein").addClass("fadeout");
    $(".irises_img").removeClass("fadeout").addClass("fadein");
    state = 2;
  } else if (state == 2) {
    $(".irises_img").removeClass("fadein").addClass("fadeout");
    $(".cypresses_img").removeClass("fadeout").addClass("fadein");
    state = 3;
  } else if (state == 3) {
    $(".cypresses_img").removeClass("fadein").addClass("fadeout");
    $(".sunflower_img").removeClass("fadeout").addClass("fadein");
    state = 0;
  }
});
