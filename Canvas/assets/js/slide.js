$(document).ready(function (event) {
  var slideCount = $(".slide__element").length;
  var slideWidth = $(".slide__element").width();
  var slideHeight = $(".slide__element").height();
  var slideWrapperWidth = slideWidth * slideCount;

  $(".slide").css({
    "max-width": slideWidth,
    height: slideHeight,
  });
  $(".slide__wrapper").css({
    width: slideWrapperWidth,
    "margin-left": -slideWidth,
  });
  $(".slide__wrapper .slide__element:last-child").prependTo(
    $(".slide__wrapper")
  );
  $(".slide__wrapper .slide__element:nth-child(2)").addClass(
    "slide__element--active"
  );

  function moveLeft() {
    $(".slide__wrapper")
      .stop()
      .animate(
        {
          left: +slideWidth,
        },
        700,
        function () {
          $(".slide__wrapper .slide__element:last-child").prependTo(
            $(".slide__wrapper")
          );
          $(".slide__wrapper").css("left", "");
          $(".slide__element--active").removeClass("slide__element--active");
          $(".slide__wrapper .slide__element:nth-child(2)").addClass(
            "slide__element--active"
          );
        }
      );
  }

  function moveRight() {
    $(".slide__wrapper")
      .stop()
      .animate(
        {
          left: -slideWidth,
        },
        700,
        function () {
          $(".slide__wrapper .slide__element:first-child").appendTo(
            $(".slide__wrapper")
          );
          $(".slide__wrapper").css("left", "");
          $(".slide__element--active").removeClass("slide__element--active");
          $(".slide__wrapper .slide__element:nth-child(2)").addClass(
            "slide__element--active"
          );
        }
      );
  }

  $(".slide__arrow-right").on("click", function () {
    moveRight();
  });

  $(".slide__arrow-left").on("click", function () {
    moveLeft();
  });

  /*Slide show*/
  carousel();

  function carousel() {
    moveRight();
    setTimeout(carousel, 4000);
  }
});
