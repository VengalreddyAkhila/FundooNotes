// ************************* ADD----NOTE ***************

const Baseurl = "http://fundoonotes.incubation.bridgelabz.com/api";
var colorData = document.getElementById("note-section").style.backgroundColor;
var ArchiveData = "";

function addNote() {

  let data = {
    "title": document.getElementById("toggle").value,
    "description": document.getElementById("user-note").value,
    
  } 
  if(ArchiveData){
    data["isArchived"]= ArchiveData;
  }
  if(colorData){
    data["color"] = "";
  }
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

function addColor() {
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
   



    var changecolor = document.getElementById("notes-color").style.backgroundColor;
    let data = {
      "noteId": [id]
    }
      if(changecolor){
        data["color"] = changecolor;
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