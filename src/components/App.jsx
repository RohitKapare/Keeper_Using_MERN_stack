import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {console.log(notes)}
      {notes.map((note, i) => <Note key={i} id={i} title={note.title} content={note.content} />)}
      <Footer />
    </div>
  );
}

export default App;
