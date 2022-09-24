import getNotesList from "./getNotesList";

export default function getNotesSummary() {
  const notesList = getNotesList();

  let summaryData = {
    Task: {
      totalActive: 0,
      totalArchived: 0,
    },
    "Random Thought": {
      totalActive: 0,
      totalArchived: 0,
    },
    Idea: {
      totalActive: 0,
      totalArchived: 0,
    },
  };

  notesList.forEach(({ category, status }) => {
    if (status === "active") {
      summaryData[category].totalActive += 1;
    }

    if (status === "archived") {
      summaryData[category].totalArchived += 1;
    }
  });

  return summaryData;
}
