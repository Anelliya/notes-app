export default function setFormValue(e, newNoteData, refs) {
  newNoteData[e.target.name] = e.target.value;

  newNoteData.name || newNoteData.content
    ? refs.forEach((ref) => {
        ref["#save-btn"] ? ref["#save-btn"].removeAttribute("disabled") : null;
      })
    : refs.forEach((ref) => {
        ref["#save-btn"]
          ? ref["#save-btn"].setAttribute("disabled", true)
          : null;
      });
}
