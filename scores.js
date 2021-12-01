/*
var count=0;
var total=0;
let subjects=[];
let scores=[];

*/
function getScores(){
	var total=0;
	let subjects=[];
	let scores=[];
	count=parseInt(prompt("how many subjects?"));
	document.getElementById("placeholder").innerHTML="Results <br/>-------------- <br/>"
	for(i=0;i<count;i++){
		subjects[i]=prompt("What is subject number "+(i+1)+"?");
		scores[i]=parseInt(prompt("What is your mark?"));
		total=total+scores[i];
		document.getElementById("placeholder").innerHTML+=((i+1)+". "+subjects[i]+" - "+scores[i]+"<br/>");
	
	}
	document.getElementById("placeholder").innerHTML+="-------------- <br/>"
	document.getElementById("placeholder").innerHTML+="Average - "+(total/count);
}