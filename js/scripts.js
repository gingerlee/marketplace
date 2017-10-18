$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("input#firstname").val();
    var inputLastName = $("input#lastname").val();
    var inputStreetAddress = $("input#streetaddress").val();
    var inputAptNumber = $("input#aptnumber").val();
    var inputCity = $("input#city").val();
    var inputState = $("input#state").val();
    var inputZip = $("input#zip").val();

    $(".firstname").text(inputFirstName);
    $(".lastname").text(inputLastName);
    $(".streetaddress").text(inputStreetAddress);
    $(".aptnumber").text(inputAptNumber);
    $(".city").text(inputCity);
    $(".state").text(inputState);
    $(".zip").text(inputZip);

    $(".checkout").hide();
    $(".confirmation").show();

  })
});
