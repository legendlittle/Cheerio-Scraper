

$(document).ready(function () {


    $('.saved').on('click', function () {
        window.location.href = '/'
    });

    $('.saveThis').on('click', function () {
        $(this).parent().parent().empty();
    });
});
