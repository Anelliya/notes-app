import deleteNote from "./deleteNote";
import editNote from "./editNote";
import moveToArchive from "./moveToArchive";
import moveToActiveList from "./moveToActiveList";

export default function handleAction(e, refs, status, newNoteData) {
  const noteId = e.target.getAttribute("noteid");
  const btnId = e.target.id;

  btnId === "delete-btn" && deleteNote(refs, noteId, status);

  btnId === "edit-btn" && editNote(e, noteId, refs, newNoteData);

  btnId === "go-to-arhive-btn" && moveToArchive(e, "archived", refs);

  btnId === "go-to-active-btn" && moveToActiveList(e, "active", refs);
}
