var AjaxForm = {

    initialize: function (afConfig) {
        if (!jQuery().ajaxForm) {
            document.write('<script src="' + afConfig['assetsUrl'] + 'js/lib/jquery.form.min.js"><\/script>');
        }
        if (!jQuery().jGrowl) {
            document.write('<script src="' + afConfig['assetsUrl'] + 'js/lib/jquery.jgrowl.min.js"><\/script>');
        }

        jQuery(document).ready(function () {
            jQuery.jGrowl.defaults.closerTemplate = '<div>[ ' + afConfig['closeMessage'] + ' ]</div>';
        });

        jQuery(document).off('submit', afConfig['formSelector']).on('submit', afConfig['formSelector'], function (e) {
            jQuery(this).ajaxSubmit({
                dataType: 'json',
                data: {pageId: afConfig['pageId']},
                url: afConfig['actionUrl'],
                beforeSerialize: function (form) {
                    form.find(':submit').each(function () {
                        if (!form.find('input[type="hidden"][name="' + jQuery(this).attr('name') + '"]').length) {
                            jQuery(form).append(
                                jQuery('<input type="hidden">').attr({
                                    name: jQuery(this).attr('name'),
                                    value: jQuery(this).attr('value')
                                })
                            );
                        }
                    })
                },
                beforeSubmit: function (fields, form) {
                    //noinspection JSUnresolvedVariable
                    if (typeof(afValidated) != 'undefined' && afValidated == false) {
                        return false;
                    }
                    form.find('.error').html('');
                    form.find('.error').removeClass('error');
                    form.find('input,textarea,select,button').attr('disabled', true);
                    return true;
                },
                success: function (response, status, xhr, form) {
                    form.find('input,textarea,select,button').attr('disabled', false);
                    response.form = form;
                    jQuery(document).trigger('af_complete', response);
                    if (!response.success) {
                        AjaxForm.Message.error(response.message);
                        if (response.data) {
                            var key, value, focused;
                            for (key in response.data) {
                                if (response.data.hasOwnProperty(key)) {
                                    if (!focused) {
                                        form.find('[name="' + key + '"]').focus();
                                        focused = true;
                                    }
                                    value = response.data[key];
                                    form.find('.error_' + key).html(value).addClass('error');
                                    form.find('[name="' + key + '"]').addClass('error');
                                }
                            }
                        }
                    }
                    else {
                        AjaxForm.Message.success(response.message);
                        form.find('.error').removeClass('error');
                        form[0].reset();
                        //noinspection JSUnresolvedVariable
                        
                         if (typeof jQuery('#recaptcha') != "undefined") {
	                         grecaptcha.reset(); //добавляем сброс сессии для капчи
	                         
                         }
                    }
                }
            });
            e.preventDefault();
            return false;
        });

        jQuery(document).on('keypress change', '.error', function () {
            var key = jQuery(this).attr('name');
            jQuery(this).removeClass('error');
            jQuery('.error_' + key).html('').removeClass('error');
        });

        jQuery(document).on('reset', afConfig['formSelector'], function () {
            jQuery(this).find('.error').html('');
            AjaxForm.Message.close();
        });
    }

};


//noinspection JSUnusedGlobalSymbols
AjaxForm.Message = {
    success: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
           // jQuery.jGrowl(message, {theme: 'af-message-success', sticky: sticky});
        }
    },
    error: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
           // jQuery.jGrowl(message, {theme: 'af-message-error', sticky: sticky});
        }
    },
    info: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
           // jQuery.jGrowl(message, {theme: 'af-message-info', sticky: sticky});
        }
    },
    close: function () {
        jQuery.jGrowl('close');
    },
};
