$(document).ready(function () {
    // Custom method for phone number validation
    $.validator.addMethod("phoneUS", function (phone_number, element) {
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    }, "Please specify a valid phone number");

    $("#custom_val").validate({
        rules: {
            fname: "required",
            lname: "required",
            mail: {
                required: true,
                email: true
            },
            number: {
                required: true,
                phoneUS: true
            },
            message: "required"
        },
        messages: {
            fname: "First Name is required.",
            lname: "Last Name is required.",
            mail: {
                required: "Email is required.",
                email: "Please enter a valid email address."
            },
            number: {
                required: "Phone number is required.",
                phoneUS: "Please enter a valid phone number."
            },
            message: "Message is required."
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },
        submitHandler: function (form) {
            sendMail();
        }
    });

    function sendMail() {
        let params = {
            to_name: "name",
            name: $("#fname").val() + " " + $("#lname").val(),
            phone: $("#number").val(),
            email: $("#mail").val(),
            message: $("#message").val()
        };

        emailjs.send('service_7lcxcch', 'template_wfa5rpc', params)
            .then(function (response) {
                console.log('Email sent!', response);
                alert('Email sent successfully!');
            }, function (error) {
                console.error('Error sending email:', error);
                alert('Error sending email! Please try again later.');
            });
    }

    $("#custom_val").on("submit", function (event) {
        event.preventDefault();
    });
});
