window.addEventListener('DOMContentLoaded', (event) => {
    getNotes();
  });
let noteslist = [];
function getNotes() {
    let data = {}
    if (header = true)
        makePromiseCall("GET", "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", true, data)
            .then((res) => {
                console.log(res.data);
                var nHTML = '';
                notesList = res.data.data.data;
                for (let i = 0; i < res.data.data.data.length; i++) {
                    if (res.data.data.data[i].isDeleted == false && res.data.data.data[i].isArchived == false) {                      
                        nHTML += `<div class="notes" id="notes-section">
                <div class="items" id="item-color" style="background-color:`+ res.data.data.data[i].color + `">                                       
                  <button class="s3-btn" name="Open" style="background-color:`+ res.data.data.data[i].color + `" id=` + i + ` onclick="popupOpen(id);">
                    <li id="update-title" style="list-style-type:none">` + res.data.data.data[i].title + " " +
                            `</li>` +
                            `<li id="update-note" style="list-style-type:none">` + res.data.data.data[i].description +
                            `</li>` +
                            `<li style="list-style-type:none">` + colString +
                            `</li>` +
                            `</button>  
                  <div class="sub-buttons" id="display-buttons">
                   <img src="../Assests/remainder.svg" >
                    <button><img src="../Assests/people.svg">
                    </button>
                    <div class="btn-group dropup" id="color-palette-dropdown">
                      <button type="button" id=`+ res.data.data.data[i].id + ` style="background-color:` + res.data.data.data[i].color + ` class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                       <img src="../Assests/pallet.svg">
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
                     <img src="../Assests/image.svg">
                      <button class="archive-button" id=`+ res.data.data.data[i].id + ` style="background-color:` + res.data.data.data[i].color + `>
                     <img src="../Assests/archive.svg"  >
                      </button>
                      
                      <button id=`+ res.data.data.data[i].id + ` style="background-color:` + res.data.data.data[i].color + `" type="button" class="delete-buttton" onclick="trashNote(id)">
                     <img src="../Assests/more.svg">
                      </button>
                      </div>
                      </div> 
                 </div>     
                          
                    `;
                    }
                }
                document.getElementById("item-list").innerHTML = nHTML;
            })
            .catch()
    console.log("error");
}