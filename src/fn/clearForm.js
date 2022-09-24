export default function clearForm(e) {
  const formRefs = {
    name: document.querySelector(".name"),
    content: document.querySelector("#content"),
  };

  for (let key in formRefs) {
    formRefs[key].value = "";
  }
}
