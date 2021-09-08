//************************** form Open ***************************
function FormOpen(i){
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
  
  //************************form Close **************************
  
  function FormClose(){
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
  }
   
  // archive in display note section
    
  function ArchiveNote(id) {
    let data = {
    "noteIdList":[id], 
    "isArchived": true
    };
  
    makePromiseCall("POST", `${Baseurl}/notes/archiveNotes`, true, data,true)
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
    let changeColor = document.getElementById("notes-color").style.backgroundColor;
    let data = {
      
    "title" : document.getElementById("popup-title").value,
    "description" : document.getElementById("popup-description").value,
    "color": '#' + changeColor.slice(4, -1).split(',').map(x => (+x).toString(16).padStart(2, 0)).join(''),
    "noteId": i
    }
    console.log(data)  
    makePromiseCall("POST", `${Baseurl}/notes/updateNotes`, true, data,true)
      .then((res) => {
        console.log(res.data);
        GetNotes();
      })
      .catch((err) => {
        console.log(err);
            })
  
}

//***************TreashNote********************** */

function trashNote(id) {
 
    let data = {
      "noteIdList": [id],
      "isDeleted": true
    } 
      makePromiseCall("POST", `${Baseurl}/notes/trashNotes`, true, data,true)
        .then((res) => {
          console.log(res.data);
          GetNotes();
        })
        .catch((err) => {
          console.log(err);
              })
  }