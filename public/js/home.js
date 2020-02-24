

$(document).ready(function () {
    $('#clear').on('click', function () {
        $('#articles').empty();
    })
    $('#scrape').on('click', function () {
        window.location.href = '/'
    });
    $('.saved').on('click', function () {
        window.location.href = '/'
    });

    $(document).on('click', '.saveThis', function () {

       
        
        $.ajax({
            method: "POST",
            url: '/saved',
            data: {
                title: $('.title').text(),
                link: $('.link').attr('href')

            }
        }).then(function (data) {
            console.log(data)
            $(this).parent().parent().empty();
        })
    });
});
