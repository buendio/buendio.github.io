if(getW() > sorpBP.mdMin){
    $(window).on('load', function() {
        let $logo = $('.first-screen__logo'),
            $logo_box = $logo.closest('.first-screen__logo-box'),
            height_content = $('.first-screen__content').height() + 15;

        $logo_box.height(height_content).width(height_content);
        $logo.attr('src', $logo.attr('data-src'));

        $logo.on('load', function() {
            $logo_box.addClass('first-screen__logo-box_animate');
        });
    })
}