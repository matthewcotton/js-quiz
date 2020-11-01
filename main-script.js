// Function for starting the quiz
function startQuiz() {
    hide("intro");
    show("q1");
}

// Function for going to the next question
function nextQuestion(questionNum) {
    console.log("q" + questionNum);
    hide("q" + questionNum);
    questionNum++;
    show("q" + questionNum);
}

// Function to show results
function results() {
    show("results");
    // Calulate results

    // Add results text
    document.getElementById("result-text").innerHTML = "Hey you won!";
}

// Function for hiding the element with provided id
function hide(id) {
    document.getElementById(id).style.display = "none";
    console.log(id);
}

// function for showing the element with provided id
function show(id) {
    document.getElementById(id).style.display = "block";
    console.log(id);
}

// Gets radio button values to calculate the results
function getRadioBtnValue(form, name) {

}

