// ************************************** main note icons.js ***************************************************************************

document.getElementById("icons").innerHTML =`
<button style="background: transparent;border: none;" value="Click"  onclick="addRemainder()"/>   
<span class="material-icons-outlined">
        add_alert
    </span>
    </button>
  
    <button id="Button1" class="collaborator-button" value="Click" onclick="opencollab()"/>
        <span class="material-icons-outlined">
            person_add_alt
        </span>
    </button>
    <div class="btn-group dropup" id="color-palette-dropdown">
        <button type="button" id="btn-colors" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded="false">
        <span class="material-icons-outlined">
            palette
        </span>
        </button>
        <div class="color-palette dropdown-menu" id ="color-palette">
            <div class="bg-white circled"></div>
            <div class="bg-red"></div>
            <div class="bg-orange"></div>
            <div class="bg-yellow"></div>
            <div class="bg-green"></div>
            <div class="bg-turquoise"></div>
            <div class="bg-blue"></div>
            <div class="bg-dark-blue"></div>
            <div class="bg-purple"></div>
            <div class="bg-pink"></div>
            <div class="bg-brown"></div>
            <div class="bg-grey"></div>
        </div>
    </div>
    <span class="material-icons-outlined">
        photo
    </span>
    <button class="archive-button" id="archive-button" onclick="addArchive()">
        <span class="material-icons-outlined">
            archive
        </span>     
    </button>
    
    <span class="material-icons-outlined">
        more_vert
    </span>
    <span class="note-closing" style="position:absolute;">
    <input type="button" class="note" id="note-close" value="close" onclick="addNote()" />
    </span>
`


  