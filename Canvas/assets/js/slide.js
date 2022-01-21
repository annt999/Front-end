$(document).ready(function (event) {
  /* Slider top */
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

  /* Slide featured product */
  var sliderFeatureds = $('.featured-product__item');
  var slideFeaturedCount = $(sliderFeatureds).length;
  var slideFeaturedWidth = $(".featured-product__item").width();
  var slideFeaturedHeight = $(".featured-product__item").innerHeight();
  var slideFeaturedWrapperWidth = slideFeaturedWidth * slideFeaturedCount;
  var controlDots = $(".product-color-dot");

  for(let i = 0; i < controlDots.length; i++) {
    $(".product-color-dot").on("click", function (i) {
      $(".product-color-dot.active").removeClass("active");
      $(this).addClass("active");

      if(i > 1) {
        for(j = 0; j <= i; j++) {
          featuredMoveRight();
        }
      }

      if(i = 0) {
        featuredMoveLeft();
      }
    });
  }

  $(sliderFeatureds).each(function (index, element) {
    $(element).addClass("" + (index + 1));
  });

  $(controlDots).each(function (index, element) {
    $(element).addClass("" + (index + 1));
  });

  $(".featured-product__slide-wrap").css({
    "max-width": slideFeaturedWidth,
    height: slideFeaturedHeight,
  });

  $(".featured-product__slide").css({
    width: slideFeaturedWrapperWidth,
    "margin-left": -slideFeaturedWidth,
    height: slideFeaturedHeight,
  });

  $(".featured-product__item").css({
    "max-width": slideFeaturedWidth,
    "padding-top": slideFeaturedWidth*1.2,
  })

  $(".featured-product__slide .featured-product__item:last-child").prependTo(
    $(".featured-product__slide")
  );  

  function featuredMoveLeft() {
    $(".featured-product__slide")
      .stop()
      .animate(
        {
          left: +slideWidth,
        },
        50,
        function () {
          $(
            ".featured-product__slide .featured-product__item:last-child"
          ).prependTo($(".featured-product__slide"));
          $(".featured-product__slide").css("left", "");
        }
      );
  }

  function featuredMoveRight() {
    $(".featured-product__slide")
      .stop()
      .animate(
        {
          left: -slideWidth,
        },
        50,
        function () {
          $(
            ".featured-product__slide .featured-product__item:first-child"
          ).appendTo($(".featured-product__slide"));
          $(".featured-product__slide").css("left", "");
        }
      );
  }

  /*Slide top show*/
  carousel();

  function carousel() {
    moveRight();
    setTimeout(carousel, 4000);
  }

  /* Slide product */

  $(document).on("click", ".slide-product__arrow--left", function (event) {
    event.preventDefault();
    var ulSliderProducts = $(this).parent().find(".slide-product__container");
    var sliderProducts = $(ulSliderProducts).children(".slide-product__item");
    slidersLength = sliderProducts.length;
    for (i = 0; i < sliderProducts.length; i++) {
      if ($(sliderProducts[i]).hasClass("slide-product__item--active")) {
        var slideAciveIndex = i == 0 ? slidersLength - 1 : i - 1;
        $(sliderProducts[i]).removeClass("slide-product__item--active");
        $(sliderProducts[slideAciveIndex]).addClass(
          "slide-product__item--active"
        );
        break;
      }
    }
  });

  $(document).on("click", ".slide-product__arrow--right", function (event) {
    event.preventDefault();
    var ulSliderProducts = $(this).parent().find(".slide-product__container");
    var sliderProducts = $(ulSliderProducts).children(".slide-product__item");
    slidersLength = sliderProducts.length;
    for (i = 0; i < sliderProducts.length; i++) {
      if ($(sliderProducts[i]).hasClass("slide-product__item--active")) {
        var slideAciveIndex = i == slidersLength - 1 ? 0 : i + 1;
        $(sliderProducts[i]).removeClass("slide-product__item--active");
        $(sliderProducts[slideAciveIndex]).addClass(
          "slide-product__item--active"
        );
        break;
      }
    }
  });
});
