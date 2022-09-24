import getNotesList from "./getNotesList";

export default function changeNoteStatus(e, status) {
  const noteId = e.target.getAttribute("noteid");
  const noteList = getNotesList();

  const updatedNoteList = noteList.map((element) => {
    element.id === noteId && (element.status = status);
    return element;
  });

  return updatedNoteList;
}
