

  // collaborator icon opening section

function opencollab() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}


// add collaborator in collaborator page method

function addCollaborator() {
    let email = document.getElementById("search-email").value;
    console.log(email);
    var nHTML = '';
      nHTML += email;
      document.getElementById("collab-email").innerHTML = nHTML
  };
  
  // method for adding collaborator in addnote 
  
  function addNoteCollaborator() {
    switchVisible();
    displayCollabListInMain();
  }
  
  function addToCollabaratorList(i){
    collabList.push(searchResults[i])
    let selectedEmail = searchResults[i].email;
    displayColabList.push(selectedEmail[0]);
  }
  
  function displayCollabListInMain(){
    var colab  = document.getElementById("addnote-collab-h");
    let val ="";
    for(let i=0; i< displayColabList.length; i++){
      val += displayColabList[i] + '   ';
    }
    colab.innerHTML = val;
  }