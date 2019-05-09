$("#regform").validate({
    rules: {
        country: {
            required: true,
        },
        Address: {
            required: true
        },
        City: {
            required: true
        },
        PostalCode: {
            required: true
        },
        state: {
            required: true
        },
    },
    messages: {
        country: {
            required: "Please select your country"
        },
        Address: {
            required: "Address required",
        },
        City: {
            required: "City required",
        },
        PostalCode: {
            required: "Postal code required",
        },
        state: {
            required: "State required",
        },
    },
    showErrors: function (errorMap, errorList) {
        $.each(this.validElements(), function (index, element) {
            var $element = $(element);
            var elid = $element.attr('id');
            var $pic = $("#" + elid + ".glyphicon");
            $pic.hide();
            $pic.tooltip("destroy");
        });

        $.each(errorList, function (index, error) {
            var $element = $(error.element);
            var elid = $element.attr('id');
            var $pic = $("#" + elid + ".glyphicon");
            $pic.tooltip("destroy");
            $pic.show();
            $pic.tooltip({ title: error.message })
        });
    }
});