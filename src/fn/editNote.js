import getNotesList from "./getNotesList";

export default function editNote(e, noteId, refs, newNoteData) {
  const inputRef = document.querySelector("#editName");
  const categoryRef = document.querySelector("#changeCategory");
  const contentRef = document.querySelector("#changeContent");
  const saveCangeBtnRef = document.querySelector("#save-edit-btn");

  const notesList = getNotesList();
  const currentNote = notesList.find((note) => note.id === noteId);

  for (let key in newNoteData) {
    newNoteData[key] = currentNote[key];
  }

  inputRef.value = currentNote.name;
  categoryRef.value = currentNote.category;
  contentRef.value = currentNote.content;
  saveCangeBtnRef.noteId = currentNote.id;
}
