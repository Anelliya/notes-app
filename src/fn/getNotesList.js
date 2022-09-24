export default () => {
  const notesList = localStorage?.getItem("notes");
  return JSON.parse(notesList);
};
