function Profile() {
   document.getElementById("userprofile").style.display = "block";
   document.getElementById("name").innerHTML = "AkhilaReddy";
   document.getElementById("mail").innerHTML = "akhila.it1801@gmail.com";
}
function logOut() {
    document.getElementById("userprofile").style.display = "none";
    localStorage.clear();
    localStorage.removeItem("token",JSON.parse(Response).id);
    localStorage.removeItem('firstname',JSON.parse(Response).id);
    localStorage.removeItem('lastname',JSON.parse(Response).id);
    window.location.href="http://localhost:5500/pages/loginpage.html"; 
}
let flag = true;
function openDrawer() {
    if (flag) {
        flag = false;
        $(".drawer").css("width", "300px");
        $(".myDrawer").css("width", "300px");
        $(".drawer").css("border-radius", "0px 25px 25px 0px");
        $(".drawer-span").css("display", "flex");
        $(".drawer-span").css("margin-left", "40px");
        $(".main-section").css("left", "45%");
        $(".item-list").css("left", "15%");
    }
    else {
        flag = true;
        $(".drawer").css("width", "48px");
        $(".drawer").css("border-radius", "50%");
        $(".myDrawer").css("width", "65px");
        $(".drawer-span").css("display", "none");
        $(".main-section").css("left", "22%");
        $(".item-list").css("left", "10%");
    }
}

var toggle = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function() {
    content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});


  
