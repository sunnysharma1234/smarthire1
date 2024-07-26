// import logo from './logo.svg';
// import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { useEffect, useState } from 'react';

import './styles.css'
function App() {

  const getLocalItems=()=>{
    let list = localStorage.getItem('notes');
    // console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem('notes'))
    }else{
      return [];
    }

  }

  const [notes, setNotes] = useState(getLocalItems());

  const [noteToEdit, setNoteToEdit]  = useState(null);




  // useEffect(()=>{
  //   const savedNotes = JSON.parse(localStorage.getItem('notes'))||[];

  //   setNotes(savedNotes);
  // },[]);


  // useEffect(()=>{
  //   localStorage.setItem('notes',JSON.stringify(notes))
  // },[notes]);
// useEffect(() => {
//     // Read from local storage directly
//     const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     setNotes(savedNotes);
//   }, []);
  
 useEffect(() => {
    // Update local storage after the state change
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  


  const addNote = (note)=>{
    const newNote = {
      id: Date.now(),
      ...note,
      timestamp: new Date().toISOString()
    };
    setNotes([...notes,newNote])
  };


  const editNote = (updatedNote)=>{
    const updatedNotes = notes.map(note=>note.id ===updatedNote.id?updatedNote:note);

    setNotes(updatedNotes)
  }


  const deleteNote = (id)=>{
    const filteredNotes = notes.filter(note=>note.id !== id);
    setNotes(filteredNotes);

  }


  const setNoteToEditHandler = (note) =>{
    setNoteToEdit(note);
  }

  const clearEdit =()=>{
    setNoteToEdit(null);
  }



  return (
    <div className="app">
       <NoteForm addNote={addNote} editNote={editNote} noteToEdit={noteToEdit} clearEdit={clearEdit} /> 
       <NoteList notes={notes} deleteNote={deleteNote} setNoteToEdit={setNoteToEditHandler} />
       </div>
  );
}

export default App;
