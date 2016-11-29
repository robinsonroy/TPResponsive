$(document).ready(function() {
  $(".filter").click(function(event) {
    console.log("click");
    if ($(".filter-session").is(":visible")) {
      $(".filter-session").hide();
    }else {
      $(".filter-session").show();
    }
  });
});
