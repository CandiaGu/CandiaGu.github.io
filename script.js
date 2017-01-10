

$(document).ready(function() {
	$('#stripe').animate({
		width:"+=47vw"
	},500);
	$('#about').click(function(){

		$('html, body').animate({
        scrollTop: $("#aboutPG").offset().top
    }, 1000);
	});
	$('#portfolio').click(function(){

		$('html, body').animate({
        scrollTop: $("#hl").offset().top
    }, 1000);
	});
	$('#menu').accordion({
		collapsible: true
	});
	// $('.ui-accordion-header').click(function(){
	// 	$(this).css('color', 'black')
	// 	/*Click State 2 finish*/
	// 	}
	// });


});