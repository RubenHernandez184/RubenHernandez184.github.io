$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	console.log('random number picked');
	$("#submit").click(function(){
		//what did they guess?
		console.log('submit clicked');
		var guess = $("input[name=Number]").val();
		if(guess == random_num){
			$("div").html("Correct guess!");
		} else if (guess < random_num){
			  $("div").html("Guess higher!");
		} else if (guess > random_num){
			$("div").html("Guess lower!");
		}
	});	
 	//$("id=clear button").click(function(){		
 	//	var number= $("input[name=number"]").val();
 
});
