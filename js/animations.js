$(function () {

	var element = null;
	var videoDev = document.getElementById("developerAnimationVideo");
	var videoCon = document.getElementById("consumerAnimationVideo");

	//$("#spinnerBox").hide();
	$("#consumerAnimationBox").hide();

	$("#developerAnimationButton").click(function(){
		// Developer Animation
			$("#developerAnimationBox").show();
			$("#consumerAnimationBox").hide();
			
			videoCon.pause();
			videoCon.currentTime = 0;
			videoDev.currentTime = 0;
			videoDev.play();
	});

	$("#consumerAnimationButton").click(function(){
		// Consumer Animation
			$("#developerAnimationBox").hide();
			$("#consumerAnimationBox").show();
			videoDev.pause();
			videoDev.currentTime = 0;
			videoCon.currentTime = 0;
			videoCon.play();
	});

});