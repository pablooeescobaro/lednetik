$("#sandwichmenu").on("click", function (e) {
  e.preventDefault();
  $("#sandwichmenu").toggleClass("active");
  $(".menu__box").toggleClass("active");
});
$(".burger__item-a").on("click", function (e) {
  $("#sandwichmenu").toggleClass("active");
  $(".menu__box").toggleClass("active");
});
$(".header__item").on("click", function (e) {
  $("#sandwichmenu").toggleClass("active");
  $(".menu__box").toggleClass("active");
});
