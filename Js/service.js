  
const baseurl = "http://fundoonotes.incubation.bridgelabz.com/api";

function getService(url, headerconfig) {   

    console.log(url, headerconfig);
    return new Promise (function(resolve, reject) {
      var resolved = axios.get(baseurl + url, headerconfig);
      resolve(resolved);
    })
    
}

function postService(url, data, headerconfig) {   

  console.log(url,data, headerconfig);
  return new Promise (function(resolve, reject) {
    var resolved = axios.post(baseurl + url, data, headerconfig);
    resolve(resolved);
  })

}

  // ******************************** dashboard.js*********************************88

// add note section toggling

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


