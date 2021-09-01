const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
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
    //delete a note with trash icon
    this.deleteNote(event);
  });

  //EventListener to add tooltip when mouseover
  document.body.addEventListener('mouseover', event => {
      this.openTooltip(event);
   });
//close the tooltip when mouseout
   document.body.addEventListener('mouseout', event => {
       this.closeTooltip(event);
    });

    // to make the tooltip stay up or close
    this.$colorTooltip.addEventListener('mouseover', function() {
    this.style.display = 'flex';
  });

  this.$colorTooltip.addEventListener('mouseout', function() {
     this.style.display = 'none';
  });

//EventListener to clear the form when submitted
  this.$form.addEventListener("submit", event => {
    //to prevent the default event of refreshing when submitted add ev
      
    event.preventDefault();// get input from id = note-title and id = note-text
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

 openTooltip(event) {
   //make sure only open when it is hovered over
    if (!event.target.matches('.toolbar-color')) return;
    this.id = event.target.dataset.id;
    //get specific coordinates of tooltip
    const noteCoords = event.target.getBoundingClientRect();
    //to determine where the user is on the page
    const horizontal = noteCoords.left + window.scrollX;
    const vertical = noteCoords.top + window.scrollY;
    this.$colorTooltip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
    this.$colorTooltip.style.display = 'flex';
  }

  closeTooltip(event) {
      if (!event.target.matches('.toolbar-color')) return;
      this.$colorTooltip.style.display = 'none';
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


 render() {
    this.saveNotes();
    this.displayNotes();
  }

 //store note when we refresh
 saveNotes() {
   
    localStorage.setItem('notes', JSON.stringify(this.notes))//method converts a JavaScript object or value to a JSON string,
  }

  displayNotes() {
    const hasNotes = this.notes.length > 0;
    this.$placeholder.style.display = hasNotes ? 'none' : 'flex';
    
 //  if (hasNotes) {
     //    this.$placeholder.style.display = 'none';
     //  } else {
     //    this.$placeholder.style.display = 'flex';
     //  }
     this.$notes.innerHTML = this.notes.map(note => `
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
          <div class="${note.title && 'note-title'}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <img class="toolbar-color" data-id=${note.id} src="https://icon.now.sh/palette">
              <img class="toolbar-delete" data-id=${
                note.id
              } src="https://icon.now.sh/delete">
            </div>
          </div>
        </div>
     `).join("");// adding .join("") will get rid of the commas between our arrays
  }
}

new App();

//service
function addNote(data){

  servicereq('/notes/addNotes','post',data)

}
//service
function servicereq (url,meth,data){
  console.log(data);
  fetch(baseUrl+url, {
  method:meth,
  body: JSON.stringify(data),
           mode: 'cors',
           headers: {
             'Content-Type': 'application/json',
         }
  })
  .then( response => response.json() )
  .then( data => console.log(data) )

  .catch(error => {
    console.error('Error:', error);
  });
}