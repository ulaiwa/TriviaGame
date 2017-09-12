$(document).ready(function(){

	var timeCount = 30;
	var correctAns = 0;
	var wrongCount = 0;
	var unansCount = 0;

	$("#quizCtnr").hide();
	$("#scoreboard").hide();
	
	$("#startBtn").on("click", function(){

		$("#headerCtnr").hide();
		$("#quizCtnr").show();
		startCountdown();
		return;
	});

	function startCountdown() {
		$('#timer').html(timeCount);
		timeCount--;
	if (timeCount < 0) {
	    alert('time is up!');
	    scoreboard();
	  }
	  else {
	    setTimeout(startCountdown, 1000);
	  }
	}


	function scoreboard(){
		$('#correctAns').html(correctCount);


		$('#wrongAns').html(wrongCount);
		$('#unanswered').html(unansCount);
	}
});

