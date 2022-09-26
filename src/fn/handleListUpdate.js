import { v4 as uuidv4 } from 'uuid';
import updateMarkup from './updateMarkup';
import clearForm from './clearForm';
import findDates from './findDates';
import getNotesList from './getNotesList';
import setToLocalStorage from './setToLocalStorage';

import notesTemplate from '../template/noteItem.hbs';
import summaryTemplate from '../template/summary.hbs';

export default function handleListUpdate(
  e,
  _,
  refs,
  _status,
  newNoteData,
  resetData,
) {
  if (e.target.id === 'save-btn') {
    console.log(newNoteData);
    const notesList = getNotesList();

    newNoteData.created = new Date().toDateString();
    newNoteData.id = uuidv4();
    newNoteData.dates = findDates(newNoteData.content)?.join('');

    const updatedNotesList = [...notesList, newNoteData];

    setToLocalStorage('notes', updatedNotesList);

    updateMarkup(refs.notes(), 'active', notesTemplate);
    updateMarkup(refs.summary(), null, summaryTemplate);

    for (let key in newNoteData) {
      newNoteData[key] === '';
    }

    console.log('update', newNoteData);
    clearForm(e);
  }

  if (e.target.id === 'save-edit-btn') {
    const notesList = getNotesList();
    const noteId = e.target.noteId;

    newNoteData.dates = findDates(newNoteData.content)?.join('');

    const updatedNote = { ...newNoteData };

    const updatedNotesList = notesList.map(note => {
      note.id === noteId ? (note = updatedNote) : null;
      return note;
    });

    setToLocalStorage('notes', updatedNotesList);
    updateMarkup(refs.notes(), 'active', notesTemplate);
    updateMarkup(refs.summary(), null, summaryTemplate);

    for (let key in newNoteData) {
      newNoteData[key] === '';
    }
  }
}
