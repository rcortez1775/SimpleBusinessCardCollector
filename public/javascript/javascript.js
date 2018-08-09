$(document).ready(function () {
    $("#submit").on("click", function () {
        event.preventDefault();
        let newPerson = {
            Name: $("#Name").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim(),
            email: $("#email").val().trim(),
            notes: $("#notes").val(),
        }
        $("#Name").val("");
        $("#phoneNumber").val("");
        $("#email").val("");
        $("#notes").val("");
        $('.modal').modal();
    });
});