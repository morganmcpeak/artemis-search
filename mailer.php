<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["fname"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $company = trim($_POST["company"]);
        $title = trim($_POST["title"]);
        $fname = trim($_POST["fname"]);
        $lname = trim($_POST["lname"]);
        $address = trim($_POST["address"]);
        $city = trim($_POST["city"]);
        $state = trim($_POST["state"]);
        $zip = trim($_POST["zip"]);
        $phone = trim($_POST["phone"]);
        $industry = trim($_POST["industry"]);
        $comments = trim($_POST["comments"]);
        // Check that data was sent to the mailer.
        if ( empty($name) 
        OR empty($company) 
        OR empty($title)
        OR empty($fname)
        OR empty($lname)
        OR empty($address)
        OR empty($city)
        OR empty($state)
        OR empty($zip)
        OR empty($phone)
        OR empty($industry)
        OR empty($comments)
        OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }
        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "joshua.klimaszewski@gmail.com";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "First Name: $fname\n";
        $email_content .= "Last Name: $lname\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Title:\n$title\n";
        $email_content .= "address:\n$address\n";
        $email_content .= "city:\n$city\n";
        $email_content .= "state:\n$state\n";
        $email_content .= "zip:\n$zip\n";
        $email_content .= "phone:\n$phone\n";
        $email_content .= "industry:\n$industry\n";
        $email_content .= "comments:\n$comments\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>