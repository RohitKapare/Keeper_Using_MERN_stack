import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

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
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: ""
    });
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={newNote.title}/>}        
        <textarea name="content" onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={newNote.content}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>        
      </form>
    </div>
  );
}

export default CreateArea;
