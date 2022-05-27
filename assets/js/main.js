// slider
$(document).ready(function(){
  $('.slider').slick({
      arrows:true,
      dots:true,
      speed:1000,
      adaptiveHeight:true,
  });
});
$(document).ready(function(){
  $('.slider-header-text').slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true,
    speed:1000,
    asNavFor:".slider-header-img"
  });
  $('.slider-header-img').slick({
    fade:true,
    arrows:false,
    asNavFor:".slider-header-text"
  });
});

			
// sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('#header').addClass('header_fixed');
      }
      else{
        $('#header').removeClass('header_fixed');
      }
    });


// hamburger
$('.hamburger').on('click', function(){
  $('.main-menu').toggle();
})

$('.hamburger').on('click', function(){
  $('.contacts-header').toggle();
})

// modal window
$('.btn-call').on('click', function(){
  $('.wrapper-modal').fadeIn();
})
$('.btn-call').on('click', function(){
  $('.wrapper-modal').addClass('active')
})
$('.form-order').on('click', function(){
  $('.wrapper-modal').fadeOut();
})

$('.overlay').on('click', function(){
  $('.wrapper-modal').fadeOut();
})

$('.form-order').children().on('click', function(e){
  e.stopPropagation();
})

$('.modal-close').on('click', function(){
  $('.wrapper-modal').hide();
})

$('.overlay').on('click', function(){
  $('.wrapper-modal').hide();
})