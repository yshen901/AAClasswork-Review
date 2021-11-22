// Receives the entire state
export const allTodos = (state) => {
  return Object.values(state.todos);
};

export const allErrors = state => {
  return Object.values(state.errors);
};

// Retrieves steps for a specific todo
export const todoSteps = (state, todoId) => {
  let steps = Object.values(state.steps);
  let selectedSteps = [];
  for (let i = 0; i < steps.length; i++) 
    if (steps[i].todo_id == todoId)
      selectedSteps.push(steps[i]);
  return selectedSteps;
};