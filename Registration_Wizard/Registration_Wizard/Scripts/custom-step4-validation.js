jQuery.validator.addMethod("password", function (value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
}, "Passwords are 8-16 characters with uppercase letters, lowercase letters and at least one number.");

$("#regform").validate({
    rules: {
        Password: {
            required: true,
            password: "Required pasword"
        },
        ConfirmPassword: {
            required: true,
            equalTo: "#Password"
        },
        Accept: {
            required: true
        }
    },
    messages: {
        Password: {
            required: "Please enter your password",
            password: "Invalid password"
        },
        ConfirmPassword: {
            required: "Required pasword confirmation",
            equalTo: "Confirmation is not equal to password"
        },
        Accept: {
            required: "Please confirm that you've agreed with terms of use"
        }
    },
    showErrors: function (errorMap, errorList) {
        $.each(this.validElements(), function (index, element) {
            var $element = $(element);
            var elid = $element.attr('id');
            var $pic = $("#" + elid + ".glyphicon");
            $pic.hide();
            $element.tooltip("destroy");
        });

        $.each(errorList, function (index, error) {
            var $element = $(error.element);
            $element.tooltip("destroy");
            var elid = $element.attr('id');
            var $pic = $("#" + elid + ".glyphicon");
            $pic.show();
            $element.tooltip({ title: error.message })
        });
    }
});