# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

//jquery for button toggles and animation
$(document).ready(function() {
	$('div').mouseenter(function() {
		$(this).animate({
			height: '+=10px'
		});
	});
	$('div').mouseleave(function() {
		$(this).animate({
			height: '-=10px'
		});
	});
	$('div').click(function() {
		$(this).toggle(1000);
	});
});