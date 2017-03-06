
$(document).ready(function() {
	$('#myImg').click(function(){
	    $('#myModal').style.display = "block";
	    $('#img01').src = this.src;
	    $('#captionText').innerHTML = this.alt;
	});


	// When the user clicks on <span> (x), close the modal
	$(".close").click(function() { 
	  $('#myModal').style.display = "none";
	});
});