(function ($) {
    $(document).ready(function () {
        $('#submit-form').click(function (e) {

            e.preventDefault();
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var name = $('#form_name').val(),
				email = $('#form_email').val(),
				message = $('#form_message').val(),
                ucast = $('#form_ucast').val(),
				data_html,
				success = $('#form-message');


            if (name == "")
                $('#form_name').val('Please, fill in your name.');
            success.html('You have some errors in form...');
            if (email == "") {
                $('#form_email').val('You need to enter your e-mail.');
                success.html('You have some errors in form...');
            } else if (reg.test(email) == false) {
                $('#form_email').val('This e-mail address is not valid.');
                success.html('You have some errors in form...');
            }

            if (ucast == "0")
                success.html('Please, select if you will come!');


            if (ucast != "0" && name != "" && reg.test(email) != false) {
                data_html = "type=svatba&name=" + name + "&email=" + email + "&message=" + message + "&ucast=" + ucast;
                success.html('...please wait, submitting form...');
                //alert(data_html);
                $.ajax({
                    type: 'POST',
                    url: 'register.ashx',
                    data: data_html,
                    success: function (msg) {

                        if (msg == 'sent') {
                            success.html('Your registration has been <strong>successfully</strong> submitted. Thanks!');
                            $('#form_name').attr('disabled', 'disabled');
                            $('#form_email').attr('disabled', 'disabled');
                            $('#form_ucast').attr('disabled', 'disabled');
                            $('#form_message').attr('disabled', 'disabled');
                            $("#submit-form").css('display', 'none');
                        } else {
                            success.html('An <b>error</b> appeared, <a href="mailto:webmaster@ceramtec.info">contact webmaster</a>!');
                            $("#submit-form").val("Send again");
                        }
                    },
                    error: function () {
                        success.html('An <b>error</b> appeared, <a href="mailto:webmaster@ceramtec.info">contact webmaster</a>!');
                        $("#submit-form").val("Send again");
                    }
                });

            }
            return false;
        });
    });
})(jQuery);