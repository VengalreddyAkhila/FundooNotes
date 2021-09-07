// popup Open method
function popupOpen(i){
    let Items = notesList[i];
    console.log(Items)
    document.getElementById("popup").style.display="block";
    document.getElementById("overlay").style.display="block";
    var nHTML = '';
    nHTML += `                                                        
             <input type="text" placeholder="`+ Items.title + " "+`" class="popup-title" id="popup-title" style="background-color:`+selectedItem.color+`">` + 
            `</input>` + 
            `<input type="text" placeholder="`+ Items.description + `" class="popup-description" id="popup-description" style="background-color:`+selectedItem.color+`">` + 
            `</input>` +       
      `
                    
    `
    console.log(Items.id);
    document.getElementById("popup-inner-content").innerHTML = nHTML; 
    document.getElementById("popup-close").id = Items.id;
    document.getElementById("popup").style.backgroundColor = Items.color;
  }
  
  //  Popup Close method
  
  function popupClose(){
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
  }
   
  // archive in display note section
    
  function ArchiveNote(id) {
    let data = {
    "noteId":[id], 
    "isArchived": true
    };
   
    makePromiseCall("POST", `${Baseurl}/notes/archiveNotes`, true, data,true)
      .then((res) => {
        console.log((res).data);
        GetNotes();
  })
  .catch()
  console.log("error");
}  
  // *************************** update note section*****************************8
  
  function PopupNotes(i) {
   
    let data = {
    "noteId": [i],
    "title" : document.getElementById("popup-title").value,
    "description" : document.getElementById("popup-description").value
    }
    console.log(data)   
    makePromiseCall("POST", `${Baseurl}/notes/updateNotes`, true, data,true)
      .then((res) => {
        console.log(res.data);
      })
      .catch()
  console.log("error");
  GetNotes();
}

//*****************TrashNotes************************ */

function trashNotes(id) {
    let data = {
      "noteId": [id],
      "isDeleted": true
    }  
      makePromiseCall("POST", `${Baseurl}/notes/trashNotes`, true, data,true)
        .then((res) => {
          console.log(res.data);
          GetNotes();
        })
        .catch()
    console.log("error");
  }