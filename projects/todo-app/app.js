//! The database model looks like this:
var newTodo = {
  title: "Title here", // this one is the only thing that is actually required
  description: "Description here",
  price: 20, // Must be a number of some kind (integer or float)
  imgUrl: "http://www.example.com/some-link-to-a-cool-photo.jpg",
  completed: true // must be a boolean (true or false). If nothing provided, defaults to false.
};

var todoList;

// You should get rid of these comments
//? CRUD
//? GET all the todos from the database and assign them to the variable "todoList"
function getTodos() {
  return axios.get("https://api.vschool.io/jameelmatin/todo");
}

function deleteTodos(todoId) {
  return axios.delete("https://api.vschool.io/jameelmatin/todo/" + todoId);
}

//? DELETE todo
function onDeleteTodo(elm, todoObj) {
  console.log("this is elm==>", elm);
  console.log("this is todoObj ==>", todoObj);
  var todoId = todoObj._id;
  console.log("this is todoId ==>", todoId);
  deleteTodos(todoId)
    .then(function() {
      // this delete is tied to the element on the <li classname="todo-item" id="todo-${todo._id"
      var todoLi = document.getElementById("todo-" + todoId);

      // remove it here
      todoLi.parentNode.removeChild(todoLi);
    })
    .catch(function(e) {
      console.log("something went wrong deleting your todo", e);
    });
}

function onCompleteTodo(elm, todoObj) {
  todoObj.completed = !!elm.value;
  console.log("todoObj.!elm.value==>", !!elm.value);
  console.log("todoObj.completed==>", todoObj.completed);
  console.log("this is elm==>", elm);
}

function processTodoClick(clickEvent, todoObj) {
  switch (clickEvent.target.className) {
    case "completed":
      onCompleteTodo(clickEvent.target, todoObj);
      break;
    case "delete":
      onDeleteTodo(clickEvent.target, todoObj);
  }
}

function createTodoElm(todoObjFromServer) {
  var todoObj = todoObjFromServer || {};
  var li = document.createElement("li");
  li.id = "todo-" + todoObj._id;
  li.className = "todo-item";

  //? change it to element like h1
  li.innerHTML = `
        <div class="action-container">
            <div class="todo-values">
            <h1 class="todo-title" id="title">  ${todoObj.title} </h1>
            <p class="todo-description"> ${todoObj.description}  </p>
            <p class="todo-price">$${todoObj.price}</p>
            <img src=${todoObj.imgUrl} class="todo-imgUrl">
            </div>
            <div class="todo-actions">
                <label htmlFor="todo-completed-${todoObj.id}">Completed</label>
                <input type="checkbox" id="check" name="todo-completed-${
                  todoObj.id
                }" class="completed"  />
            
                <button class="delete">Delete</button>
            </div>
        </div>
    `;

  li.onclick = function(e) {
    processTodoClick(e, todoObj);
  };
  return li;
}

function createTodoList(listOfTodos) {
  var baseElm = document.getElementById("todos");
  baseElm.innerHTML = "";

  listOfTodos.map(function(todo) {
    var li = createTodoElm(todo);
    baseElm.appendChild(li);
    if (document.getElementById("check").checked) {
      li.style.textDecoration = "line-through";
      document.getElementById("title").style.textDecoration = "line-through";
    }
  });
}

function bootstrap() {
  getTodos()
    .then(function(response) {
      return response.data;
    })
    .then(createTodoList)
    .catch(function(e) {
      console.log("Could not get todos", e);
    });
}

bootstrap();
// todoList = response.data;

//? I can add an click handler and this will pass the entire todo object to the function we called.
document.todoForm.addEventListener("submit", function(e) {
  e.preventDefault();
  //? Grab the data from the input field
  var title = document.todoForm.title.value;
  var description = document.todoForm.description.value;
  var price = document.todoForm.price.value;
  var image = document.todoForm.imgUrl.value;

  //? POST to server
  axios
    .post("https://api.vschool.io/jameelmatin/todo", {
      title: title,
      description: description,
      price: price,
      imgUrl: image,
      completed: true
    })
    .then(function(response) {
      console.log("this is response.data==>", response.data);
      bootstrap();
    });
});

var deleteTodo = function(singleTodoObject) {
  // This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
  // I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
  axios
    .delete("https://api.vschool.io/jameelmatin/todo" + singleTodoObject._id)
    .then(
      function(response) {
        // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
        // Assuming I used the object from the example above.
        alert("Your todo was successfully deleted!");
      },
      function(response) {
        alert("There was a problem deleting your todo :(");
      }
    );
};
