import Login from "./components/Login";
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
        getTasks();
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
  setEmail("");
  setPassword("");
}

async function register() {
    const response = await fetch(
        "https://vedant-todo-backend.onrender.com/register",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }
    );
    const data = await response.json();
   if(data.message){
    alert(data.message);
   }
   else{
    alert("User registered successfully");
   }
    setPage("login");
  setEmail("");
  setPassword("");
}

function logout() {

    localStorage.removeItem(
        "token"
    );
    setTasks([]);
    setPage("login");

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

 async function addTask() {
    if (input.trim() !== "") {
      const token = localStorage.getItem("token");
      const response = await fetch("https://vedant-todo-backend.onrender.com/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
         },
        body: JSON.stringify({ task: input })
      });
        const data = await response.json();
        setTasks(data);
        setInput("");
        
      
    }
  }
   async function deleteTask(id) {
    const token = localStorage.getItem("token");
    const response = await fetch(
        "https://vedant-todo-backend.onrender.com/tasks",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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
        <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            login={login}
            setPage={setPage}
        />
    );
}
  if (page === "register") {
    return (
      <div
        style={{
       display: "flex",
       flexDirection: "column",
       gap: "10px",
       width: "250px",
       margin: "100px auto"
      }}
      >
        <h1>Register</h1>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <button onClick={() => setPage("login")}>Login Instead</button>
      </div>
    );
  }
  return (
    <div>
      <button
    onClick={logout}
    style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "250px",
    margin: "100px auto"
    }}
      >
    Logout
      </button>
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