// ************************* ADD----NOTE ***************

const Baseurl = "http://fundoonotes.incubation.bridgelabz.com/api";
var ArchiveData = "";

function addNote() {

  let colorData = document.getElementById("note-section").style.backgroundColor;
  console.log(colorData);
  let data = {
    "title": document.getElementById("toggle").value,
    "description": document.getElementById("user-note").value,  
    "color"   :  '#' + colorData .slice(4,-1).split(',').map(x => (+x).toString(16).padStart(2,0)).join('')
  } 
  if(ArchiveData){
    data["isArchived"]= ArchiveData;
  }
  // if( colorData != ''){   
  //   data["color"] = Number(colorData).toString(16); 
  // }
 
    makePromiseCall("POST", `${Baseurl}/notes/addNotes`, true, data,true)
      .then((res) => {
        console.log(res.data);
        GetNotes();
      })
      .catch((err) => {
  console.log(err);
      })
};

//*********Archive ************* */

function addArchive() {
  ArchiveData = true;
}

//**********change color*********** */

function addColor(id) {
  
  document.querySelectorAll(".color-palette div").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".color-palette div").forEach((element) => {
      element.classList.remove("selected-color");
    });
    element.classList.add("selected-color");
    document.getElementById("notes-color").style.backgroundColor = window
    .getComputedStyle(element, null)
    .getPropertyValue("background-color");
    document.getElementById("notes-text").style.backgroundColor = window
    .getComputedStyle(element, null)
    .getPropertyValue("background-color");
    document.getElementById("display-buttons").style.backgroundColor = window
    .getComputedStyle(element, null)
    .getPropertyValue("background-color"); 
    let changeColor = document.getElementById("notes-color").style.backgroundColor;
    let data = {
      "noteIdList": [id],
      "color"  : '#' + changeColor .slice(4,-1).split(',').map(x => (+x).toString(16).padStart(2,0)).join('')
    }         
  makePromiseCall("POST", `${Baseurl}/notes/changesColorNotes`, true, data,true)
    .then((res) => {
  console.log(res.data);
  }) 
  .catch((err) => {
    console.log(err);
  })
  GetNotes();
  });
});
}