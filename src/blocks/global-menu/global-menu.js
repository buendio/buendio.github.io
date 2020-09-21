function toggleMenu() {
    let $global_menu = $('.global-menu');

    if($global_menu.hasClass('open')) {
        let html = $('html');
        let scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])

        $('html,body').removeClass('freezePage');
    } else {
        let scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        let html = $('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        $('html,body').addClass('freezePage');
    }

    $global_menu.toggleClass('open');
}

$('body').on('global_menu_changes', toggleMenu);