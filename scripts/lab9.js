$(document).ready(function( ) {
	$("h1").text("Lab 9"); //same as document.getElementsByTagName("h1");
	
	//selecting element with id="header"
	$("#header").html("<h3>Working with jQuery</h3>");
	
	//this does not work
	//$("input[type='button']").each().addClass("btn-background");
	//this works
	$("input[type='button']").each(function(index,element){
		$(element).addClass("btn-background");
	});
	
	$("#buttons").addClass("red-border");
	
	$("p").each(function(index,element) {
		$(element).addClass("blue");
	});
	
	$("#first").on("click",addGreenBorder);
	
	function addGreenBorder(){
		$("p:first").addClass("green-border");
	};
	
	$("#last").on("click",addOrangeBorder);
	
	function addOrangeBorder(){
		$("p:last").addClass("orange-border");
	};
	
	$("#prev").on("click",addPurpleBorder);
	
	function addPurpleBorder(){
		$("#para3").prev().addClass("purple-border");
	};
	
	$("#next").on("click",addYellowBorder);
	
	function addYellowBorder(){
		$("#para2").next().addClass("yellow-border");
	};
	
	$("#remove").on("click",removeFooter);
	
	function removeFooter(){
		$("#footer").remove();
	};
});