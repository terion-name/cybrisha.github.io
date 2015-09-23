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

// Charts
var doughnutData = [
		{
			value: 25,
			color:"#9ac357",
			highlight: "#c0e08e",
			label: "Bounce Rate"
		},
		{
			value: 48,
			color: "#658dcc",
			highlight: "#a1bcee",
			label: "Page Views"
		},
		{
			value: 32,
			color: "#c85a53",
			highlight: "#e7938f",
			label: "Unique Users"
		}
	];
var lineChartData = {
	labels : ["12","13","14","15","16","17"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.0)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "#2d3e58",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : [8, 20, 40, 40, 45, 44]
		}
	]
}
window.onload = function(){
	var ctx = document.getElementById("chart-area").getContext("2d");
	window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {responsive: true});
}