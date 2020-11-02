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


// Function to show by class
function showClass(cl) {
    // Get list of all elelemts with this class
    let elements = document.getElementsByClassName(cl);
    // Loop through all elements to show them
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}


// Function to hide by class
function hideClass(cl) {
    // Get list of all elelemts with this class
    let elements = document.getElementsByClassName(cl);
    // Loop through all elements to show them
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
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


// Function to show solid element border with specified color and radius
function styleBorder(id, color, radius) {
    id.style.borderStyle = "solid";
    id.style.borderColor = color;
    id.style.borderRadius = radius;
}

function disableRadioBtns(name) {
    // Get list of radio buttons for variable "name"
    let radioBtns = document.getElementsByName(name);

    // Disable all radio buttons in this element 
    for (let i = 0; i < radioBtns.length; i++) {
        radioBtns[i].disabled = "true";
    }
}


// Function to show results
function showResults(numOfQs) {

    let showHideButton = document.getElementById("show-results");

    // Check that results are not already being shown
    if (showHideButton.value === "Show Results") {

        // Change value of button
        showHideButton.value = "Hide Results";

        // Get list of all answers
        for (let i = 1; i <= numOfQs; i++) {
            let answers = document.getElementsByName("q" + i);

            for (let l = 0; l < answers.length; l++) {
                // Highligh correct answers with green border
                if (answers[l].checked && answers[l].value === "1") {
                    let parent = answers[l].parentElement;
                    styleBorder(parent, "#28a745", "0.25rem");
                }
                // Highligh incorrect answers with red border
                else if (answers[l].checked) {
                    let parent = answers[l].parentElement;
                    styleBorder(parent, "#c82333", "0.25rem");
                }
                // Highligh correct answer with green border
                else if (answers[l].value === "1") {
                    let parent = answers[l].parentElement;
                    styleBorder(parent, "#28a745", "0.25rem");
                }
            }
        }

        // Disable all radio buttons so that answers cannot be changed. 
        for (let i = 1; i <= numOfQs; i++) {
            disableRadioBtns("q" + i);
            console.log("q" + i);
        }

        // Show all questions
        showClass("question");

        // Hide all Next question and result buttons
        hideClass("nextQ");
        hide("result-btn");
    }

    // When results are already being shown
    else {

        // Change value of button
        showHideButton.value = "Show Results";

        // Hide all questions
        hideClass("question");
    }

}