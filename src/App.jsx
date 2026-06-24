import { useState, useEffect } from "react";
function App() {

  console.log("App rendered");
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {

    const token =
        localStorage.getItem("token");
    if(token) {
        setPage("todo");
    }
}, []);

async function login(){
  const response =
  await fetch("https://vedant-todo-backend.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if(data.token) {
    localStorage.setItem("token", data.token);
    setPage("todo");
    getTasks();
  }
  else{
    alert(data.message);
  }
}
  
  async function getTasks() {
    console.log("getTasks running");
    const token = localStorage.getItem("token");
    const response = await fetch("https://vedant-todo-backend.onrender.com/tasks", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();

    setTasks(data);
    
}
useEffect(() => {
  getTasks();
}, []);
 async function addTask() {
    if (input.trim() !== "") {
      const token = localStorage.getItem("token");
      const response = await fetch("https://vedant-todo-backend.onrender.com/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: input })
      });
        const data = await response.json();
        setTasks(data);
        setInput("");
        
      
    }
  }
   async function deleteTask(id) {
    const response = await fetch(
        "https://vedant-todo-backend.onrender.com/tasks",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        }
    );

    const data = await response.json();

    setTasks(data);
} 
    console.log(tasks);

  if(page === "login") {
    return (
        <div>
            <h1>Login</h1>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />
            <button onClick={login}>
                Login
            </button>
            <button onClick={() =>
                setPage("register")
    }
>
    Register Instead
</button>
        </div>
    );
}
  return (
    <div> 
      <h1>My To-Do List</h1>
      <input
        placeholder="Enter a new task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
    <div key={task._id}>
        <span>{task.task}</span>

        <button
            onClick={() => deleteTask(task._id)}
        >
            Delete
        </button>
    </div>
))}
    </div>
  );
}
export default App;