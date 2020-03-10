$('document').ready(function(){

// naslovna stran
    let text = ["junior web developer","glasbenik","inženir informatike","živeč v Ljubljani"];
    let i = 0;
(function loop(){
    $('#hRO').fadeIn(500).text(text[i]).delay(2000).fadeOut(500,loop);
    i++;
    if(i >= text.length){i=0};
}());
//naslovna stran 

//  prikaži meni
    $('.mobileNav').on("click",function(){
        $('#navigacija').toggle();
    });
   
    $('#navigacija').on("click", function(){
        if($('.mobileNav').css('display') == 'grid'){
            console.log("je");
        $('#navigacija').toggle();};
    });
    
// prikaži meni

// kategorije
    $('.liGlasba').on("click",function(){ 
        if($('.liVse').hasClass('active')){
            $('.liVse').removeClass('active');
            $(this).toggleClass('active');
            $('.glasba, .splet').slideToggle(700);
        }else if($('.liSplet').hasClass('active')){
            $('.liSplet').removeClass('active');
            $('.splet').slideToggle(700);
            $(this).toggleClass('active');
        }else if($(this).hasClass('active')){
            $('.glasba').slideToggle(700);
        }
        $('.glasba').slideToggle(700);
    });


    $('.liSplet').on("click",function(){
      if($('.liVse').hasClass('active')){
          $('.liVse').removeClass('active');
          $(this).toggleClass('active');
          $('.glasba, .splet').slideToggle(700);
      }else if($('.liGlasba').hasClass('active')){
          $('.liGlasba').removeClass('active');
          $(this).toggleClass('active');
          $('.glasba').slideToggle(700);
      }else if($(this).hasClass('active')){
        $('.splet').slideToggle(700);
      }
      $('.splet').slideToggle(700);
    });

    $('.liVse').on("click", function(){
        if($('.liSplet').hasClass('active')){
            $('.liSplet').removeClass('active');
            $(this).toggleClass('active');
            $('.splet').slideToggle(700);
        }else if($('.liGlasba').hasClass('active')){
            $('.liGlasba').removeClass('active');
            $(this).toggleClass('active');
            $('.glasba').slideToggle(700);
        }else if($('.liVse').hasClass('active')){
            $('.glasba, .splet').slideToggle(700);
        }
        $('.glasba, .splet').slideToggle(700);
    })
// kategorije


// scroll
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      600,
      'linear'
    )
  })
//scroll

});