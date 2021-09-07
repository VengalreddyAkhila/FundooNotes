
let flag = true;
function openDrawer() {
    if (flag) {
        flag = false;
        $(".drawer").css("width", "300px");
        $(".myDrawer").css("width", "300px");
        $(".drawer").css("border-radius", "0px 25px 25px 0px");
        $(".drawer-span").css("display", "flex");
        $(".drawer-span").css("margin-left", "40px");
        $(".add-note").css("left", "35%");
        $("#card").css("left", "25%");
    }
    else {
        flag = true;
        $(".drawer").css("width", "48px");
        $(".drawer").css("border-radius", "50%");
        $(".myDrawer").css("width", "65px");
        $(".drawer-span").css("display", "none");
        $(".add-note").css("left", "22%");
        $("#card").css("left", "20%");
    }
}

var toggle = document.getElementById("toggle");
var content = document.getElementById("content");
var navState=0;

toggle.addEventListener("click", function() {
    content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});
function openNav() {
    console.log(document.getElementById("mySidenav").style.width)
      document.getElementById("mySidenav").style.width =document.getElementById("mySidenav").style.width==="250px"?"0px":"250px";
      document.getElementById("main").style.marginLeft =document.getElementById("main").style.marginLeft==="250px"?"0px":"250px";
  
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";

    }



