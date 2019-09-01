$(document).ready(function(){
$('.menu-btn').on('click', function(e){
	e.preventDefault();
	$('.menu-btn').toggleClass('menu-btn_ac');
	$('.menu1').toggleClass('menu_ac');
	$('.cntnt').toggleClass('cntnt_ac');
});
});