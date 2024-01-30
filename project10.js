const addBtn = document.querySelector('.btn')
const main = document.querySelector('main')

addBtn.addEventListener(
    'click',
    ()=>{
        addNote()
    }
)

const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach((note)=>{
        data.push(note.value)
    })
    console.log(data)

    if(data.length===0)
    {
        localStorage.removeItem('notes')
    }
    else{
        localStorage.setItem('notes',JSON.stringify(data))
    }

   
}




{/* <div class="note">
                <div class="tool">
                    <i class="fa-solid fa-trash"></i>
                    <i class="fa-regular fa-floppy-disk"></i>
                </div>
                <textarea ></textarea>
            </div> */}


const addNote = (text="")=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
        <div class="tool">
        <i class="trash fa-solid fa-trash"></i>
        <i class="save fa-regular fa-floppy-disk"></i>
        </div>
        <textarea >${text}</textarea>
    `;

    note.querySelector('.trash').addEventListener(
        "click",
        function(){
            note.remove()
            saveNotes()
        }
    )

    note.querySelector('.save').addEventListener(
        "click",function(){
            saveNotes()
        }

    )


    note.querySelector('textarea').addEventListener(
        'focusout',function(){
            saveNotes()
        }
    )
    main.appendChild(note)
    saveNotes()

}



(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes=== null){
            addNote()
        }else{
            lsnotes.forEach((lsnote)=>{
                addNote(lsnote)
            }
            )
        }    
    }
)()