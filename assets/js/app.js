$(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

      /* FIXED HEADER*/

      checkScroll(scrollOffset);

// перепроверка скоролили ли мы (если обновили страницу)

  $(window).on("scroll", function(){

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });


// при скроле добавляет и удаляет класс fixed у хедера

  function checkScroll(scrollOffset) {

    if(scrollOffset >= introH) {
      header.addClass("fixed");
    } else {header.removeClass("fixed")}
  }


          /* smooth scroll*/

  $("[data-scroll]").on("click", function(evt) {
    evt.preventDefault();

    var $this = $(this),
    blockId = $this.data("scroll"),
    blockOffset = $(blockId).offset().top;

// удаление и добавление класса в меню

    $("#nav a").removeClass("active");
    $this.addClass("active");

// анимация

    $("html, body").animate({
    scrollTop:  blockOffset
    }, 500);

    });

    /*Menu nav toggle */

    $("#nav_toggle").on("click", function(evt){
      evt.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

    })

    /*Collapse*/

    $("[data-collapse]").on("click", function(evt) {

      evt.preventDefault();

      var $this = $(this),
      blockId = $this.data("collapse");

      $this.toggleClass("active");
      // $(blockId).slideToggle();

    })

    /* SLIDER */

    $("[data-slider]").slick({
      infinite: true,
      fade: false,
      slidesToScroll: 1,
      slidesToShow: 1
    });


});
