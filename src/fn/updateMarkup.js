import layoutMarkup from "./layoutMarkup.js";

export default function updateMarkup(refs, status, template) {
  refs.innerHTML = "";
  layoutMarkup(refs, status, template);
}
