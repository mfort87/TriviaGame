var questions = [{
    question: "In what country are Red Pandas Found?",
    answersChoices: ["Nepal", "Belize", "Japan", "Lebanon"],
    answer: 0
},{
    question: "Which large cat enjoys swimming?",
    answerChoices: ["Cheetah", "Jaguar", "Panther", "Lion"],
    answer: 1
},{
    question: "What is the average weight of a newborn elephant?",
    answerChoices:["350lbs", "150lbs", "200lbs", "275lbs"],
    answer: 2
},{
    question: "What is a common nickname for the Jaguarundi?",
    answerChoices:["Lanky cat", "Cat-dog", "Otter-cat", "Slimmy Jimmy cat"],
    answer: 2
},{
    question: "Where do horned lizards shoot blood from when threatened?",
    answerChoices: ["Mouth", "Hands", "Eyes", "Butt"],
    answer: 2
},{
    question: "What do locals commonly call Komodo Dragons?",
    answerChoices:["Land Dino", "Land Crocodile", "Land Beast", "Land Lubber"],
    answer: 1
},{
    question: "What is the longest venomous snake in the world?",
    answerChoices:["Coral Snake", "Kaboda Viper", "Pit Viper", "King Cobra"],
    answer: 3
},{
    question: "How many venomous spines do Lionfish have?",
    answerchoices:["34", "18", "22", "4"],
    answer: 1
},{
    question: "How fast can an ostrich run?",
    answerChoices:["23 mph", "59 mph", "43 mph", "49 mph"],
    answer: 2
},{
    question: "What are groups of Alligators called?",
    answerChoices:["Congregations", "Sewing Circles", "Pride", "Green Gang"],
    answer: 0
}];

var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;

var messages = {
	correct: "Correcto!",
	incorrect: "No, sorry, you're wrong. So wrong.",
	endTime: "Time is Up, Slow Poke",
	finished: "Let's check the Scoreboard, bro!"
}

$("#startBtn").on("click", function(){
    $(this).hide();
    newGame();
});

$("#startOverBtn").on("click", function(){
    $(this).hide();
    newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	answered = true;
	
	//trying to set up the new question here
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerChoices[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}


///trying to figure out how to set up the answer pages and do countdown properly
//I think I'd have to set up an If Else loop for the answers to display the right messages so it'd look something like the following. Having trouble setting up display.
//Also wanted to input gif's and pictures for correct answers but am having trouble with that too. This was a hard one.
 function answerPage(){
    $('#currentQuestion').empty();
	$('.thisChoice').empty(); 
	$('.question').empty();
 }





//I think this would be right
function score(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();


	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}