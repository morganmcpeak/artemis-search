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


        $("#submit").click(function(){
            var company = $("#company").val();
            var title = $("#title").val();
            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var address = $("#address").val();
            var city = $("#city").val();
            var state = $("#state").val();
            var zip = $("#zip").val();
            var phone = $("#phone").val();
            var industry = $("#industry").val();
            var comments = $("#comments").val();
            if(company == "" || title == "" || fname == "" || fname == "" || lname == "" ||  address == "" || city == "" ||   state == "" ||  zip == "" ||  phone == "" || industry == "" ||   comments == "") {
                alert("Please fill out all required fields.");
            } else {
                $.post("contact.php", {
                    company1: company,
                    title1: title,
                    fname1: fname,
                    lname1: lname,
                    address1: address,
                    city1: city,
                    state1: state,
                    zip1: zip,
                    phone1: phone,
                    industry1: industry,
                    comments1: comments
                }, function(data) {
                    if (data == "Your information has been recieved, we will contact you soon.") {
                        $(".form")[0].reset();
                    }
                 });
             }
        });
    });