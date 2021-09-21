function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
function showQuestions(questions, quizContainer){
    
function showResults(questions, quizContainer, resultsContainer)
	}

    submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}    showQuestions(questions, quizContainer);
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
			a: 'var numbers =["1", "2", "3", "4"]',
			b: 'var numbers =("1", "2", "3", "4)',
			c: 'var numbers =['1', '2', '3', '4']'
		},
		correctAnswer: 'b'
	}
];

var countDown= new time ("60seconds").getTime();
        var x = setInterval(function() {

            let btns = document.querySelectorAll("[data-number]");
            //console.log(btns);
            for (i of btns) {
              i.addEventListener('click', function() {
                // console.log(this.innerText);
                // console.log(quizArray[currentQuestionIndex].correct);
               checkAnswer(this.innerText);