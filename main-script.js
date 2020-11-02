// Function for starting the quiz
function startQuiz() {
    hide("intro");
    show("q1");
}


// Function for going to the next question
function nextQuestion(questionNum) {
    hide("q" + questionNum);
    questionNum++;
    show("q" + questionNum);
}


// Function to show results
function results(numOfQs) {
    //Hide last question
    hide("q" + numOfQs);

    let score = 0; // Variable to count the score

    // Calulate results
    for (let i = 1; i < numOfQs + 1; i++) {
        let questionName = "q" + i;
        score += Number(getSelectedRadioValue(questionName));
    }

    // Add and show results text
    document.getElementById("result-text").innerHTML = "You scored " + score + " out of 10";
    show("results");
}


// Function for hiding the element with provided id
function hide(id) {
    document.getElementById(id).style.display = "none";
}

// function for showing the element with provided id
function show(id) {
    document.getElementById(id).style.display = "block";
}


// Gets radio button values to calculate the results
function getSelectedRadioValue(name) {
    // Get list of radio buttons for variable "name"
    let radioBtns = document.getElementsByName(name);
    
    // Get and return the value of the checked radio button 
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            return radioBtns[i].value;
        }
    }
    // If no radio button is checked reutn zero
    return 0;
}

