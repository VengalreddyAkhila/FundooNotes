const description = document.getElementById('note-text');
const title = document.getElementById('note-title');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

//function showError(input, message){
    //const formControl = input.parentElement;
    //formControl.className = 'form-outline error';
    //const small = formControl.querySelector('small');
    //small.innerText = message;
   // error= true;

//}

function showSuccess(input){
    const formControl = input.parentElement;
   // formControl.className = 'form-outline success';
    error= false;
}

function checkRequired(inputArr){
    inputArr.forEach(input => {
       if(input.value.trim() === ''){
             showError(input,`${input.id} required`);
       }
       else{
            showSuccess(input);
       }
       
   });
}

const addNotes = () => {
  console.log("inside ")
  if(true){
    let data = {                         //title &description
        "title": title.value,
        "description": description.value
      }
      notes(data)
  }
    
  }
  function notes(data){

    servicereq('notes/addNotes','post',data)
    }

    //display notes
    // const getNotes = () => {
    //   console.log("inside ")
    //   if(true){
    //     let data = {                         //title &description
          
         
    //   } 
    //   notesnew(data)
        
    //   }
    
      //function notesnew(data){
    
        // servicereq('notes/addNotes','get')
         
       // var nHTML = '';
        //for(i=0; i<res.data.data.data.length; i++){
          // nHTML += `<div class="item-container"><div class="items"> <li style="list-style-type:none">` + res.data.data.data[i].title
           // + "      "+`</li>` +  `<li style="list-style-type:none">` +  res.data.data.data[i].description + `</li>` + `<button id=`+ res.data.data.data[i].id +` type="button" onclick="deleteNote(id=this.id)">Delete</button></div></div>`;
        // }
         //document.getElementById("item-list").innerHTML = '<ul>' + nHTML + '</ul>'  
      
      // }
      
      
 // }

  
 //service
 function servicereq (url,meth,data){
    console.log(data);
    fetch(baseUrl+url, {
    method:meth,
    headers: {
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('token')
   },
    body: JSON.stringify(data),
             mode: 'cors',
          //    headers: {
          //      'Content-Type': 'application/json',
          //  }
           
    })
    .then( response => response.json() )
    .then( data => {
      console.log(data)
     // localStorage.setItem('token', data.id);
    } )
    //getNotes()
 
    .catch(error => {
      console.error('Error:', error);
    });
}