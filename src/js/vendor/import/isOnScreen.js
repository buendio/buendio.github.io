window.isOnScreen = function ($el, verticalOffset, horizontalOffset, threshold){
    if($el.length){
        $el = $el.first();
        verticalOffset = typeof verticalOffset === 'number' ? verticalOffset : 0;
        horizontalOffset = typeof horizontalOffset === 'number' ? horizontalOffset : 0;
        threshold = (typeof threshold === 'number' && threshold >= 0 && threshold <= 1) ? threshold : 0;

        var el_st = $el.offset().top;
        var el_sl = $el.offset().left;
        var el_w = $el.outerWidth();
        var el_h = $el.outerHeight();
        var window_st = $(window).scrollTop();
        var window_h = window.getH();
        var window_w = window.getW();

        var screen = {
            'top': window_st + ($fixedHeader.length ? $fixedHeader.outerHeight() : 0) - verticalOffset,
            'bottom': window_st + window_h + verticalOffset,
            'left': 0 - horizontalOffset,
            'right': window_w + horizontalOffset,
        };

        var el = {
            'top': el_st,
            'bottom': el_st + el_h,
            'left': el_sl,
            'right': el_sl + el_w,
        };

        if((el.bottom > screen.top && el.top < screen.bottom) && (el.right > screen.left && el.left < screen.right)){
            if(threshold){
                var showHeight = Math.min(el.bottom - screen.top, screen.bottom - el.top);
                var showWidth = Math.min(el.right - screen.left, screen.right - el.left);

                return ((showHeight >= window_h || showHeight / el_h >= threshold) && (showWidth >= window_w || showWidth / el_w >= threshold));
            }

            return true;
        }
    }
};