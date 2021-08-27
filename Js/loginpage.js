//email validation
var email = document.querySelector("#email");
var emailError = document.querySelector("#email_error");
email.addEventListener("input", function () {
    let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]+@[A-Za-z]+[.][A-Za-z]{2,3}(.[a-zA-Z]{2,3}){0,1}$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";

    } else {
        emailError.textContent = "InvalidEmail";

    }
});

function validateEmptyEmail() { 
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
 
    if(email.value == "") 
    emailError.textContent = "enter a email address";    
};
// password validation
var pwd = document.querySelector("#password");
var textError = document.querySelector("#password_error");
pwd.addEventListener("input", function () {
    let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
    if (passwordRegex.test(pwd.value)) {
        textError.textContent = "";
    }
    if (pwd.value.length < 8) {
        textError.textContent = "Password Invalid";
    }
    if (!passwordRegex.test(pwd.value)) {
        textError.textContent = "Password Invalid";
    }
});