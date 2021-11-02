// Lazily initializes the todoList based on contents of localStorage
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
const todoForm = document.getElementsByClassName("add-todo-form")[0];
const todoUL = document.getElementsByClassName("todos")[0];

// Handles submission event
addTodo = (e) => {
  e.preventDefault();
  
  let newTodo = e.target.children[0].value; 
  e.target.children[0].value = "";

  todoList.push({
    value: newTodo,
    done: false
  });

  populateList(todoList);
  pushList(todoList);
};

// Populate the list, starting from the first element not on the UL
// determined based on the idx of the last element in UL.
populateList = (list) => {
  let li;
  for (let i = todoUL.children.length - 1; i < list.length; i++) {
    li = document.createElement("li");
    if (list[i].done)
      li.innerHTML += `
        <input type='checkbox' data-id=${i} checked></input>
        <label>${list[i].value}</label>
      `;
    else 
      li.innerHTML += `
        <input type='checkbox' data-id=${i}></input>
        <label>${list[i].value}</label>
      `;
    todoUL.append(li);
  }
};

updateTodo = (e) => {
  let listIdx = parseInt(e.target.dataset.id);
  todoList[listIdx].done = !todoList[listIdx].done;
  pushList(todoList);
};

pushList = (list) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// Set up listeners and initialize the page
todoForm.addEventListener("submit", e => addTodo(e));
todoUL.addEventListener("change", e => updateTodo(e));
populateList(todoList);