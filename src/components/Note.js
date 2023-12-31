import React, { useState } from 'react';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import NoteEdit from './NoteEdit';

const Note = ({ 
    id, 
    title, 
    text, 
    date, 
    overflow, 
    deleteNote,
    updatedNote
}) => {
  const [update, setUpdate] = useState(false);

  const [isHoveredEdit, setIsHoveredEdit] = useState(false);
  const [isHoveredDelete, setIsHoveredDelete] = useState(false);

  const handleMouseEnterEdit = () => {
    setIsHoveredEdit(true);
  };

  const handleMouseLeaveEdit = () => {
    setIsHoveredEdit(false);
  };

  const handleMouseEnterDelete = () => {
    setIsHoveredDelete(true);
  };

  const handleMouseLeaveDelete = () => {
    setIsHoveredDelete(false);
  };

  return (
    <div>
      {update ? (
        <NoteEdit
          id={id}
          title={title}
          text={text}
          overflow={overflow}
          updatedNote={updatedNote}
		      setUpdate = {setUpdate}
        />
      ) : (
        <div className='note edit'>
          <span className='title'>{title}</span>
          <div className={`${overflow && 'over-flow'} text`}>
            <p>{text}</p>
          </div>
          <div className='note-footer'>
            <small>{date}</small>
            <div className='edit-container'>
              <MdEditNote
                onClick={() => {setUpdate(true); handleMouseLeaveEdit()}}
                onMouseEnter={handleMouseEnterEdit}
                onMouseLeave={handleMouseLeaveEdit}
                className='edit-icon'
                size='1.3em'
              />
              <span className={`edit-text ${isHoveredEdit ? 'visible' : ''}`}>edit</span>
            </div>
            <div className='delete-container'>
              <MdDeleteForever
                onClick={() => deleteNote(id)}
                onMouseEnter={handleMouseEnterDelete}
                onMouseLeave={handleMouseLeaveDelete}
                className='delete-icon'
                size='1.3em'
              />
              <span className={`delete-text ${isHoveredDelete ? 'visible' : ''}`}>delete</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
