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
});
