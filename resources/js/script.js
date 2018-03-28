var turnGreen = function() {
		$('#testHeader').css("color", "green");
	};

var turnRed = function() {
		$('#testHeader').css("color", "red");
	};
var turnBlue = function() {
		$('#testHeader').css("color", "blue");
	};
var turnPurple = function() {
		$('#testHeader').css("color", "purple");
	};
var turnYellow = function() {
		$('#testHeader').css("color", "yellow");
	};

var turnGray = function() {
		$('#testHeader').css("color", "gray");
	};


var show_me = function(tag) {
  
 var  newArray = tag;
 var splitWord = newArray.split(" ");
   var reverseWord = splitWord.reverse();
  var  spliceWord= reverseWord.splice(0, 3);
	var result= spliceWord.join(" , ");
	
 alert(result);
	
	
	
  
  };

 

 

var remove = function() {
  $('#testHeader').css("color","purple")
};

var add = function() {
  $('#testHeader').css("color","blue")
};

var undo = function() {
  $('#testHeader').css("color","purple")
};

if (annyang) {
	
	// commands are defined here - the below example listens for 'show', and executes the anonymous function, which will flash 'Welcome'
	var commands = {
		'green': turnGreen,
		'red': turnRed,
		'blue': turnBlue,
		'purple': turnPurple,
		'gray': turnGray,
		'yellow': turnYellow,
    'show me *tag': show_me,
    'remove (movies that are) appropriate (for children above the age of) :number': remove,
    'add *tag': add,
    'undo *tag': undo
	};

	annyang.debug(true);

	annyang.addCommands(commands);


	annyang.start();

}