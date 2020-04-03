const add_todo_btn = document.getElementById("add-btn");
const todo_input = document.getElementById("todo-input");
const list = document.getElementById("list");
add_todo_btn.addEventListener("click", function() {
  const todo = todo_input.value;

  const item = document.createElement("div");
  item.classList.add("item");

  const item_text = document.createElement("div");
  item_text.classList.add("item-text");
  item_text.textContent = todo;

  const divElement = document.createElement("div");

  const remove_btn = document.createElement("button");
  remove_btn.classList.add("action-btn");
  remove_btn.classList.add("remove-btn");
  remove_btn.textContent = "remove";

  remove_btn.addEventListener("click", function() {
    item.parentNode.removeChild(item);
  });

  divElement.append(remove_btn);
  item.append(item_text);
  item.append(divElement);
  list.append(item);

  todo_input.value = "";
});
