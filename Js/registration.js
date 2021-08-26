window.addEventListener('DOMContentLoaded', (event) => {
    var name = document.querySelector("#first_name");
    // var name = document.querySelector("#last_name");
    var textError = document.querySelector("#name_text");
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    name.addEventListener("input", function () {
        if (nameRegex.test(name.value)) {
            textError.textContent = "";

        }
        if (!nameRegex.test(name.value)) {
            textError.textContent = "invalid name";

        }
    });
    var email = document.querySelector("#email");
    var textError = document.querySelector(".text-error");
    email.addEventListener("input", function () {
        let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]$");
        if (emailRegex.test(email.value)) {
            textError.textContent = "";

        } else {
            textError.textContent = "InvalidEmail";

        }
    });
    var pwd = document.querySelector("#password");
    var textError = document.querySelector(".text-error");
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
});