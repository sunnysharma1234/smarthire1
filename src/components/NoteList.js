import { useState } from "react";
import NoteItem from "./NoteItem"


const NoteList = ({notes,deleteNote,setNoteToEdit})=>{

    const [currentPage, setCurrentPage] = useState("1")
    const [searchTerm, setSearchTerm] = useState('')

    const notesPerPage = 10;
    const filteredNotes = notes.filter(note=>note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLowerCase().includes(searchTerm.toLowerCase()));

    const handlePageChange = (page)=>{
        setCurrentPage(page);
    }

    const displayedNotes = filteredNotes.slice(
       (currentPage -1)*notesPerPage,
       currentPage*notesPerPage
    );
    const totalPages = Math.ceil(filteredNotes.length / notesPerPage);



    return(
        <div>
            <input type="text" placeholder="Search notes" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
            <div>{displayedNotes.map(note=>(
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} setNoteToEdit={setNoteToEdit}></NoteItem>
            ))} </div>
            <div>
                {Array.from({length:totalPages}, (_,i)=>i+1 ).map(page=>(
                    <button key={page} onClick={()=>handlePageChange(page)} disabled={currentPage===page}>{page}</button>
                ))}
            </div>
        </div>
    )
}


export default NoteList;