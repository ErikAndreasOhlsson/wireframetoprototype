
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