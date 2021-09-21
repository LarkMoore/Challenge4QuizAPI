function timer(){
    var sec = 60;
    var timer=setInterval (function((){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec <0) {
            clearInterval(timer);
        alert("Time is up!")
        }
    } 1000);
}
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
function showQuestions(questions, quizContainer){
    var output = [];
	var answers;
    for(var i=0; i<questions.length; i++){
        answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            + '</label>'
        );
    }
function showResults(questions, quizContainer, resultsContainer)
	}

    submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}    

showQuestions(questions, quizContainer);
var myQuestions = [
	{
		question: "1. Where do we put the JavaScript in HTML?",
		answers: {
			a: '<script>',
			b: '<body>',
			c: '<header>'
		},
		correctAnswer: 'a'
	},
	{
		question: "2. How do you create a function in JavaScript??",
		answers: {
			a: 'function = myFunction ()',
			b: 'function myFuncton()',
			c: 'function:myFunction()'
		},
		correctAnswer: 'b'
        {
		question: "3. Which is the correct formatting for a JavaScript array?",
		answers: {
			a: 'var numbers =['1', '2', '3', '4']'
			b: 'var numbers =("1", "2", "3", "4)',
			c: 'var numbers =["1", "2", "3", "4"]',
		},
		correctAnswer: 'c'
	}
];
