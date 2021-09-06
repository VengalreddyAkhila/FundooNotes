// ************************* ADD----NOTE ***************

const Baseurl = "http://fundoonotes.incubation.bridgelabz.com/api";
function addNote() {
  let data = {
    "title": document.getElementById("note-title").value,
    "description": document.getElementById("note-text").value,
    "isArchived": document.getElementById("archive"),
    
  }
  if (header = true)
    makePromiseCall("POST", "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", true, data)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch()
  console.log("error");
}