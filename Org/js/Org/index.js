


$(function () {

    $("#org-exit").click(function () {
        exit();
    });
});


function exit() {
    $.ajax({
        type: "post",
        url: "/Home/Exit",
        dataType: "json",
        error: function (e) {
        },
        success: function (e) {
            if (e.OK)
                location.href = "/";
        }
    });
}