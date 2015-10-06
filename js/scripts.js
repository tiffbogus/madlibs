$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    $(".clickable").click(function() {
      $("p").addClass(".warning");
      });

    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var apptDateInput = $("input#apptDate").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();


    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".apptDate").text(apptDateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#appt").show();

    event.preventDefault();
  });
});
