$(document).ready(function() {

	

	$(".main_menu, h1, .heading_text, .form_animate").animated("fadeInDown", "fadeOutUp");
	$(".arrow_down, p_animate, .quote").animated("fadeInUp", "fadeOutDown");
	$(".left_animate").animated("fadeInLeft", "fadeInRight");
	$(".right_animate").animated("fadeInRight", "fadeInLeft");
	
	// Back to Top
	var $btnTop = $(".scrollTop")
	$(window).on("scroll", function (){
		if ($(window).scrollTop() >= 500) {
			$btnTop.fadeIn();
		} else {
			$btnTop.fadeOut();
		}
});


// For Form Validation
$(function() {
	$( document ).tooltip({
		position: {my: "left top", at: "right top"},
		items: "input[required=true], textarea[required=true]",
		content: function() { return $(this).attr( "title" ); }
	});
});

		// Scroll Menu
// $(window).scroll(function(){
// 	$(".scroll_menu").toggleClass("scroll", $(this).scrollTop() > 50)
// });
	


}); 
			// Preloader
	$(window).load(function(){
		$("#loaderInner").fadeOut();
		$("#loader").delay(400).fadeOut("slow");
	});

// Back to Top
var $btnTop = $(".scrollTop")
$(window).on("scroll", function (){
	if ($(window).scrollTop() >= 500) {
		$btnTop.fadeIn();
	} else {
		$btnTop.fadeOut();
	}
});
$btnTop.on("click", function(){
	$("html,body").animate({scrollTop: 0}, 1000)
});
// END Back to Top
	


