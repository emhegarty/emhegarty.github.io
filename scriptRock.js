function play(){
	for(i=0;i<3;i++){
		//generate random Rock, Paper or Scissors
		randNum=Math.trunc(Math.random()*3);
		var randGuess="blank";
		if (randNum==0){
			randGuess="ROCK";
		}
		else if (randNum==1){
			randGuess="PAPER";
		}
		else
			randGuess="SCISSORS";
		var choice;
		var upp;
		choice=prompt("Please choose ROCK, PAPER or SCISSORS");
		upp=choice.toUpperCase();
		if (upp=="ROCK"){
			if (randGuess=="SCISSORS"){
				document.getElementById("placeholder").innerHTML="Win";
			}
			else if (randGuess=="PAPER"){
				document.getElementById("placeholder").innerHTML="Lose";
			}
			else{
				document.getElementById("placeholder").innerHTML="Draw";
			}
		}
		else if (upp=="PAPER"){
			if (randGuess=="ROCK"){
				document.getElementById("placeholder").innerHTML="Win";
			}
			else if (randGuess=="SCISSORS"){
				document.getElementById("placeholder").innerHTML="Lose";
			}
			else{
				document.getElementById("placeholder").innerHTML="Draw";
			}
		}
		else if (upp=="SCISSORS"){
			if (randGuess=="PAPER"){
				document.getElementById("placeholder").innerHTML="Win";
			}
			else if (randGuess=="ROCK"){
				document.getElementById("placeholder").innerHTML="Lose";
			}
			else{
				document.getElementById("placeholder").innerHTML="Draw";
			}
		}
		else{
			document.getElementById("placeholder").innerHTML="Input error";
		}
		document.getElementById("reason").innerHTML="Computer played "+randGuess+" and you played "+upp;
		//alert("play again");
	}
}