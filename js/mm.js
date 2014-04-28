$(document).ready(function(){
	setInterval(function(){
		$("#head").css("-webkit-transform","rotate(-10deg)");
		setTimeout(function(){
			$("#head").css("-webkit-transform","rotate(10deg)");
		},1000);
	},2000);
});