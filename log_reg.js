$(document).ready(function () {
    $.get("users.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            alert(data[1].userName);
        }
    });

});
    function open_modal() {
        var modal = document.getElementById("Login_modal");
        modal.style.display = "block";
        modal.style.transition = "2s";

    }

    function close_modal() {
        var modal = document.getElementById("Login_modal");
        modal.style.display = "none";
    }

