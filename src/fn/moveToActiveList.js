import changeNoteStatus from "./changeNoteStatus";
import setToLocalStorage from "./setToLocalStorage";
import updateMarkup from "./updateMarkup";

import notesTemplate from "../template/noteItem.hbs";
import archiveTemplate from "../template/archiveTemplate.hbs";
import summaryTemplate from "../template/summary.hbs";

export default function moveToActiveList(e, status, refs) {
  const updatedNotesList = changeNoteStatus(e, status);

  setToLocalStorage("notes", updatedNotesList);

  updateMarkup(refs.notes(), "active", notesTemplate);
  updateMarkup(refs.archived(), "archived", archiveTemplate);
  updateMarkup(refs.summary(), null, summaryTemplate);
}
