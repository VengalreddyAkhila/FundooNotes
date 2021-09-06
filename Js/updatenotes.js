// popup Open method
// const Baseurl =  "http://fundoonotes.incubation.bridgelabz.com/api";

function popupOpen(i){
    let selectedItem = notesList[i];
    console.log(selectedItem)
    document.getElementById("popup").style.display="block";
    document.getElementById("overlay").style.display="block";
    var nHTML = '';
    nHTML += `                                                        
             <input type="text" placeholder="`+ selectedItem.title + " "+`" class="popup-title" id="popup-title" style="background-color:`+selectedItem.color+`">` + 
            `</input>` + 
            `<input type="text" placeholder="`+ selectedItem.description + `" class="popup-description" id="popup-description" style="background-color:`+selectedItem.color+`">` + 
            `</input>` +       
      `
                    
    `
    console.log(selectedItem.id);
    document.getElementById("popup-inner-content").innerHTML = nHTML; 
    document.getElementById("popup-close").id = selectedItem.id;
    document.getElementById("popup").style.backgroundColor = selectedItem.color;
  }
  
  //  Popup Close method
  
  function popupClose(){
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
  }
  
  //  color pallet
  
  function AddColor() {
    document.querySelectorAll(".color-palette div").forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelectorAll(".color-palette div").forEach((element) => {
        element.classList.remove("selected-color");
      });
      element.classList.add("selected-color");
      document.getElementById("item-color").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");
      document.getElementById("update-title").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");
      document.getElementById("update-note").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");
      document.getElementById("popup").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");
  
      
      let data = {
          "noteId": [i],
          "color" : document.getElementById("form").style.backgroundColor
      }
      if (header = true)
      makePromiseCall("POST", "Baseurl/notes/changesColorNotes", true, data)
        .then((res) => {
      console.log(res.data);
      }) 
      .catch((err) => {
        console.log(err);
      })
    });
    });
  }
    
  // archive in display note section
    
  function DisplayNoteArchive() {
    let data = {
    "noteId":[i], 
    "isArchived": true
    };
    if (header = true)
    makePromiseCall("POST", "Baseurl/notes/archiveNotes", true, data)
      .then((res) => {
        console.log((res).data);
    getNotes();
  })
  .catch()
  console.log("error");
}
  
  // popup update note section
  
  function PopupNotes() {
   
    let data = {
    "noteId": [i],
    "title" : document.getElementById("popup-title").value,
    "description" : document.getElementById("popup-description").value
    }
    console.log(data)
    if (header = true)
    makePromiseCall("POST", "Baseurl/notes/updateNotes", true, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch()
  console.log("error");
}

function trashNotes() {
    let data = {
      "noteId": [i],
      "isDeleted": true
    }
    if (header = true)
      makePromiseCall("POST", "Baseurl/notes/trashNotes", true, data)
        .then((res) => {
          console.log(res.data);
          getNotes();
        })
        .catch()
    console.log("error");
  }