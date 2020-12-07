$("#sandwichmenu").on("click", function (e) {
  e.preventDefault();
  $("#sandwichmenu").toggleClass("active");
  $(".menu__box").toggleClass("active");
});
$(".burger__menu-a").on("click", function (e) {
  $("#sandwichmenu").toggleClass("active");
  $(".menu__box").toggleClass("active");
});
$(".burger__menu-item").on("click", function (e) {
  $("#sandwichmenu").toggleClass("active");
  $(".menu__box").toggleClass("active");
});
