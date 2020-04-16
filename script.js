$(document).ready(function () {
  jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
    
    return this.optional(element) || phone_number.length > 9 &&
      phone_number.match(/^\+(\d){1} \(\d{3}\) \d{3}-\d{4}$/gi);
  }, "Please specify a valid phone number");

  jQuery.validator.addMethod("email_format", function (email, element) {
    return this.optional(element) ||
    email.match(/[\a-zA-Z0-9.]+@[\a-zA-Z0-9]+\.[\a-zA-Z0-9]+$/ig);
  }, "Please specify a valid email address");
  jQuery.validator.addMethod("complete_url", function (val, elem) {
    return this.optional(elem) ||
      val.match(/^((http):\/\/[a-zA-Z0-9]+\.)[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/ig);
  }, "Please specify a valid url");

  $('form[id="registerForm"]').validate({
    rules: {
      name: 'required',
      user_email: {
        required: true,
        email_format: true,
      },
      psword: {
        required: true,
        // minlength: 8,
      },
      confirm_psword: {
        required: true,
        equalTo: "#psword"
      },
      telephone: {
        phoneUS: true
      },
      website: {
        complete_url: true
      }
    },
    messages: {
      name: 'This field is required',
      user_email:  {
        email_format: 'Enter a valid email'
      },
      confirm_psword: {
        equalTo: 'Passwords do not match'
      },
      telephone: {
        phoneUS: 'Please enter valid format.'
      },
      website: {
        complete_url: 'Please enter valid url'
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
  return false;
});
