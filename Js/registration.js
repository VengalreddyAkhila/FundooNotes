

window.addEventListener('DOMContentLoaded',(event) => {         
        // name validation
        const name = document.getElementById("first_name");       
        const nameError = document.getElementById("firstname_error");
        const form = document.getElementById("form");
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        form.addEventListener("submit", (e) => {
            let messages = []
            if(name.value === '' || name.value == null){
                messages.push('firstname is required');
            }
            if(messages.length > 0){
                e.preventDefault()
                nameError.innerText = messages.join(',');
            }
        });
            name.addEventListener("input", function () {
            if (nameRegex.test(name.value)) {
                nameError.textContent = "";    
    
            }
            if (!nameRegex.test(name.value)) {
                nameError.textContent = "enter firstname";                 
            }
        });          
        var lastname = document.querySelector("#last_name");
        var lastnameError = document.querySelector("#lastname_error");
        const form1 = document.getElementById("form");
        let lastnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        form1.addEventListener("submit", (e) => {
            let messages = []
            if(lastname.value === '' || lastname.value == null){
                messages.push('lastname is required');
            }
            if(messages.length > 0){
                e.preventDefault()
                lastnameError.innerText = messages.join(',');
            }
        });
        lastname.addEventListener("input", function () {

            if (lastnameRegex.test(lastname.value)) {
                lastnameError.textContent = "";
    
            }
            if (!lastnameRegex.test(lastname.value)) {
                lastnameError.textContent = "invalid lastname";
    
            }
        });      

        // email validation
        var email = document.querySelector("#email");
        var emailError = document.querySelector("#email_error");
        const form2 = document.getElementById("form");
        form2.addEventListener("submit", (e) => {
            let messages = []
            if(email.value === '' || email.value == null){
                messages.push('email is required');
            }
            if(messages.length > 0){
                e.preventDefault()
                emailError.innerText = messages.join(',');
            }
        });
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
        const form3 = document.getElementById("form");
        form3.addEventListener("submit", (e) => {
            let messages = []
            if(pwd.value === '' || pwd.value == null){
                messages.push('password is required');
            }
            if(messages.length > 0){
                e.preventDefault()
                pwdError.innerText = messages.join(',');
            }
        });
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
        var confirmpwd = document.querySelector("#confirm_password");
        var confirmpwdError = document.querySelector("#confirmpwd_error");
        const form4 = document.getElementById("form");
        form4.addEventListener("submit", (e) => {
            let messages = []
            if(confirmpwd.value === '' || confirmpwd.value == null){
                messages.push('password is required');
            }
            if(messages.length > 0){
                e.preventDefault()
                confirmpwdError.innerText = messages.join(',');
            }
        });
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

     function next () {
         let data={
             "firstname" : document.getElementById("first_name").value,
             "lastname" : document.getElementById("last_name").value,
             "email" : document.getElementById("email").value + "@gmail.com",
             "service" : "advance",
             "password" : document.getElementById("password").value,
             "confirmpassword" : document.getElementById("confirm_password").value
         }
         makePromiseCall("POST","http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",true,data)
         .then((Response) => {
             console.log(Response);
         })
         .catch()
         console.log("error");
     }
        
       
         
        