console.log("complete");

//window의 가로 세로 값을 구해 변수에 넣기
// let window_width = console.log($(window).width());
// let window_height = console.log($(window).height());

// console.log(window_width);
// console.log(window_height);

// $(document).mousemove(function (e) {
//   $("#status").html(e.pageX + ", " + e.pageY);
//   $(".box").css("width", e.pageX);
//   $(".box").css("height", e.pageY);
// });

// console.log(event);

$(document).on("mousemove", function (event) {
  console.log(event);
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  $(".bg_img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  //   let image_width = $(".cat_img").width() / 2;
  //   let image_height = $(".cat_img").height() / 2;
  let image_width = $(".cat_img").width();
  let image_height = $(".cat_img").height();

  $(".cat_img").css("left", mouseX - image_width / 2 + "px");
  $(".cat_img").css("top", mouseY - image_height / 2 + "px");
});
