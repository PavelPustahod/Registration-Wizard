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