function submitFeedback(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];

    feedbackList.push({ name, message });
    localStorage.setItem("feedback", JSON.stringify(feedbackList));

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    displayFeedback();
}

function displayFeedback() {
    let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
    let feedbackContainer = document.getElementById("feedback-list");
    feedbackContainer.innerHTML = "";

    feedbackList.forEach(feedback => {
        feedbackContainer.innerHTML += `<li><strong>${feedback.name}:</strong> ${feedback.message}</li>`;
    });
}

document.addEventListener("DOMContentLoaded", displayFeedback);
