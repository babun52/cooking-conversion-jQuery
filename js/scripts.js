//Back-end(business) logic
var gallonsToLiters = function(gallons) {
  return gallons / 0.26417;
};

var litersToGallons = function(liters) {
  return liters * 0.26417;
}


//Front-end(user interface) logic
$(document).ready(function() {
  $("form#gallonsToLiters").submit(function(event) {
    event.preventDefault();

    var gallonsInput = parseInt($("input#gallons").val());
    var result = gallonsToLiters(gallonsInput).toFixed(4);

    $(".outputResult").text(result + "L");
    $("blockquote").show();
  });

  $("form#litersToGallons").submit(function(event) {
    event.preventDefault();

    var inputLiters = parseInt($("input#liters").val());
    var result = litersToGallons(inputLiters).toFixed(4);

    $(".outputResult").text(result + "gal");
    $("blockquote").show();
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
});
