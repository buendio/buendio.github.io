/* удалить в будущем, если фиксироваться будет меню, а не шапка на всех страницах */

/*$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 110) {

        $(".header").addClass("header_scroll");

    } else {
        $(".header").removeClass("header_scroll");
    }
});*/

$('.header__burger, .global-menu__close').on('click', function () {
    $('body').trigger('global_menu_changes');
});