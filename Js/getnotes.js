window.addEventListener('DOMContentLoaded', (event) => {
  GetNotes();
});
let notesList = [];
function GetNotes() {
  document.getElementById("main-section").style.display = "block";
  makePromiseCall("GET", `${Baseurl}/notes/getNotesList`, true, {}, true)
    .then(res => {
      console.log(JSON.parse(res).data.data);
      var nHTML = '';
      notesList = JSON.parse(res).data.data;
      for (let i = 0; i < notesList.length; i++) {
        if (notesList[i].isDeleted == false && notesList[i].isArchived == false) {          
          let displayEmail = [];
          let displayCollabrators = [];
          displayCollabrators = notesList[i].collaborators;         
          if( displayCollabrators.length>0){
          for(let j=0; j<displayCollabrators.length; j++){
              displayEmail.push(displayCollabrators[j].email)
          }
          }
        let List = '';
        for(let j=0; j<displayEmail.length; j++){
          List += `<div style="list-style-type:none" class="display-email">` +displayEmail[j].charAt(0) + `</div>`
        }
         // console.log(List);
          nHTML += `<div class="notes" id="notes-text">
                          <div class="items" id="notes-color" style="background-color:`+ notesList[i].color + `">                                       
                            <div class="s3-btn" name="Open" style="background-color:`+ notesList[i].color + `" id=` + i + ` onclick="FormOpen(id);">
                              <li id="update-title" style="list-style-type:none">` + notesList[i].title + " " + `</li>` +
            `<li id="update-note" style="list-style-type:none">` + notesList[i].description +
            `</li>` +
            `<li style="list-style-type:none;display:flex;flex-direction:row;">` + List +
            `</li>` +
            `</div>  
                            <div class="sub-buttons" id="display-buttons">
                            <button class="reaminder-btn"   style="background: transparent; border:none; " >     
                            <span class="material-icons-outlined">
                             add_alert
                           </span>
                           </button>
                              <button  class="collaborator-button"   style="background: transparent;border: none;" id=`+ notesList[i].id + ` value="Click" onclick="getnotescollab(id)">
                              </span>                             
                              <span class="material-icons-outlined">
                                person_add_alt
                              </span>
                              </button>                              
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
                                  delete
                                  </span>
                                </button>
                                </div>
                                </div> 
                           </div>     
                                    
                              `;
        }
      }
      document.getElementById("item-list").innerHTML = nHTML;
    })
    .catch((err) => {
      console.log(err);
    })
}

//********************NavbarArchive**************************** */

function NavbarArchive() {
  document.getElementById("main-section").style.display = "none";
 // document.getElementById("overlay").style.display = "block";
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
  document.getElementById("main-section").style.display = "none";
  makePromiseCall("GET", `${Baseurl}/notes/getTrashNotesList`, true, {}, true)
    .then(res => {
      console.log(JSON.parse(res).data.data);
      var nHTML = '';
      notesList = JSON.parse(res).data.data;
      for (let i = 0; i < notesList.length; i++) {
        //if( notesList[i].isDeleted == false &&  notesList[i].isArchived == false) {              
        nHTML += `<div class="notes" id="notes-text">
                       <div class="items" id="notes-color" style="background-color:`+ notesList[i].color + `">                                       
                         <div class="s3-btn" name="Open" style="background-color:`+ notesList[i].color + `" id=` + i + ` >
                           <li id="update-title" style="list-style-type:none">` + notesList[i].title + " " + `</li>` +
          `<li id="update-note" style="list-style-type:none">` + notesList[i].description +
          `</li>` +
          `<li style="list-style-type:none">` +
          `</li>` +
          `</div>  
                         <div class="sub-buttons" id="display-buttons">
                         <span class="material-icons-outlined">
                         restore_from_trash
                         </span>                       
                             
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
      document.getElementById("item-list").innerHTML = nHTML;
    })
    .catch((err) => {
      console.log(err);
    })
}


function notesContent(notesList) {
  var nHTML = '';
  for (let i = 0; i < notesList.length; i++) {
    // if (notesList[i].isDeleted != true && notesList[i].isArchived != true) {
    nHTML += `<div class="notes" id="notes-text">
                        <div class="items" id="notes-color" style="background-color:`+ notesList[i].color + `">                                       
                          <div class="s3-btn" name="Open" style="background-color:`+ notesList[i].color + `" id=` + i + `>
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
                              <button type="button" id=`+ notesList[i].id + ` style="background-color:` + notesList[i].color + `"  class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
  document.getElementById("item-list").innerHTML = nHTML;
}