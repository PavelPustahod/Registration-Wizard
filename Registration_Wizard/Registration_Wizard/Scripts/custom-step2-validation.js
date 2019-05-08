$("#regform").validate({
    ignore: "",
    rules: {
        spam: {
            required: function (element) {
                var boxes = $('.check');
                if (boxes.filter(':checked').length == 0) {
                    $('#mes').css('display', 'initial')
                    return true;
                }
                return false;
            },
        },

        Comment: {
            required: true
        }
    },
    messages: {
        spam: "Please select at least two types of spam.",
        Comment: {
            required: "Comment required",
        },
    },

    showErrors: function (errorMap, errorList) {
        $.each(this.validElements(), function (index, element) {
            var $element = $(element);
            var elid = $element.attr('id');
            $('#mes').css('display', 'none');
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