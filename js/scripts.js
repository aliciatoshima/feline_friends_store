$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var person1Input = $("#person1").val();
    var streetInput = $("input#street").val();
    var cityInput= $("input#city").val();
    var stateInput = $("#state").val();
    var zipInput = $("input#zip").val();
    var productInput = $("#product").val();
    var color = $("input:radio[name=color]:checked").val();




    $(".person1").text(person1Input);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".product").text(productInput);
    $(".color").text(color);

    $("#order").show();



  });
});
