//************************** form Open ***************************
function FormOpen(i) {
  let selectedItem = notesList[i];
  console.log(selectedItem)
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  

  var nHTML = '';
  let displayEmail = [];
  let displayCollabrators = [];
  displayCollabrators = notesList[i].collaborators;
  if (displayCollabrators.length > 0) {
    for (let j = 0; j < displayCollabrators.length; j++) {
      displayEmail.push(displayCollabrators[j].email)
    }
  }
  let List = '';
  for (let j = 0; j < displayEmail.length; j++) {
    List += `<div style="list-style-type:none" class="display-email" id="diplay-update-email">` + displayEmail[j].charAt(0) + `</div>`
  }
  nHTML += `                                                           
           <input type="text" value="`+ selectedItem.title + " " + `" class="popup-title" id="popup-title" style="background-color:` + selectedItem.color + `">` +
    `</input>` +
    `<input type="text" value="` + selectedItem.description + `" class="popup-description" id="popup-description" style="background-color:` + selectedItem.color + `">` +
    `</input>` +
    `<li style="list-style-type:none;display:flex;flex-direction:row;">` + List +
    `</li>` + `
  <button class="reaminder-btn" style="background-color:`+ selectedItem.color + ` ;border:none; " >     
 <span class="material-icons-outlined">
  add_alert
</span>
</button>
<button id="Button1" class="collaborator-button"  style="background: transparent;border: none;"  value="Click" onclick="openupdatecollab('` + selectedItem.id + `') ">
</span>                             
<span class="material-icons-outlined">
  person_add_alt
</span>
</button>
</span> 
<div class="btn-group dropup" id="color-palette-dropdown" >
  <button type="button" id="display-color" style="background: transparent;border: none;" onclick="displayColor('`+ selectedItem.id + `')" class="btn btn-secondary-color dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <span class="material-icons-outlined" style="padding-top:18px">
      palette
  </span>
  </button>
  <div class="color-palette dropdown-menu" id ="color-palette">
      <div class="bg-white circled"></div>
      <div class="bg-red"></div>
      <div class="bg-orange"></div>
      <div class="bg-yellow"></div>
      <div class="bg-green"></div>
      <div class="bg-turquoise"></div>
      <div class="bg-blue"></div>
      <div class="bg-dark-blue"></div>
      <div class="bg-purple"></div>
      <div class="bg-pink"></div>
      <div class="bg-brown"></div>
      <div class="bg-grey"></div>
  </div>
</div>
<span class="material-icons-outlined">
  photo
</span>
<button  class="archive-btn" id="archive-btn" onclick="displayArchive('`+ selectedItem.id + `')" style="background: transparent;border: none;">
<span class="material-icons-outlined">
  archive
</span>  
</button>
<button class="trash-btn" id= "trash-btn" onclick="displayTrash('`+ selectedItem.id + `')" style="background: transparent;border: none;">
<span class="material-icons-outlined">
  delete
</span> 
</button>
<span class="popup-close-container" id="popup-close-container" >
  <button class="popup-close" id="popup-close" style="background: transparent;border: none;" onclick="Update_Notes('`+ selectedItem.id + `')" >close
  </button>
</span>
</span>`
  console.log(selectedItem.id);
  document.getElementById("popup-inner-content").innerHTML = nHTML;
  document.getElementById("popup").style.backgroundColor = selectedItem.color;
}

//************************form Close **************************

function FormClose() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// archive in display note section

function ArchiveNote(id) {
  let data = {
    "noteIdList": [id],
    "isArchived": true
  };

  makePromiseCall("POST", `${Baseurl}/notes/archiveNotes`, true, data, true)
    .then((res) => {
      console.log((res).data);
      GetNotes();
    })
    .catch((err) => {
      console.log(err);
    })
}
//*************** update note section**************

function Update_Notes(i) {

  let data = {

    "title": document.getElementById("popup-title").value,
    "description": document.getElementById("popup-description").value,
    "noteId": i
  }
  console.log(data)
  makePromiseCall("POST", `${Baseurl}/notes/updateNotes`, true, data, true)
    .then((res) => {
      console.log(res.data);
      FormClose();
      GetNotes();

    })
    .catch((err) => {
      console.log(err);
    })

}

//***************TrashNote in display note section********************** */

function trashNote(id) {

  let data = {
    "noteIdList": [id],
    "isDeleted": true
  }
  makePromiseCall("POST", `${Baseurl}/notes/trashNotes`, true, data, true)
    .then((res) => {
      console.log(res.data);
      GetNotes();
    })
    .catch((err) => {
      console.log(err);
    })
}

/****************Archive in Update section*************** */

function displayArchive(id) {
  let data = {
    "isArchived": true,
    "noteIdList": [id]
  };
  makePromiseCall("POST", `${Baseurl}/notes/archiveNotes`, true, data, true)
    .then((res) => {
      console.log((res).data);

    })
    .catch((err) => {
      console.log(err);
    })
}

/******************trash in Update section*************************************** */

function displayTrash(id) {

  let data = {

    "isDeleted": true,
    "noteIdList": [id]
  }
  makePromiseCall("POST", `${Baseurl}/notes/trashNotes`, true, data, true)
    .then((res) => {
      console.log(res.data);

    })
    .catch((err) => {
      console.log(err);
    })
}

/***********************color in update section*********************************88  */

function displayColor(id) {
  console.log(id);
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

      document.getElementById("color-palette-dropdown").style.backgroundColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");
      document.getElementById("btn-colors").style.backgroundColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");
      document.getElementById("popup").style.backgroundColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");

      document.getElementById("update-title").style.backgroundColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");

      document.getElementById("update-note").style.backgroundColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");

      let changeColor = document.getElementById("popup").style.backgroundColor;
      let data = {
        "color": '#' + changeColor.slice(4, -1).split(',').map(x => (+x).toString(16).padStart(2, 0)).join(''),
        "noteIdList": [id]
      }
      makePromiseCall("POST", `${Baseurl}/notes/changesColorNotes`, true, data, true)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    });
  });

}