import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import notesTemplate from "./template/noteItem.hbs";
import "./assets/icons/sprite.svg";
import { v4 as uuidv4 } from "uuid";

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

const findDates = (str) => {
  const regexp = /(0?[1-9]|[12]\d|3[01]|[1-9])(?<sep>[\.\/\-])([0][1-9]|1[0-2]|[1-9])\k<sep>(202[1-9])/g;

  const dates = str.match(regexp);
  console.log(Array.isArray(dates));
  dates ? (noteData.dates = dates.join(",")) : null;

  console.log("dates in store", noteData.dates);
};

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
}

function handleListUpdate(e) {
  noteData.created = new Date().toDateString();
  noteData.id = uuidv4();
  findDates(noteData.content);
  console.log("noteData", noteData);
  notes.push(noteData);
  updateMarkup(notes);
  console.log("notes", notes);

  noteData = { ...resetData };
  clearForm(refs.nameInput, refs.contentInput);
}

function updateData(e) {
  noteData[e.target.name] = e.target.value;

  noteData.name || noteData.content
    ? refs.btnSave.removeAttribute("disabled")
    : refs.btnSave.setAttribute("disabled", "true");
}
