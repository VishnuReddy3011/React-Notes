import { useState } from 'react';

const AddNote = ({ addNote }) => {
	const [noteText, setNoteText] = useState('');
	const [noteTitle, setNoteTitle] = useState('');
	const [overflow, setOverflow] = useState(false);

	const characterLimit = 3000;
	const titleLimit = 100;

	const handleChangeTitle = e => {
		if(titleLimit - e.target.value.length >= 0){
			setNoteTitle(e.target.value);
		}
	}

	const handleChangeText = e => {
		if (characterLimit - e.target.value.length >= 0) {
			if(e.target.offsetHeight < e.target.scrollHeight){
				setOverflow(true);
			}
			setNoteText(e.target.value);
		}

	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0 || noteTitle.trim().length > 0) {
			addNote(noteTitle, noteText, overflow);
			setNoteTitle('');
			setNoteText('');
			setOverflow(false);
		}
	};

	return (
		<div className='note new'>
			<input 
				type="text" 
				placeholder='Type to add a title...'
				value={noteTitle}
				onChange={handleChangeTitle}
			/>
			<textarea
				rows='10'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChangeText}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;