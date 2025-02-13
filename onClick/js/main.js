$(".switch").on("click", function () {
  if ($("body").hasClass("off")) {
    $("body").removeClass("off").addClass("on");
    $(".lightbulb").attr("src", "./images/lightbulb-on.svg");
  } else {
    $("body").removeClass("on").addClass("off");
    $(".lightbulb").attr("src", "./images/lightbulb-off.svg");
  }
});
