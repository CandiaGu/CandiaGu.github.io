$(document).ready(function() {

	$('#about').click(function(){

		$('html, body').animate({
        scrollTop: $("#aboutPG").offset().top
    }, 1000);
	});


});