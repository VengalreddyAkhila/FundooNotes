

  // collab  opening 

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

let usersearchList = [];
function usersearch(){
  let email = document.getElementById("searchemail");
  if(email.value.length > 2) {
  let data = {
    searchWord: email.value
  }
  makePromiseCall("POST", `${Baseurl}/user/searchUserList`, true, data, true)
  .then((res) => {
    console.log(JSON.parse(res).data.details);
    usersearchList = JSON.parse(res).data.details;
    var nHTML = '';
    for(let i=0; i< usersearchList.length; i++) {
    nHTML += ` <li style="list-style-type:none"><div id=` + i + ` onclick = "selectemail(id)">` + usersearchList[i].email+ `</div> </li>`;
    }
    document.getElementById("collab-list").innerHTML = nHTML  ;

  })
  .catch((err) => {
    console.log(err);
  })
}
};

function selectemail(i){
  console.log(i);
   document.querySelector('#searchemail').value = usersearchList[i].email ;
   collabList.push(usersearchList[i])
   let collabEmail = usersearchList[i].email;
  // collabEmail.charAt(0);
   displayList.push(collabEmail[0])
}

let displayList = [];
function addCollab(){  
  var nHTML = '';
  for(let i=0; i< displayList.length; i++){
    nHTML +=  ` <li style="list-style-type:none"><div id=` + displayList[i] + ` onclick= "displayCollab(id)">` + displayList[i]+ `</div> </li>`;
  }
  document.getElementById("collab-avtar-image").innerHTML = nHTML;
}

function displayCollab(){
  opencollab();
}



















function opendisplaycollab() {
  if (document.getElementById('popup-inner-content')) {

      if (document.getElementById('popup-inner-content').style.display == 'none') {
          document.getElementById('popup-inner-content').style.display = 'block';
          document.getElementById('Div3').style.display = 'none';
         // document.getElementById('owneremail').innerHTML = 'Akhila Reddy';
          document.getElementById('default-email').innerHTML = 'akhila.it1801@gmail.com';
      }
      else {
          document.getElementById('popup-inner-content').style.display = 'none';
          document.getElementById('Div3').style.display = 'block';
      }
  }
}