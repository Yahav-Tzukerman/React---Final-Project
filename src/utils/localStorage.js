export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined; // No saved state, return undefined
    }
    return JSON.parse(serializedState); // Parse and return saved state
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = ({ app }) => {
  try {
    const serializedState = JSON.stringify({
      app,
    });
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
