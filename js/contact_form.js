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
                $('#form_name').val('Prosím, vyplňte jméno.');
            success.html('Máte nějaké chyby ve formuláři...');
            if (email == "") {
                $('#form_email').val('Je třeba vyplnit email.');
                success.html('Máte nějaké chyby ve formuláři...');
            } else if (reg.test(email) == false) {
                $('#form_email').val('Neplatná emailová adresa.');
                success.html('Máte nějaké chyby ve formuláři...');
            }

            if (ucast == "0")
                success.html('Musíte zadat jestli dorazíte!');


            if (ucast != "0" && name != "" && reg.test(email) != false) {
                data_html = "type=svatba&name=" + name + "&email=" + email + "&message=" + message + "&ucast=" + ucast;
                success.html('...čekejte, odesílám přihlášku...');
                //alert(data_html);
                $.ajax({
                    type: 'POST',
                    url: 'register.ashx',
                    data: data_html,
                    success: function (msg) {

                        if (msg == 'sent') {
                            success.html('Přihláška <strong>v pořádku</strong> odeslána. Děkujeme!');
                            $('#form_name').attr('disabled', 'disabled');
                            $('#form_email').attr('disabled', 'disabled');
                            $('#form_ucast').attr('disabled', 'disabled');
                            $('#form_message').attr('disabled', 'disabled');
                            $("#submit-form").css('display', 'none');
                        } else {
                            success.html('Nastala <b>chyba</b>, <a href="mailto:webmaster@ceramtec.info">kontaktujte webmastera</a>!');
                            $("#submit-form").val("Odeslat znovu");
                        }
                    },
                    error: function () {
                        success.html('Nastala <b>chyba</b>, <a href="mailto:webmaster@ceramtec.info">kontaktujte webmastera</a>!');
                        $("#submit-form").val("Odeslat znovu");
                    }
                });

            }
            return false;
        });
    });
})(jQuery);