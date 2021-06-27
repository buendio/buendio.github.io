document.addEventListener('DOMContentLoaded', () => {

     $('.headerBtn').on('click', function(){
       $('.overlay').toggleClass('active');
      });
     $('.close').on('click', function(){
       $('.overlay').toggleClass('active');
      });
  ///////////////scroll header/////////////////////////

	$(window).scroll(function() {
		if ($(this).scrollTop() > 72){
     		$('header').addClass("sticky");
   		}
  		 else{
    			 $('header').removeClass("sticky");
  		}
	});
////////////////////////////////////////////////////////
}); // end DOMContentLoaded