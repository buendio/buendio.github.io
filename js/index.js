document.addEventListener('DOMContentLoaded', () => {
////////////////mob nav//////////////////////////////
$('.nav__mob').hide();//?
$('.mob').on('click', function(){
  $('.nav__mob').slideToggle();
  $('.mob span').toggleClass('active');
 // $('body').toggleClass('vh');
 });


   ///////////////scroll header////////////////////////
   let header = $('header'),
   scrollPrev = 0;

 $(window).scroll(function() {
   let scrolled = $(window).scrollTop();

   if ( scrolled > 0 ) {
     header.addClass('out');
   } else {
     header.removeClass('out');

   }
   scrollPrev = scrolled;
 });
/////////////////////////////////////////////
  const inputs = document.querySelectorAll('.inp');
  const form = document.querySelector('form');
  const formInputs = form.elements;

  inputs.forEach(input => {
    input.addEventListener('focusin', e => {
      e.target.closest('.inpWr').classList.remove('error');
      e.target.closest('.inpWr').classList.remove('full');
      e.target.closest('.inpWr').classList.add('focus')
    })
    input.addEventListener('focusout', e => {
      if(e.target.closest('.inpWr').classList.contains('focus'))
      e.target.closest('.inpWr').classList.remove('focus')
      if (e.target.value) {
        e.target.closest('.inpWr').classList.add('full')
      } else {
        e.target.closest('.inpWr').classList.remove('full')
      }
    })
  })

  form.addEventListener('submit', event => {
    [...formInputs].forEach(e => {
      if(e.type != "submit" && e.type != "checkbox") {
        e.closest('.inpWr').classList.remove('error');
        e.closest('.inpWr').classList.remove('focus');
        if (e.value === '') {
          event.preventDefault();
          e.closest('.inpWr').classList.add('error');
        }
      }
    })
    if($('.new-select').text() == 'Місяць') {
      console.log('111');
      $('.new-select').addClass('error');
    }
  })

//////////////////STYLE FOR SELECT///////////////////////////////////////////////

///////////////////////////////////////////////
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

      } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
      }
  });
});
console.log($('.new-select').text());
$('.new-select__item').on('click', function() {
  $('.new-select').removeClass('focus');
  $('.new-select').removeClass('error');
  $('.new-select').addClass('full');
  $(this).parent().parent().parent().addClass('full');
})

$('.new-select').on('click', function() {

  $(this).parent().parent().addClass('focus');
  $(this).toggleClass('focus')
})
//////////////////////MASKA PHONE///////////////////////
$(".inpPhone").mask("+38(999) 999-99-99");
}); // end DOMContentLoaded