$("#password, #confirm_password").on("keyup", function () {
    if ($("#password").val() == $("#confirm_password").val()) {
        console.log("No error");
    } else {
        $("#message").show();
    }
});
