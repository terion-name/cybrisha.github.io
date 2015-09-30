$(function(){
	var $ppc = $('.system-statistics-circular'),
		percent = parseInt($ppc.data('percent')),
		deg = 360*percent/100;
	if (percent > 50) {
		$ppc.addClass('gt-50');
	}
	$('.system-statistics-circular-progress__fill').css('transform','rotate('+ deg +'deg)');
	$('.system-statistics-circular-percents__value').html(percent+'%');
});