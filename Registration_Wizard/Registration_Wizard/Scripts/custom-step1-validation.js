jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");
$("#regform").validate({
    rules: {
        Name: {
            required: true,
            lettersonly: true
        },
        Salutation: {
            required: true
        },
        MiddleName: {
            lettersonly: true
        },
        LastName: {
            required: true,
            lettersonly: true
        },
        Company: {
            required: true,
            lettersonly: true
        },
        Title: {
            required: true,
            lettersonly: true
        },
        Email: {
            required: true,
            email: true
        },
        ConfirmEmail: {
            required: true,
            equalTo: "#Email"
        },
        Phone: {
            required: true
        }
    },
    messages: {
        Name: {
            required: "Name required",
            lettersonly: "Use only latin letters"
        },
        Salutation: {
            required: "Salutation required"
        },
        MiddleName: {
            lettersonly: "Use only latin letters"
        },
        LastName: {
            required: "Last name required",
            lettersonly: "Use only latin letters"
        },
        Company: {
            required: "Company required",
            lettersonly: "Use only latin letters"
        },
        Title: {
            required: "Title required",
            lettersonly: "Use only latin letters"
        },
        Email: {
            required: "Email required",
            email: "Invalid email"
        },
        ConfirmEmail: {
            required: "Email confirmation required",
            equalTo: "Confirmation is not equal to email"
        },
        Phone: {
            required: "Phone required",
        }
    },
    tooltip_options: {

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