// Receives the entire state
export const allTodos = (state) => {
  return Object.values(state.todos);
};
window.allTodos = allTodos;