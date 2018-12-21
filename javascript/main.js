

var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = "";

var images = ["cat1.png", "cat2.png", "cat3.png", "cat4.png"];



        function randomtargetNumber () {
		targetNumber = Math.floor(Math.random() * 100) + 18;
    }
    


    

	function resetCats () {
		for (var i = 0; i < images.length; i++) {
			var kittyCat = $("<img>");
			kittyCat.addClass("kittyCat");
			kittyCat.attr("src", images[i]);
			kittyCat.attr("value", (Math.floor(Math.random() * 12) + 1));
			kittyCat.attr("height", "100");
			$(".kittyImages").append(kittyCat);
		}
	}




	function resetHTML () {                         //reset
		$(".target-number").html(targetNumber);
		$(".winLose").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".scoreBoy").html(counter);
		$(".kittyImages").empty();
	}

	function bigBetReset () {
		randomtargetNumber ();
		counter = 0;
		resetHTML ();
		resetCats ();
	}


	randomtargetNumber();
	resetHTML ();
	resetCats ();


	function kittyCatClick () {  //onclick

		counter += parseInt($(this).attr("value"));
		$(".scoreBoy").html(counter);
		if (counter == targetNumber) {
			wins++;
			bigBetReset();
		}
		else if (counter > targetNumber) {
			losses++;
			bigBetReset();
		};
	};

	
	$(document).on("click", ".kittyCat", kittyCatClick);