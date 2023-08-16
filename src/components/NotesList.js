import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	addNote,
	deleteNote,
	updatedNote
}) => {
	return (
		<div className='notes-list'>
			{notes.length ?
				notes.map((note,index) => (
				<Note
                    key={index}
					id={note.id}
					title={note.title}
					text={note.text}
					date={note.date}
					overflow={note.overflow}
					deleteNote={deleteNote}
					updatedNote={updatedNote}
				/>
				)):
				<p className='spl'>No notes are available.</p>
			}
			<AddNote addNote={addNote} />
		</div>
	);
};

export default NotesList;