var header = document.querySelector('header');
header.style.opacity = '1'; // Fade in header

var nameInput = document.getElementById('name');
var nameWarning = document.getElementById('name-warning');
var emailInput = document.getElementById('email');
var emailWarning = document.getElementById('email-warning');
var form = document.getElementById('contactForm');

nameInput.addEventListener('input', function (event) {
    var invalidCharacters = /[^a-zA-Z\s]/g;
    if (invalidCharacters.test(this.value)) {
        nameWarning.style.display = 'inline';
        this.value = this.value.replace(invalidCharacters, '');
    } else {
        nameWarning.style.display = 'none';
    }
});

emailInput.addEventListener('input', function (event) {
    validateEmail();
});

form.addEventListener('submit', function(event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission
    }
});

function validateEmail() {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailWarning.style.display = 'inline';
        return false;
    } else {
        emailWarning.style.display = 'none';
        return true;
    }
}