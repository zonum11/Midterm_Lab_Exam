var studentNumberPattern;
var emailPattern;

var registrationForm;
var studentName;
var studentNumber;
var email;
var workshop;
var terms;
var nameError;
var studentNumberError;
var emailError;
var workshopError;
var termsError;
var registerBtn;
var clearBtn;
var registrationResult;
var summaryName;
var summaryStudentNumber;
var summaryEmail;
var summaryWorkshop;
const form = document.getElementById("eventForm");
const message = document.getElementById("message");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const selectedEvent = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const seats = Number(document.getElementById("seats").value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(09|\+639)\d{9}$/;

    if (name === "" || email === "" || phone === "" ||
        selectedEvent === "" || date === "" || seats <= 0) {

        message.textContent = "Please complete all fields.";
        result.textContent = "";
        return;
    }

    if (!emailRegex.test(email)) {
        message.textContent = "Enter a valid email address.";
        result.textContent = "";
        return;
    }

    if (!phoneRegex.test(phone)) {
        message.textContent = "Enter a valid Philippine phone number.";
        result.textContent = "";
        return;
    }

    if (seats > 10) {
        message.textContent = "Maximum of 10 seats only.";
        result.textContent = "";
        return;
    }

    message.textContent = "Registration successful!";

    result.textContent =
        "Name: " + name +
        " | Email: " + email +
        " | Phone: " + phone +
        " | Event: " + selectedEvent +
        " | Date: " + date +
        " | Seats: " + seats;
});