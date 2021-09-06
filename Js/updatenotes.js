// display note section popup Open method

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
  
  // display note section Popup Close method
  
  function popupClose(){
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
  }
  
  // display note section color pallet
  
  function addColorInDisplay(id) {
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
  
  
      let rgb = document.getElementById("item-color").style.backgroundColor;
      let data = {
          "noteIdList": [id]};
      data["color"]='#' + rgb.slice(4,-1).split(',').map(x => (+x).toString(16).padStart(2,0)).join('');
      if (header = true)
      makePromiseCall("POST", "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", true, data)
        .then((res) => {
      console.log(res.data);
      }) 
      .catch((err) => {
        console.log(err);
      })
      getNotes();
    });
    });
  }
    
  // archive in display note section
    
  function isDisplaynoteArchive(id) {
    let data = {
    noteIdList:[id], 
    isArchived: true
    };
    if (header = true)
    makePromiseCall("POST", "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", true, data)
      .then((res) => {
        console.log((res).data);
    getNotes();
  })
  .catch()
  console.log("error");
}
  
  // popup update note section
  
  function addPopupNotes(i) {
   
    let data = {
    "noteId": i,
    "title" : document.getElementById("popup-title").value,
    "description" : document.getElementById("popup-description").value
    }
    console.log(data)
    if (header = true)
    makePromiseCall("POST", "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes", true, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch()
  console.log("error");
}




function trashNotes() {
    let data = {
      "noteId": i,
      "isDeleted": true
    }
    if (header = true)
      makePromiseCall("POST", "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", true, data)
        .then((res) => {
          console.log(res.data);
          getNotes();
        })
        .catch()
    console.log("error");
  }