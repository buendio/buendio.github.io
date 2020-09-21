if(window.getW() > window.sorpBP.mdMin){
    $(window).on('load', function() {
        let $logo = $('.first-screen__logo'),
            $logo_box = $logo.closest('.first-screen__logo-box'),
            height_content = $('.first-screen__title').height() + $('.first-screen__text').height() + 25;

        $logo_box.height(height_content).width(height_content).css('left',-height_content - 30);
        $logo.attr('src', $logo.attr('data-src'));

        $logo.on('load', function() {
            $logo_box.addClass('first-screen__logo-box_animate');
        });
    })
}