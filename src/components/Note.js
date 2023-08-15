import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id,title, text, date, overflow, deleteNote }) => {
	console.log(overflow);
	return (
		<div className='note'>
			<span className='title'>{title}</span>
			<div className={`${overflow && 'over-flow'}`}>
				<p>{text}</p>
			</div>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => deleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;