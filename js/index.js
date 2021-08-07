document.addEventListener('DOMContentLoaded', () => {
  ///////////////scroll header////////////////////////
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 1 && $(this).scrollTop() < 2000){
  //    		$('.stick').addClass("sticky");
  //  		}
  // 		 else{
  //   			 $('.stick').removeClass("sticky");
  // 			 }
	// });
  ///////////////scroll header/////////////////////////

  ////////////////mob nav//////////////////////////////
	$('.nav__mob').hide();//?
     $('.mob').on('click', function(){
       $('.nav__mob').slideToggle();
       $('.mob span').toggleClass('active');
      });
  ///////////////mob nav///////////////////////////////


  $('.sliderJs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow:`<button class="next">
                <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
                </svg>
              </button>`,
    prevArrow:`<button class="prev">
                <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
                </svg>
              </button>`,
              responsive: [
                {
                  breakpoint: 992,
                  settings: 'unslick'
                }
              ]
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //infinite: false,
    nextArrow:`<button class="next">
                <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
                </svg>
              </button>`,
    prevArrow:`<button class="prev">
                <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
                </svg>
              </button>`,
  })
////////////////////////////////////////////////////////////////////////
  function slickify() {
    $('.catalogSectionJs').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      //infinite: false,
      nextArrow:`<button class="next">
                  <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
                  </svg>
                </button>`,
      prevArrow:`<button class="prev">
                  <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
                  </svg>
                </button>`,
    })
  }
  $(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 600) {
        slickify();
    }
});
if ($(window).width() < 600) {
  slickify();
}
////////////////////////////////////////////////////////////////////////

function slickify2() {
  $('.productWrap__item_un').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //infinite: false,
    nextArrow:`<button class="prev">
    <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
    </svg>
  </button>`,
    prevArrow:`<button class="next">
    <svg viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1252 35.5617L2.89577 18.9523L24.1252 2.38127L23.211 1.22769L0.494274 18.9523L23.2258 36.6769L24.1252 35.5617Z"  stroke-width="0.5"/>
    </svg>
    </button>`,
  })
}

$(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth < 600) {
      slickify2();
  }
});
if ($(window).width() < 600) {
slickify2();
}
/////////////////////////////////////////////////////////////////////////
  $('.fotos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });
////////////////////////////////////////////////////////////////////////
  $('.feedSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots:false
        }
      }
    ]
  });
////////////////////////////////////////////////////////////////////////
  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

            $(document).on('click', (e) => {
              console.log(e.target);
              if (!selectHead.is(e.target) ) {
                selectList.slideUp(duration);
                selectHead.removeClass('on');

              }
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });

});
//////////////////////////////////////////////////////////////////////
     $('.btnCart').on('click', function(){
       $('.cart').slideToggle();
       $(this).toggleClass('active');
      });
     $('.close').on('click', function(){
       $('.cart').slideToggle();
       $('.btnCart').toggleClass('active');
      });

////////////////////////////////////////////////
    $('.cartItemAdd__btn').on('click', function(){
      $('.cartItemAdd').toggleClass('active');
    });
    $('.cartItemAdd__body_close').on('click', function(){
      $('.cartItemAdd').toggleClass('active');
    });
  //////////////////////////////////////////////////
  $('.product__sizeBtn').on('click', function(){
    $('.overlay').toggleClass('active');

   });
  $('.closePopup').on('click', function(){
    $('.overlay').toggleClass('active');

   });
///////////////////////////////////////////////////////////
   const track = document.querySelectorAll('.slick-track')
   const list = document.querySelectorAll('.slick-list')

   window.onscroll = function() {fixTop()};
   var stick = document.querySelectorAll('.stick')
   var slider = document.querySelector('.sliderSection')


   let Yk = slider.getBoundingClientRect()
   let scrolltop = document.body.scrollTop + Yk.top
   console.log(window.pageYOffset);
   console.log(pageYOffset);
   function fixTop() {
    if ($(window).width() > 600) {
      if (window.pageYOffset > 313 && window.pageYOffset < (slider.offsetHeight - 400)) { // 33px - высота "плашки"

        stick.forEach(el => {

          if (pageYOffset === 400) {
            el.style.top = `260px`;
          } else {
            el.style.top = `${pageYOffset}px`;
          }
        })
       }
    } else {
      if (window.pageYOffset > 0 && window.pageYOffset < 500) { // 33px - высота "плашки"

        stick.forEach(el => {

          if (pageYOffset < 200) {
            el.style.top = `100px`;
          } else {
            el.style.top = `${pageYOffset}px`;
          }
        })
       }
    }


   }


}); // end DOMContentLoaded