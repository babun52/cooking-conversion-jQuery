//Back-end(business) logic
var gallonsToLiters = function(gallons) {
  return gallons / 0.26417;
};


//Front-end(user interface) logic
$(document).ready(function() {
  $("form#unitConversion").submit(function(event) {
    event.preventDefault();

    var gallonsInput = $("input#gallons").val();

    var result = gallonsToLiters(gallonsInput).toFixed(5);

    $("#outputResult").text(result + "L");
  });
});
