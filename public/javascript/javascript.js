$(document).ready(function () {
    $("#submit").on("click", function () {
        event.preventDefault();
        let newPerson = {
            Name: $("#Name").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            notes: $("#notes").val(),
        }
        $.post("/api/people", newPerson).then(function (data) {
            console.log(data);
        });
        $("#Name").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#notes").val("");
        $('.modal').modal();
    });
});