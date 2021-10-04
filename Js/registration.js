       
    // firstname validation

    function validatefirstName() {
        const name = document.getElementById('first_name');       
        const nameError = document.getElementById('firstname_error');
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');  
    
        if(nameRegex.test(name.value)) 
              nameError.textContent = "";
        else nameError.textContent = "Enter your first name";        
    }
    //lastname validation

    function validatelastName() {
        var lastname = document.getElementById('last_name'); 
        var lastnameError = document.getElementById('lastname_error');
        let lastnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');  
    
        if(lastnameRegex.test(lastname.value)) 
              lastnameError.textContent = "";
        else lastnameError.textContent = "Enter your last name";        
    }

  // phone number validation

function validateconfirmpwd() {
    const phone = document.getElementById('confirm_password');
    const phnError = document.getElementById('confirmpwd_error');
    let numRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
    if (numRegex.test(phone.value))
        phnError.textContent = "";
    else phnError.textContent = "Enter your confirm password";
}

//password validation

    function validatePwd() {
        var pwd = document.getElementById('password');
        var pwdError = document.getElementById('password_error');
       let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
        if(passwordRegex.test(pwd.value)) 
              pwdError.textContent = "";
        else 
        pwdError.textContent = "Enter your password";        
    }


    // Email validation

    function validateEmail() {
        var email = document.getElementById('email');
        var emailError = document.getElementById('email_error');
        let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]$");
    
        if(emailRegex.test(email.value)) 
              emailError.textContent = "";
        else emailError.textContent = "Enter your email";        
    }
    
function next () {
    validatefirstName();
    validatelastName();
    validatePwd();
    validateconfirmpwd();
    validateEmail();
       
         let data={
             "firstName" : document.getElementById("first_name").value,
             "lastName" : document.getElementById("last_name").value,
             "email" : document.getElementById("email").value + "@gmail.com",
             "service" : "advance",
             "password" : document.getElementById("password").value            
         }     
         makePromiseCall("POST","http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",true,data)
         .then((Response) => {
             console.log(Response);
             window.location.href="../Pages/loginpage.html"; 
             
         })
         .catch()
         console.log("error");
     }
        
       
         
        