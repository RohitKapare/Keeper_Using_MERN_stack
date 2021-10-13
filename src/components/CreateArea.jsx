import React, { useState } from "react";

function CreateArea(props) {

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e){
    const {name, value} = e.target;
    setNewNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };      
    })
  }

  function submitNote(e) {
    e.preventDefault();
    props.addNote(newNote);
    setNewNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={newNote.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={newNote.content}/>
        <button onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
