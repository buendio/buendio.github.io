window.loadSrcOrBg = function ($els){
    window.fastdom.mutate(function(){
        $els.each(function(){
            var $this = $(this);
            var srcSet = '';
            var attrSrcSet = '';
            var alt = '';
            var attrAlt = '';
            var dataClass = '';
            var attrDataClass = '';
            var srcForLoadEvent = '';
            var sLoader = '.js-loadsrcorbg-loader';
            var isIMG = false;
            var $parentPicture = $this.closest('picture');

            if($this.attr('data-srcset') && $this.attr('data-srcset').length)
                srcSet = $this.attr('data-srcset');

            if($this.attr('data-alt') && $this.attr('data-alt').length)
                alt = $this.attr('data-alt');

            if($this.attr('data-class') && $this.attr('data-class').length)
                dataClass = $this.attr('data-class');

            if($this.attr('data-src') && $this.attr('data-src').length){
                srcForLoadEvent = $this.attr('data-src');

                if($this[0].tagName === 'IMG'){
                    isIMG = true;

                    if($parentPicture.length){
                        var $source = $parentPicture.find('source');

                        $source.each(function(){
                            var $thisSource = $(this);
                            var dataSrcset = $thisSource.attr('data-srcset');

                            if(typeof dataSrcset === 'string'){
                                $thisSource.attr('srcset', dataSrcset);
                                $thisSource.removeAttr('data-srcset');
                            }
                        });
                    }

                    $this.attr('src', $this.attr('data-src'));

                    if(srcSet.length)
                        $this.attr('srcset', srcSet);

                    if(alt.length)
                        $this.attr('alt', alt);

                    if(dataClass.length)
                        $this.attr('class', dataClass);
                }else{
                    var $loader = $this.find(sLoader);

                    if(srcSet.length)
                        attrSrcSet = ' srcset="' + srcSet + '"';

                    if(alt.length)
                        attrAlt = ' alt="' + alt + '"';

                    if(dataClass.length)
                        attrDataClass = ' class="' + dataClass + '"';

                    if($loader.length && !$loader.siblings().length){
                        $this.on('sorpImgLoadSrcOrBg', function(){
                            $loader.remove();
                        });

                        $this.append('<img src="' + $this.attr('data-src') + '"' + attrSrcSet + attrAlt + attrDataClass + '>');
                    }else{
                        $this.html('<img src="' + $this.attr('data-src') + '"' + attrSrcSet + attrAlt + attrDataClass + '>');
                    }
                }

                if(srcSet.length && window.isRetina())
                    srcForLoadEvent = srcSet.replace(/ 2x/g, '');
            }else if($this.attr('data-bg') && $this.attr('data-bg').length){
                srcForLoadEvent = $this.attr('data-bg');
                $this.attr('style', 'background-image:url(' + $this.attr('data-bg') + ');');
            }

            $this.removeAttr('data-src').removeAttr('data-srcset').removeAttr('data-alt').removeAttr('data-bg').removeAttr('data-class');

            if(isIMG){
                $this[0].onload = function(){
                    $this.trigger('sorpImgLoadSrcOrBg');
                };
            }else{
                if(srcForLoadEvent.length){
                    var img = new Image();

                    img.onload = function(){
                        $this.trigger('sorpImgLoadSrcOrBg');
                    };

                    img.src = srcForLoadEvent;
                }
            }
        });
    });
};