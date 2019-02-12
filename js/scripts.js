$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var person1Input = $("#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var beverageInput = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();




    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".beverage").text(beverageInput);
    $(".flavor").text(flavor);

    $("#story").show();

    // $("input:radio[name=flavor]:checked").children("value")first();

  });
});
