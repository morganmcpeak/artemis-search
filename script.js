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
    var formData = $(form).serialize();

    $(form).submit(function(event) {
        event.preventDefault();
    });

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




        // $("#submit").click(function(){
        //     var company = $("#company").val();
        //     var title = $("#title").val();
        //     var fname = $("#fname").val();
        //     var lname = $("#lname").val();
        //     var address = $("#address").val();
        //     var city = $("#city").val();
        //     var state = $("#state").val();
        //     var zip = $("#zip").val();
        //     var phone = $("#phone").val();
        //     var industry = $("#industry").val();
        //     var comments = $("#comments").val();
        //     if(company == "" || title == "" || fname == "" || fname == "" || lname == "" ||  address == "" || city == "" ||   state == "" ||  zip == "" ||  phone == "" || industry == "" ||   comments == "") {
        //         alert("Please fill out all required fields.");
        //     } else {
        //         $.post("contact.php", {
        //             company1: company,
        //             title1: title,
        //             fname1: fname,
        //             lname1: lname,
        //             address1: address,
        //             city1: city,
        //             state1: state,
        //             zip1: zip,
        //             phone1: phone,
        //             industry1: industry,
        //             comments1: comments
        //         }, function(data) {
        //             if (data == "Your information has been recieved, we will contact you soon.") {
        //                 $(".form")[0].reset();
        //             }
        //          });
        //      }
        // });
});