// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Select the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Step 4: Check if the user selected an option
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545"; // red color
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare user's answer with the correct one
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green color
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red color
    }
}

// Step 6: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
