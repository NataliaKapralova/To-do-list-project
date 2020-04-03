const getTasks = async function() {
  const apiURL = `https://wincacademydatabase.firebaseio.com/natalia/tasks.json`;
  try {
    const res = await fetch(apiURL, { method: "GET" });
    console.log("response", res);
    const result = await res.json();
    console.log("Before (the raw result):", result);
    let tasks = Object.keys(result).map(key => ({
      id: key,
      description: result[key].description,
      done: result[key].done
    }));

    return tasks;
  } catch (error) {
    console.log(error);
  }
};
getTasks();

const addTasks = async function(data) {
  console.log(data);
  fetch("https://wincacademydatabase.firebaseio.com/natalia/tasks.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

function deleteData(data) {
  return fetch(
    "https://wincacademydatabase.firebaseio.com/natalia/tasks.json" + data,
    {
      method: "DELETE"
    }
  ).then(response => response.json());
}
// console.log(deleteData);

const doSomethingWithData = async function() {
  const data = await getTasks();
};

doSomethingWithData();

const data = getTasks();

document.getElementById("add-btn").addEventListener("click", function() {
  const todoInput = document.getElementById("todo-input");
  const text = todoInput.value;
  const newTask = { description: text, done: true };

  addTasks(newTask);
});
