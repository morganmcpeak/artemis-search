$(document).ready(function(){
    
    $("#slideshow > div:gt(0)").hide();
        
    setInterval(function() { 
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    },  4000);

    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');
    

    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function(response) {
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');
        $(formMessages).text(response);
        $('#email').val('');
        $('#company').val('');
        $('#title').val('');
        $('#fname').val('');
        $('#lname').val('');
        $('#address').val('');
        $('#city').val('');
        $('#state').val('');
        $('#zip').val('');
        $('#phone').val('');
        $('#industry').val('');
        $('#comments').val('');
    }).fail(function(data) {
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });
    });
});