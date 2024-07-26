import React, { useEffect, useState } from "react"
import '../index.css';

const NoteForm = ({addNote, editNote,noteToEdit, clearEdit}) => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    useEffect(()=>{
        if(noteToEdit){

setTitle(noteToEdit.title)
setContent(noteToEdit.content)
        }
    },[noteToEdit]);


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(noteToEdit){
            editNote({...noteToEdit, title, content});
        }else{
            addNote({title,content});
        }
        setTitle('');
        setContent('')
        clearEdit();
    }



    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" required ></input>

        <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder="Content" required ></textarea>

        <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
      </form>

    )};

    export default NoteForm;