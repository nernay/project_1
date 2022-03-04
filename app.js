let addBtn = document.getElementById("add-btn")
let addTxt = document.getElementById("note-text")



addBtn.addEventListener('click',(e) =>{
    if (addTxt.value == ""){
        return alert("Please add text to the note")
    }

    let notes = localStorage.getItem("notes");
    if (notes == null){
        // make it a equal to 
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        text : addTxt.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes" ,JSON.stringify(notesObj));
    // after adding the text field is empty 
    addTxt.value = "";

    showNotes();

})

// SHOWS NOTES ON THE PAGE WE HAVE 
function showNotes(){
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObj = [];
    } else{
        notesObj = JSON.parse(notes)
    }

    let html ="";
    notesObj.forEach(function(element ,index){
        html += 
        <div id="notes">
            <p class="note-counter">Note${index + 1}</p>
            <p class="note-text">${element.text}</p>
            <button class="note-btn">Delete Note</button>
            <button class="note-btn edit-btn">Edit note</button>
            </div>

    })
    
    }

