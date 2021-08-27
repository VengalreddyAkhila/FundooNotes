
    window.addEventListener('DOMContentLoaded', (event) => {
        
        // name validation
        var name = document.querySelector("#first_name");
        var nameError = document.querySelector("#firstname_text");
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        name.addEventListener("input", function () {
            if (nameRegex.test(name.value)) {
                nameError.textContent = "";
    
            }
            if (!nameRegex.test(name.value)) {
                nameError.textContent = "invalid name";
    
            }
        });        
        var lastname = document.querySelector("#last_name");
        var lastnameError = document.querySelector("#lastname_text");
        let lastnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        lastname.addEventListener("input", function () {
            if (lastnameRegex.test(lastname.value)) {
                lastnameError.textContent = "";
    
            }
            if (!lastnameRegex.test(lastname.value)) {
                lastnameError.textContent = "invalid name";
    
            }
        });

        // email validation
        var email = document.querySelector("#email");
        var emailError = document.querySelector("#email_error");
        email.addEventListener("input", function () {
            let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]$");
            if (emailRegex.test(email.value)) {
                emailError.textContent = "";
    
            } else {
                emailError.textContent = "InvalidEmail";
    
            }
        });

        // password validation
        var pwd = document.querySelector("#password");
        var pwdError = document.querySelector("#password_error");
        pwd.addEventListener("input", function () {
            let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
            if (passwordRegex.test(pwd.value)) {
                pwdError.textContent = "";
            }
            if (pwd.value.length < 8) {
                pwdError.textContent = "Password Invalid";
            }
            if (!passwordRegex.test(pwd.value)) {
                pwdError.textContent = "Password Invalid";
            }
        });
        var confirmpwd = document.querySelector("#password");
        var confirmpwdError = document.querySelector("#confirmpwd_error");
        confirmpwd.addEventListener("input", function () {
            let confirmpasswordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
            if (confirmpasswordRegex.test(confirmpwd.value)) {
                confirmpwdError.textContent = "";
            }
            if (confirmpwd.value.length < 8) {
                confirmpwdError.textContent = "Password Invalid";
            }
            if (!confirmpasswordRegex.test(confirmpwd.value)) {
                confirmpwdError.textContent = "Password Invalid";
            }
        });
    });