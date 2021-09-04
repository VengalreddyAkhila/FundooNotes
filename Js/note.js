class App {
  constructor() {
    // JSON.parse turns string into array
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];
    this.title = '';
    this.text = '';
    this.id = '';

    this.$placeholder = document.querySelector("#placeholder");
    this.$form = document.querySelector("#form");
    this.$notes = document.querySelector("#notes");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");
    this.$formCloseButton = document.querySelector("#form-close-button");
    this.$modal = document.querySelector(".modal");
    this.$modalTitle = document.querySelector(".modal-title");
    this.$modalText = document.querySelector(".modal-text");
    this.$modalCloseButton = document.querySelector('.modal-close-button');
    this.$colorTooltip = document.querySelector('#color-tooltip');

    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
  document.body.addEventListener("click", event => {
    //event => to get an event and pass it to the call back
    this.handleFormClick(event);
    // populates the modal with information contained on note
    this.selectNote(event);
    // open the Modal  when clicked on note
    this.openModal(event);  
  });


//EventListener to clear the form when submitted
  this.$form.addEventListener("submit", event => {
    //to prevent the default event of refreshing when submitted add ev
       event.preventDefault();
         // get input from id = note-title and id = note-text
       const title = this.$noteTitle.value;
       const text = this.$noteText.value;
             //conditional to make sure text in the title or text space
       const hasNote = title || text;
       if (hasNote) {
         // add note
         this.addNote({ title, text });
       }
     });

// close form once note added
     this.$formCloseButton.addEventListener("click", event => {
       // allows form to close and over ride isFormClicked method
     event.stopPropagation();
     this.closeForm();
   });
   //close modal when close button is clicked
   this.$modalCloseButton.addEventListener('click', event => {
      this.closeModal(event);
    })
 }


   handleFormClick(event) {
     const isFormClicked = this.$form.contains(event.target);
//check to see if user has clicked into the form
     const title = this.$noteTitle.value;
     const text = this.$noteText.value;
     const hasNote = title || text;

     if (isFormClicked) {
       this.openForm();
     } else if (hasNote) {
        // if we have a note, add it to the board
       this.addNote({ title, text });
     } else {
       this.closeForm();
     }
   }

   openForm() {
  this.$form.classList.add("form-open");
  this.$noteTitle.style.display = "block";
  this.$formButtons.style.display = "block";
}

closeForm() {
  this.$form.classList.remove("form-open");
  this.$noteTitle.style.display = "none";
  this.$formButtons.style.display = "none";
  // to clear the form before closing
  this.$noteTitle.value = "";
  this.$noteText.value = "";
}

openModal(event) {
  if (event.target.matches('.toolbar-delete')) return;

  //triggered when mouse click near note
   if (event.target.closest('.note')) {
     // modal will open
      this.$modal.classList.toggle('open-modal');
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
   }
}

closeModal(event) {
    this.editNote();
    this.$modal.classList.toggle('open-modal');
 }

addNote({ title, text}) {
  //add note data
    const newNote = {
      title,
      text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    // add new note to our array along with previous notes
    this.notes = [...this.notes, newNote];
    // display Notes on the screen
    this.render();
    // closes form after entering a note
    this.closeForm();
  }

  editNote() {
     const title = this.$modalTitle.value;
     const text = this.$modalText.value;
     this.notes = this.notes.map(note =>
       //need to convert id from string to number
       note.id === Number(this.id) ? { ...note, title, text } : note
     );
     this.render();
  }

  editNoteColor(color) {
   this.notes = this.notes.map(note =>
     note.id === Number(this.id) ? { ...note, color } : note
   );
   this.render();
 }

  // populate the modal with title and text from selected note
  selectNote(event) {
   const $selectedNote = event.target.closest('.note');
   if (!$selectedNote) return;
   const [$noteTitle, $noteText] = $selectedNote.children;
   this.title = $noteTitle.innerText;
   this.text = $noteText.innerText;
   this.id = $selectedNote.dataset.id;
}
 render() {
    this.saveNotes();
    this.displayNotes();
  }

 //store note when we refresh
 saveNotes() {
   //JSON.stringify turns note into a string
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }


  displayNotes() {
    const hasNotes = this.notes.length > 0;
    this.$placeholder.style.display = hasNotes ? 'none' : 'flex';   
     this.$notes.innerHTML = this.notes.map(note => `
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
          <div class="${note.title && 'note-title'}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar" style="display:flex; justify-content:space-between">      
              
              <button style="border:none;background:transparent"><img class="toolbar-more" data-id=${note.id} src="../Assests/more_icon.svg"></button>
              <button style="border:none;background:transparent"><img class="toolbar-archive" data-id=${note.id} src="../Assests/archive_icon.png"></button>
              <button style="border:none;background:transparent"><img class="toolbar-image" data-id=${note.id} src="../Assests/add_image.svg"></button>
              <div id="color-palette-dropup" class="dropup" onclick="ColorInDisplay()">
              <button style="background-color; z-index:4" class="btn dropup-toggle" type="button" id="btn-colors"  data-bs-toggle="dropdown">
                  <i class="fas fa-palette fa-fw"></i>
              </button>
              <div class="color-palette dropdown-menu">
                  <div class="bg-white circled selected-color"></div>
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
              <button style="border:none;background:transparent"><img class="toolbar-people" data-id=${note.id} src="../Assests/collaborate.svg"></button>
              <button style="border:none;background:transparent"><img class="toolbar-remainder" data-id=${note.id} src="../Assests/bell_icon.png"></button>
            </div>
          </div>
        </div>
     `).join("");// adding .join("") will get rid of the commas between our arrays
  }
}

new App();
// function ColorInDisplay() {
//   document.querySelectorAll(".color-palette div").forEach((element) => {
//     element.addEventListener("click", () => {
//       document.querySelectorAll(".color-palette div").forEach((element) => {
//       element.classList.remove("selected-color");
//     });
//   });
// });
// }

function addnote () {
  let data={
      "title" : document.getElementById("note-title").value,
      "description" : document.getElementById("note-text").value,    
  }
  if(header = true)
  makePromiseCall("POST","http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",true,data)
  .then((Response) => {
      console.log(JSON.parse(Response).token);
  })
  .catch()
  console.log("error");
}


function getnote () {
  let data={}
  if(header = true)
  makePromiseCall("GET","http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",true,data)
  .then((res) => {
      console.log(JSON.parse(res).token);
      var nHTML = '';
      notesList = res.data.data.data;
      for(let i=0; i<res.data.data.data.length; i++) {
        if(res.data.data.data[i].isDeleted == false && res.data.data.data[i].isArchived == false) {
          let colString ="";
          for(let j=0; j<res.data.data.data[i].collaborators.length; j++){
            colString += res.data.data.data[i].collaborators[i].email, " ,";
          }
          nHTML += `<div class="notes" id="notes-section">
                      <div class="items" id="item-color" style="background-color:`+res.data.data.data[i].color+`">                                       
                        <button class="s3-btn" name="Open" style="background-color:`+res.data.data.data[i].color+`" id=`+i+` onclick="popupOpen(id);">
                          <li id="update-title" style="list-style-type:none">` + res.data.data.data[i].title + " "+
                          `</li>` + 
                          `<li id="update-note" style="list-style-type:none">` + res.data.data.data[i].description + 
                          `</li>` + 
                          `<li style="list-style-type:none">` + colString +
                          `</li>` + 
                        `</button>  
                        <div class="sub-buttons" id="display-buttons">
                          <span class="material-icons-outlined">
                            add_alert
                          </span>
                          <button id="Button1" class="collaborator-button" style="background-color:`+res.data.data.data[i].color+`" value="Click" onclick="switchVisible()">
                          <span class="material-icons-outlined">
                            person_add_alt
                          </span>
                          </button>
                          <div class="btn-group dropup" id="color-palette-dropdown">
                            <button type="button" id=`+res.data.data.data[i].id+` style="background-color:`+res.data.data.data[i].color+`" onclick="addColorInDisplay(id)" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <button class="archive-button" id=`+res.data.data.data[i].id+` style="background-color:`+res.data.data.data[i].color+`" onclick="isDisplaynoteArchive(id)">
                            <span class="material-icons-outlined">
                              archive
                            </span>  
                            </button>
                            
                            <button id=`+ res.data.data.data[i].id +` style="background-color:`+res.data.data.data[i].color+`" type="button" class="delete-buttton" onclick="trashNote(id)">
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