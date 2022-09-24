import updateMarkup from "./updateMarkup";
import getNotesList from "./getNotesList";
import setToLocalStorage from "./setToLocalStorage";

import notesTemplate from "../template/noteItem.hbs";
import archiveTemplate from "../template/archiveTemplate.hbs";
import summaryTemplate from "../template/summary.hbs";

export default function deleteNote(refs, id) {
  const notesList = getNotesList();

  const updatedNotesList = notesList.filter((note) => note.id !== id);

  setToLocalStorage("notes", updatedNotesList);

  updateMarkup(refs.notes(), "active", notesTemplate);
  updateMarkup(refs.archived(), "archived", archiveTemplate);
  updateMarkup(refs.summary(), null, summaryTemplate);
}
