import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import notesTemplate from "./template/noteItem.hbs";
import "./assets/icons/sprite.svg";

import notes from "./active_notes.json";
//import noteItem from "./template/handlebars.hbs";

//console.log(notes);

const refs = {
  notes: document.querySelector("#list-of-active-notes"),
  form: document.querySelector(".modal-content"),
  btnSave: document.querySelector("#save-btn"),
  nameInput: document.querySelector(".name"),
  contentInput: document.querySelector("#content"),
  category: document.querySelector("#category"),
  edit: document.querySelector("#edit-btn"),
  archived: document.querySelector("#archive-btn"),
  edit: document.querySelector("#delete-btn"),
};

layoutMarkup(refs.notes, notes);

const resetData = {
  id: null,
  name: null,
  created: null,
  category: "Task",
  content: null,
  dates: null,
};

let noteData = { ...resetData };

refs.btnSave.addEventListener("click", handleListUpdate);
refs.nameInput.addEventListener("input", updateData);
refs.contentInput.addEventListener("input", updateData);
refs.category.addEventListener("change", updateData);
refs.edit?.addEventListener("click");

function layoutMarkup(refs, data) {
  refs.insertAdjacentHTML("beforeend", notesTemplate(data));
}

function updateMarkup(data) {
  refs.notes.innerHTML = "";
  layoutMarkup(refs.notes, data);
}

function clearForm(...refs) {
  refs.map((ref) => (ref.value ? (ref.value = "") : null));
  console.log(refs);
}

function handleListUpdate(e) {
  noteData.created = new Date().toDateString();
  notes.push(noteData);
  updateMarkup(notes);
  noteData = { ...resetData };
  clearForm(refs.nameInput, refs.contentInput);
}

function updateData(e) {
  noteData[e.target.name] = e.target.value;
  noteData.name || noteData.content
    ? refs.btnSave.removeAttribute("disabled")
    : refs.btnSave.setAttribute("disabled", "true");
}
