// ************************* ADD----NOTE ***************

const Baseurl = "http://fundoonotes.incubation.bridgelabz.com/api";
function addNote() {
  let data = {
    "title": document.getElementById("note-title").value,
    "description": document.getElementById("note-text").value,
    "isArchived": true,
    "color" : document.getElementById("form").style.backgroundColor
    
  }
  if (header = true)
    makePromiseCall("POST", `${Baseurl}/notes/addNotes`, true, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch()
  console.log("error");
}