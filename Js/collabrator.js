

// collab  opening in main  note

function opencollab() {
  if (document.getElementById('Div1')) {

    if (document.getElementById('Div1').style.display == 'none') {
      document.getElementById('Div1').style.display = 'block';
      document.getElementById('Div2').style.display = 'none';
      //document.getElementById('owneremail').innerHTML = 'Akhila Reddy';
      document.getElementById('default-email').innerHTML = 'akhila.it1801@gmail.com';
    }
    else {
      document.getElementById('Div1').style.display = 'none';
      document.getElementById('Div2').style.display = 'block';
    }
  }
}

//******user searching the mail from list******** */
let usersearchList = [];
function usersearch() {
  let email = document.getElementById("searchemail");
  if (email.value.length > 2) {
    let data = {
      searchWord: email.value
    }
    makePromiseCall("POST", `${Baseurl}/user/searchUserList`, true, data, true)
      .then((res) => {
        console.log(JSON.parse(res).data.details);
        usersearchList = JSON.parse(res).data.details;
        var nHTML = '';
        for (let i = 0; i < usersearchList.length; i++) {
          nHTML += ` <li style="list-style-type:none"><div id=` + i + ` onclick = "selectemail(id)">` + usersearchList[i].email + `</div> </li>`;
        }
        document.getElementById("collab-list").innerHTML = nHTML;

      })
      .catch((err) => {
        console.log(err);
      })
  }
};
//**********user selects the mail from list******* */
function selectemail(i) {
  console.log(i);
  document.querySelector('#searchemail').value = usersearchList[i].email;
  collabList.push(usersearchList[i])
  let collabEmail = usersearchList[i].email;
  displayList.push(collabEmail[0])
}

//**********adding the collabrator to main note*********** */

let displayList = [];
function addCollab() {
  var nHTML = '';
  for (let i = 0; i < displayList.length; i++) {
    nHTML += ` <li style="list-style-type:none" class = "display-email"><div id=` + displayList[i] + ` onclick= "displayCollab(id)">` + displayList[i] + `</div> </li>`;
  }
  document.getElementById("collab-avtar-image").innerHTML = nHTML;
}

function displayCollab() {
  opencollab();
}
function addcollabemail() {
  let email = document.getElementById("searchemail").value;
  console.log(email);
  var nHTML = '';
  nHTML += email;
  document.getElementById("collab-email").innerHTML = nHTML
}


//*************Update note opening collab***************** */

function openupdatecollab(i) {
  console.log(i);  
  var nHTML = '';
  nHTML += ` 
  <div class="popup-collab-contents">
  <h1>Collaborators
    <hr>
  </h1>
  <div class="popup-collab-email" id="popup-collab-email">
 </div>
 <div class="popup-default-email">
   <img src="../Assests/akhila.jpg" alt="" class="collab-avatar">
   <span class="popup-email" id="popup-email"></span>
 </div>

 <div class="popup-update-collab-dropdown">
   <div class="dropdown">
     <img src="../Assests/collabimg.svg" alt="" class="collab-avatar">
     <input class="btn btn-secondary dropdown-toggle" placeholder="Person or email to share with"
       id="search-email" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"
       onkeypress="updateusersearch()">
     </input>
     <ul class="dropdown-menu dropdown-menu-dark" id="popup-collab-list"
       aria-labelledby="dropdownMenuButton2">
     </ul>
   </div>
 </div>
 <div class="popup-collab-buttons" id="popup-buttons">
   <button class="close-btn-collab" id="close-btn-collab" onclick = "openupdatecollab()" >Cancel</button>
   <button class="save-btn-collab" id="save-btn-collab" onclick="updateNoteCollab('`+ i +`')">Save</button>
 </div>
 </div>`

document.getElementById("popup-collab-container").innerHTML = nHTML; 

  if (document.getElementById('popup-inner-content')) {

    if (document.getElementById('popup-inner-content').style.display == 'none') {
      document.getElementById('popup-inner-content').style.display = 'block';
      document.getElementById('popup-collab-container').style.display = 'none';    
      document.getElementById('popup-email').innerHTML = 'akhila.it1801@gmail.com';
    }
    else {
      document.getElementById('popup-inner-content').style.display = 'none';
      document.getElementById('popup-collab-container').style.display = 'block';
    }
  }
}
function updateNoteCollab(i) {
  console.log(updatecollabList);
  console.log(i);

 
    makePromiseCall("POST", `${Baseurl}/notes/${i}/AddcollaboratorsNotes`, true, updatecollabList, true)
      .then((res) => {
        console.log(res.data);
        FormClose();
        GetNotes();
      })
      .catch((err) => {
        console.log(err);
      })
  
}





//*************display note collab*************** */

function getnotescollab(i) {
  console.log(i)
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup-collab-container").style.display = "block";

  var nHTML = '';
   nHTML += ` 
   <div class="popup-collab-contents">
   <h1>Collaborators
     <hr>
   </h1>
   <div class="popup-collab-email" id="popup-collab-email">
  </div>
  <div class="popup-default-email">
    <img src="../Assests/akhila.jpg" alt="" class="collab-avatar">
    <span class="popup-email" id="popup-email"></span>
  </div>

  <div class="popup-update-collab-dropdown">
    <div class="dropdown">
      <img src="../Assests/collabimg.svg" alt="" class="collab-avatar">
      <input class="btn btn-secondary dropdown-toggle" placeholder="Person or email to share with"
        id="search-email" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off"
        onkeypress="updateusersearch()">
      </input>
      <ul class="dropdown-menu dropdown-menu-dark" id="popup-collab-list"
        aria-labelledby="dropdownMenuButton2">
      </ul>
    </div>
  </div>
  <div class="popup-collab-buttons" id="popup-buttons">
    <button class="close-btn-collab" id="close-btn-collab" onclick = "FormClose()" >Cancel</button>
    <button class="save-btn-collab" id="save-btn-collab" onclick="displayNoteCollab('`+ i +`')">Save</button>
  </div>
  </div>`

document.getElementById("popup-collab-container").innerHTML = nHTML; 


}

function displayNoteCollab(i) {
  console.log(updatecollabList);
  console.log(i);

   //if (updatecollabList.length > 0) {
  //   let data = {
  //     "id" : i,
  //     "data": [JSON.stringify(updatecollabList)]
  //   }
    makePromiseCall("POST", `${Baseurl}/notes/${i}/AddcollaboratorsNotes`, true, updatecollabList, true)
      .then((res) => {
        console.log(res.data);
         FormClose();
        GetNotes();
      })
      .catch((err) => {
        console.log(err);
      })
  
}







let userList = [];
function updateusersearch() {
  let email = document.getElementById("search-email");
  if (email.value.length > 2) {
    let data = {
      searchWord: email.value
    }
    makePromiseCall("POST", `${Baseurl}/user/searchUserList`, true, data, true)
      .then((res) => {
        console.log(JSON.parse(res).data.details);
        userList = JSON.parse(res).data.details;
        var nHTML = '';
        for (let i = 0; i < userList.length; i++) {
          nHTML += ` <li style="list-style-type:none"><div id=` + i + ` onclick = "selectpopupemail(id)">` + userList[i].email + `</div> </li>`;
        }
        document.getElementById("popup-collab-list").innerHTML = nHTML;

      })
      .catch((err) => {
        console.log(err);
      })
  }
};
let updatecollabList 
function selectpopupemail(i) {
  console.log(i);
  document.querySelector('#search-email').value = userList[i].email;
  updatecollabList= userList[i]

}