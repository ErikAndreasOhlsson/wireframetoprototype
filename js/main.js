
/**
 * Created by andreasromlin on 2016-04-10.
 */
$(function () {

    $('#bikeClick').on('click', function() {
        $('#myModal').modal('show')

    });

    $('.color').on('click', function () {
        var x = $(this).css('backgroundColor');
        $('#myModal').css('backgroundColor', x);
        $('#progressBar').removeClass('hidden');
        setTimeout(function() {
            $('#myModal').modal('hide').css('backgroundColor', 'transparent');
            $('#progressBar').addClass('hidden');
        }, 2000);

    });

});


$('.fb-share').on('click', function () {
    event.preventDefault();
   alert('A Facebook modal will pop up here!');
});
$('.twitter-share').on('click', function () {
    event.preventDefault();
    alert('A Twitter modal will pop up here!');
});

$('form').submit(function() {
    var x = $('#exampleInputEmail2').val();
    if(x.length > 0) {
        alert('Your email is sent to the server!')
        event.preventDefault();
    } else {
        alert('Oops something is missing..');
        return false;
    }
});

$('#searchBtn').on('click', function() {
   alert('You searched for something');
});