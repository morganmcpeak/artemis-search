<?php
$company = $_POST['company1'];
$title = $_POST['title1'];
$fname = $_POST['fname1'];
$lname = $_POST['lname1'];
$address = $_POST['address1'];
$city = $_POST['city1'];
$state = $_POST['state1'];
$zip = $_POST['zip1'];
$phone = $_POST['phone1'];
$industry = $_POST['industry1'];
$comments = $_POST['comments1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if(!preg_match("/^[0-9]{10}$/", $contact)) {
        echo"<span>* Please Fill Valid Contct Info.*</span>";
    } else {
        $subject = $name;
        $headers = 'MIME-version 1.0' . "rn";
        $headers .= 'content-type: text/html; charset=iso-8859-1' . "rn";
        $headers .= 'From:' . $email. "rn";
        $headers .= 'Cc' . $email. "rn";
        $template = '<span> Hello '.name . ', <br>'
        . 'Thank you for contacting us <br>'
        . ' First Name:' . $fname . '<br>'
        . ' Last Name: ' . $lname . '<br>'
        . 'Address: '   . $address . '<br>'
        . 'City: ' . $city . '<br>'
        . 'State: ' . $state . '<br>'
        . 'Zip: ' . $zip . '<br>'
        . 'Phone: ' . $phone . '<br>'
        . 'Industry: ' . $industry . '<br>'
        . 'Comments: ' . $comments . '<br>'
        . 'We will contact you as soon as possible. </span>';
        $sendmessage = "<div style="background-color:#7E7E7E; color:white;">" . $template . "</div>";
        // Message lines should not exceed 70 characters (PHP rule), so wrap it.
        $sendmessage = wordwrap($sendmessage, 70);
        // Send mail by PHP Mail Function.
        mail("reciever_mail_mcpeakmorgan@gmail.com", $subject, $sendmessage, $headers);
        echo "Your query has been received, we will contact you soon.";   

    }
} else {
    echo "<span>* Invalid Email *</span>";
}
?>