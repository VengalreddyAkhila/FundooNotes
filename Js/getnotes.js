window.addEventListener('DOMContentLoaded', (event) => {
  GetNotes();
  //notesContent();

});
let notesList = [];
function GetNotes() {

  makePromiseCall("GET", `${Baseurl}/notes/getNotesList`, true, {}, true)
    .then(res => {
      console.log(JSON.parse(res).data.data);
      notesList = JSON.parse(res).data.data;
      notesContent(notesList);    
    
    })
    .catch((err) => {
      console.log(err);
    })

}

//********************NavbarArchive**************************** */

function NavbarArchive() {
  makePromiseCall("GET", `${Baseurl}/notes/getArchiveNotesList`, true, {}, true)
    .then(res => {
      console.log(JSON.parse(res).data.data);
      notesList = JSON.parse(res).data.data;
      let dataObj = notesList;
      let archNote = dataObj.filter(
        (i) => (i.isArchived) === true
      );
      notesContent(archNote);
    })
    .catch((err) => {
      console.log(err);
    })
}

//********************NavbarTrash*************************** */

function NavbarTrash() {
  makePromiseCall("GET", `${Baseurl}/notes/getTrashNotesList`, true, {}, true)
    .then(res => {
      console.log(JSON.parse(res).data.data);
      notesList = JSON.parse(res).data.data;
      notesContent(notesList);

    })
    .catch((err) => {
      console.log(err);
    })
    GetNotes();
}


function notesContent(notesList) {
  var nHTML = '';
  for (let i = 0; i < notesList.length; i++) {
    if (notesList[i].isDeleted != true && notesList[i].isArchived != true) {
      nHTML += `<div class="notes" id="notes-text">
                        <div class="items" id="notes-color" style="background-color:`+ notesList[i].color + `">                                       
                          <div class="s3-btn" name="Open" style="background-color:`+ notesList[i].color + `" id=` + i + ` onclick="FormOpen(id);">
                            <li id="update-title" style="list-style-type:none">` + notesList[i].title + " " + `</li>` +
        `<li id="update-note" style="list-style-type:none">` + notesList[i].description +
        `</li>` +
       
        `<li style="list-style-type:none">` +
        `</li>` +
   
        `</div>  
                 
                   <div class="sub-buttons" id="display-buttons" >
                            <span class="material-icons-outlined">
                              add_alert
                            </span>                             
                            <span class="material-icons-outlined">
                              person_add_alt
                            </span>                             
                            <div class="btn-group dropup" id="color-palette-dropdown">
                              <button type="button" id=`+ notesList[i].id + ` style="background-color:` + notesList[i].color + `" onclick="addColor(id)" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="material-icons-outlined">
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
                              <button class="archive-button" id=`+ notesList[i].id + ` style="background-color:` + notesList[i].color + `" onclick="ArchiveNote(id)">
                              <span class="material-icons-outlined">
                                archive
                              </span>  
                              </button>

                                <button id=`+ notesList[i].id + ` style="background-color:` + notesList[i].color + `" type="button" class="delete-buttton" onclick="trashNote(id)">
                                <span class="material-icons-outlined">
                                more_vert
                                </span>

                              </button>
                              </div>
                              </div> 
                         </div>    

                            `;
    }
  }
  document.getElementById("item-list").innerHTML = nHTML;
}