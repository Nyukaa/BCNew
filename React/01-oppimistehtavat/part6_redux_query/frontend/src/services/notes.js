const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return await response.json();
};

const createNew = async (content) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, important: false }),
  };

  const response = await fetch(baseUrl, options);

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json();
};
const updateImportance = async (id, changedNote) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "PUT", // или PATCH
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changedNote),
  });

  if (!response.ok) {
    throw new Error("Failed to update note");
  }

  return await response.json();
};
export default { getAll, createNew, updateImportance };
