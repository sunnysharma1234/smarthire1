import React from "react"
const NoteItem = ({note, deleteNote, setNoteToEdit})=>{
    
    return(
        
        <div className="note-item">
            <h3>{note.title}</h3>
            <p>{note.content} </p>
            <p><small>{new Date(note.timestamp).toLocaleString()}</small></p>

            <button onClick={()=>setNoteToEdit(note)}>Edit</button>
            <button onClick={()=>deleteNote(note.id)}>Delete</button>

            
        </div>
    )
}


export default NoteItem;