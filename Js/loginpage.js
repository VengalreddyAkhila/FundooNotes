window.addEventListener('DOMContentLoaded',(event) => {  
//email validation
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
    let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]+@[A-Za-z]+[.][A-Za-z]{2,3}(.[a-zA-Z]{2,3}){0,1}$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";

    } else {
        emailError.textContent = "InvalidEmail";

    }
});

// password validation
var pwd = document.querySelector("#password");
var textError = document.querySelector("#password_error");
const form3 = document.getElementById("form");
form3.addEventListener("submit", (e) => {
    let messages = []
    if(pwd.value === '' || pwd.value == null){
        messages.push('password is required');
    }
    if(messages.length > 0){
        e.preventDefault()
        textError.innerText = messages.join(',');
    }
});
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

const Baseurl =  "http://fundoonotes.incubation.bridgelabz.com/api";
function next () { 
 let data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
    makePromiseCall("POST",`${Baseurl}/user/login`,true,data)
    .then((Response) => {
        console.log(JSON.parse(Response).id);
        window.location.href="../Pages/googlekeep.html";
        localStorage.setItem("token",JSON.parse(Response).id);
        localStorage.getItem('firstname',JSON.parse(Response).id);
        localStorage.getItem('lastname',JSON.parse(Response).id);
    })
    .catch()
    console.log("error");
}