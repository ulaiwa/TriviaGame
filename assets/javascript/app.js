$(document).ready(function(){

	var timeCount = 60;
	var correctCount = 0;
	var wrongCount = 0;
	var unansCount = 0;

	$("#quizCtnr").hide();
	$("#scoreboard").hide();
	$('#gif0').hide()
	$('#gif1').hide()
	$('#gif2').hide()
	$('#gif3').hide()
	$('#gif4').hide()
	$('#gif5').hide()
	
	$("#startBtn").on("click", function(){
		$("#headerCtnr").hide();
		$("#quizCtnr").show();
		startCountdown();
		return;
	});

	$("#submitBtn").on("click", function(){

		$("#quizCtnr").hide();
		$("#scoreboard").show();
		scoreboardCount();
		return;
	});

	function startCountdown() {
		$('#timer').html(timeCount);
		timeCount--;
	if (timeCount < 0) {
	    alert('time is up! Please try again!');
	    reset();
	  }
	  else {
	    setTimeout(startCountdown, 1000);
	  }
	}

	function reset (){
	location.reload();
	var timeCount = 60;
	var correctCount = 0;
	var wrongCount = 0;
	var unansCount = 0;

	$("#headerCtnr").show();
	$("#quizCtnr").hide();
	return;
	}

	function scoreboardCount(){

	$("#quizCtnr").hide();
	$("#scoreboard").show();

	var q1 = $('input:radio[name="q1"]:checked').val() || null;
	var q2 = $('input:radio[name="q2"]:checked').val() || null;
	var q3 = $('input:radio[name="q3"]:checked').val() || null;
	var q4 = $('input:radio[name="q4"]:checked').val() || null;
	var q5 = $('input:radio[name="q5"]:checked').val() || null;


	if(q1 === null){
		unansCount++;
	}
	else if(q1 === "INDIANA"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	if(q2 === null){
		unansCount++;
	}
	else if(q2 === "1980S"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	if(q3 === null){
		unansCount++;
	}
	else if(q3 === "TELEKINESIS"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	if(q4 === null){
		unansCount++;
	}
	else if(q4 === "WITH CHRISTMAS LIGHTS"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	if(q5 === null){
		unansCount++;
	}
	else if(q5 === "ALL OF THEM"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	$('#correctAns').html(correctCount);
	$('#wrongAns').html(wrongCount);
	$('#unanswered').html(unansCount);

	// var gifs = ["assets/images/0.gif", "assets/images/1.gif" ];
		
		if (correctCount === 0) {
			$('#gif0').show()
			$('#gif1').hide()
			$('#gif2').hide()
			$('#gif3').hide()
			$('#gif4').hide()
			$('#gif5').hide()
		}
		else if (correctCount === 1){
			$('#gif0').hide()
			$('#gif1').show();
			$('#gif2').hide()
			$('#gif3').hide()
			$('#gif4').hide()
			$('#gif5').hide()
			
		}

		else if (correctCount === 2){
			$('#gif0').hide()
			$('#gif1').hide();
			$('#gif2').show();
			$('#gif3').hide();
			$('#gif4').hide();
			$('#gif5').hide();
		}

		else if (correctCount === 3){
			$('#gif0').hide()
			$('#gif1').hide();
			$('#gif2').hide();
			$('#gif3').show();
			$('#gif4').hide();
			$('#gif5').hide();
		}

		else if (correctCount === 4){
			$('#gif0').hide()
			$('#gif1').hide();
			$('#gif2').hide();
			$('#gif3').hide();
			$('#gif4').show();
			$('#gif5').hide();
		}

		else if (correctCount === 5){
			$('#gif0').hide()
			$('#gif1').hide();
			$('#gif2').hide();
			$('#gif3').hide();
			$('#gif4').hide();
			$('#gif5').show();
		}

		

		



		// if (correctCount === 1) {
		// 	$('#gif1').show()
		// }
		// else{
		// 	$('#gif1').hide();
		// }


		// for (var i = 0; i < gifs.length; i++;) {
		// 	$('#gifPlaceHere').gifs[0];
		// }
		
	}
});

