window.onScreen = function ($el, callBack, verticalOffset, horizontalOffset, threshold){

    // Завершаем работу функции если $el не является jquery селектором
    if(!($el instanceof jQuery && $el.length)){
        return;
    }

    verticalOffset = typeof verticalOffset === 'number' ? verticalOffset : 0;
    horizontalOffset = typeof horizontalOffset === 'number' ? horizontalOffset : 0;
    threshold = (typeof threshold === 'number' && threshold >= 0 && threshold <= 1) ? threshold : 0;

    if('IntersectionObserver' in window){ // Проверка поддержки браузером IntersectionObserver
        var io = new IntersectionObserver(function(entries, observer){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    callBack($(entry.target));
                    io.unobserve(entry.target);
                }
            });
        }, {rootMargin: verticalOffset + 'px ' + horizontalOffset + 'px', threshold: threshold});

        $el.each(function(){
            io.observe($(this)[0]);
        });
    }else{
        var $window = $(window);

        function check(){
            $el.each(function(){
                var $thisEl = $(this);

                if(window.isOnScreen($thisEl, verticalOffset, horizontalOffset, threshold)){
                    callBack($thisEl);
                    $el = $el.not($thisEl);
                }
            });

            if(!$el.length){
                $window.off('resize.onScreen', check);
                $window.off('scroll.onScreen', $.throttle(speed * 2, check));
            }
        }

        check();
        $window.on('resize.onScreen', check);
        $window.on('scroll.onScreen', $.throttle(speed * 2, check));
    }
};