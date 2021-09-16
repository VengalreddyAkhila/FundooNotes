

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
  // collabEmail.charAt(0);
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



//*************Update note opening collab***************** */

function opendisplaycollab() {
  if (document.getElementById('popup-inner-content')) {

    if (document.getElementById('popup-inner-content').style.display == 'none') {
      document.getElementById('popup-inner-content').style.display = 'block';
      document.getElementById('popup-collab-container').style.display = 'none';
      //document.getElementById('owneremail').innerHTML = 'Akhila Reddy';
      document.getElementById('popup-email').innerHTML = 'akhila.it1801@gmail.com';
    }
    else {
      document.getElementById('popup-inner-content').style.display = 'none';
      document.getElementById('popup-collab-container').style.display = 'block';
    }
  }
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
let updatecollabList = [];
function selectpopupemail(i) {
  console.log(i);
  document.querySelector('#search-email').value = userList[i].email;
  updatecollabList.push(userList[i])

}

function UpdateCollab(id) {
  console.log(updatecollabList);
  let data = {
    "noteId": id
  }
    if(updatecollabList.length > 0){
      data["collaberators"] = [JSON.stringify(updatecollabList)]
    }
    makePromiseCall("POST", `${Baseurl}/notes/{id}/AddcollaboratorsNotes`, true, data,true)
      .then((res) => {
        console.log(res.data);    
 
  GetNotes();
})
.catch((err) => {
  console.log(err);
      })
}

 //*************display note collab*************** */

function getnotescollab(i) {
  document.getElementById("popup").style.display="block";
  document.getElementById("overlay").style.display="block";
  document.getElementById("popup-collab-container").style.display="block";
  let data = {
    "noteId": i
  }
    if(updatecollabList.length > 0){
      data["collaberators"] = [JSON.stringify(updatecollabList)]
    }
    makePromiseCall("POST", `${Baseurl}/notes/{id}/AddcollaboratorsNotes`, true, data,true)
      .then((res) => {
        console.log(res.data);    
        FormClose();
  GetNotes();
})
.catch((err) => {
  console.log(err);
      })
}

function collabformclose(){
  document.getElementById("popup").style.display="none";
    document.getElementById("overlay").style.display="none";
}