import getNotesList from "./getNotesList";
import getNotesSummary from "./getNotesSummary";

export default function layoutMarkup(refs, status, template) {
  const notesList = getNotesList();
  const btnId = refs.id;

  const activeNotes = notesList.filter((note) => note.status === "active");

  const archivedNotes = notesList.filter((note) => note.status === "archived");

  btnId === "list-of-active-notes" &&
    refs.insertAdjacentHTML("beforeend", template(activeNotes));

  btnId === "list-of-archived-notes" &&
    refs.insertAdjacentHTML("beforeend", template(archivedNotes));

  btnId === "list-of-summary-notes" &&
    refs.insertAdjacentHTML("beforeend", template(getNotesSummary()));

  btnId === "body" && refs.insertAdjacentHTML("beforeend", template());
}
