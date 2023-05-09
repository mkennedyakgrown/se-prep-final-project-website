function buttonClick() {
    const scheduleButton = document.getElementById("signupButton");
    if (["", "none"].includes(scheduleButton.style.display)) {
        scheduleButton.style.display = "block";
    }
}

function hideForm() {
    // debugger;
    const scheduleButton = document.getElementById("signupButton");
    scheduleButton.style.display = "none";
}