import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title,text,overflow) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
      		title: title,
			text: text,
			date: date.toLocaleDateString(),
      		overflow: overflow
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header darkMode={darkMode} setDarkMode={setDarkMode} />
				<Search setSearchText={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.includes(searchText) ||
						note.text.toLowerCase().includes(searchText) ||
						note.text.toUpperCase().includes(searchText) ||
            			note.title.includes(searchText) ||
						note.title.toLowerCase().includes(searchText) ||
						note.title.toUpperCase().includes(searchText)
					)}
					addNote={addNote}
					deleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;