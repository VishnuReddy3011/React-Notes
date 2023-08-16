import { useState } from 'react';

const NoteEdit = ({ id,title,text,updatedNote,setUpdate }) => {
	const [noteText, setNoteText] = useState(text);
	const [noteTitle, setNoteTitle] = useState(title);
  const [flow,setFlow] = useState(false);

	const characterLimit = 1000;
	const titleLimit = 100;

	const handleChangeTitle = e => {
    setNoteTitle(title);
		if(titleLimit - e.target.value.length >= 0){
			setNoteTitle(e.target.value);
		}
	}

	const handleChangeText = e => {
		if (characterLimit - e.target.value.length >= 0) {
      if(e.target.offsetHeight < e.target.scrollHeight){
				setFlow(true);
			}
			setNoteText(e.target.value);
		}
	};

	const handleEditSaveClick = () => {
		if (noteText.trim().length > 0) {
			updatedNote(id,noteTitle,noteText,flow);
		}
    setUpdate(false);
	};

	return (
    <div className='note new'>
        <input 
          type="text" 
          value={noteTitle}
          onChange={handleChangeTitle}
        />
        <textarea
          rows='10'
          cols='10'
          value={noteText}
          onChange={handleChangeText}
        ></textarea>
        <div className='note-footer'>
          <small>
            {characterLimit - noteText.length} Remaining
          </small>
          <button className='save' onClick={handleEditSaveClick}>
            Save
          </button>
        </div>
    </div>
	);
};

export default NoteEdit;