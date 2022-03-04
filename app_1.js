let addtxt1 = document.getElementById("text1")
let addBtn1 = document.getElementById("Button-id");
addBtn1.addEventListener("click",(e)=> {
    if (addtxt1.value ==""){
        return alert("Please add note title and details")
    }
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes)
    }

    let myObj = {
        text : addtxt1.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    // we have delete the value from the local storage after saving it 
    addtxt1.value ="" // empty my addtxt1 value

    showNotes();


})

// show notes on the page 

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index){
        html += `
        <div id="notes">
        <p class="note-counter">Note ${index +1}</p>
        <p class="note-text">${element.text}</p>
        <button id="${index}" onclick ="deleteNote(this.id)" class="note-btn">Delete Note</button>
        <button id="${index}" onclick ="editNote(this.id)" class="note-btn-edit-btn">Edit note</button>
        </div>
        `;


    });

    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0){
        noteElm.innerHTML = html;
    } else{
        noteElm.innerHTML = "no notes yet";
    }

}
// function to delete notes 
function deleteNote(index){
    let comfirmDel = confirm("You are deleting this node")

    if (comfirmDel == true){
        let notes = localStorage.getItem("notes");
        if (notes == null){
            notesObj = [];
        } else {
            // it will get all the items of that notes
            // it convert all elements back to a object
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesObj))
        showNotes();

    }
}


showNotes();