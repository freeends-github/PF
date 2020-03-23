$(document).ready(function() {
  // Tab functionality
  $.each($(".course-experience ul li"), function() {
    $(this)
      .find("button")
      .on("click", function() {
        //   Remove active class
        $(".course-experience")
          .find(".active")
          .removeClass("active");
        //   Add active class to the current element
        const target = $(this).attr("data-target");
        $(target).addClass("active");
        $(this).addClass("active");
      });
  });
  //   Accordion functionality
  $(function() {
    $(".acc_ctrl").on("click", function(e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  });
  // Slider functionality
  $(".project-slider").slick();
  $(".project-slider .slick-prev")[0].innerText = "<";
  $(".project-slider .slick-next")[0].innerText = ">";
  let slidesNr = $(".project-slider .slick-slide").not(".slick-cloned").length;
  $(".slick-current").find(".slider-nr")[0].innerText = "1 / " + slidesNr;
  $(".project-slider").on("afterChange", function(event, current, next) {
    let slidesNr = current.slideCount;
    let currentNr = current.currentSlide + 1;
    $(".slick-current").find(".slider-nr")[0].innerText =
      currentNr + " / " + slidesNr;
  });
});
