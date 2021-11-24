function writeVerse(){
	document.getElementById("verses").innerHTML="99 bottles of beer on the wall, 99 bottles of beer";
	for(i=98;i>=2;i=i-1){
		document.getElementById("verses").innerHTML+="<br/>Take one down and pass it around, "+i+" bottles of beer on the wall<br/><br/>"+i+" bottles of beer on the wall, "+i+" bottles of beer";
	}
	document.getElementById("verses").innerHTML+="<br/>Take one down and pass it around, 1 bottle of beer on the wall<br/><br/>1 bottle of beer on the wall, 1 bottle of beer<br/>Take one down and pass it around, no more bottles of beer on the wall<br/><br/>No more bottles of beer on the wall, no more bottles of beer<br/>Go to the store and buy some more, 99 bottles of beer on the wall"
}