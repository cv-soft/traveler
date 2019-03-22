$(document).ready(function() {

	

	$(".main_menu, h1").animated("fadeInDown", "fadeOutUp");
	// $("p").animated("fadeInDown", "fadeOutUp");

	$(".arrow_down, p").animated("fadeInUp", "fadeOutDown");
	// $(".animation_2").animated("fadeInLeft", "fadeOutDown");	


}); 

$(window).load(function(){
	$("#loaderInner").fadeOut();
	$("#loader").delay(400).fadeOut("slow");
});