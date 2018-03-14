

$('.hamburger').on('click', function( event ){
 	event.preventDefault();
 	$('.navigation').slideToggle();
 	$('.navigation, .horizontal-nav').attr('style','display: block;');
});