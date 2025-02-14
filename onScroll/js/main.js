$(document).ready(function () {
  textDrawer();
});

$(window).on("resize", textDrawer);

function textDrawer() {
  if ($(window).width() > 1280) {
    $(".text-love").show(200).removeClass("hide");
    $(".heart").hide(200).addClass("hide");
  } else if ($(window).width() > 768) {
    $(".heart").show(200).removeClass("hide");
    $(".text-love").hide().addClass("hide");
    $(".text-yu").show().removeClass("hide");
  } else {
    $(".text-yu").hide(200).addClass("hide");
  }
}
