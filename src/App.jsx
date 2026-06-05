import { useState, useEffect } from "react";
function App() {
  console.log("App rendered");
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  
  async function getTasks() {
    console.log("getTasks running");
    const response = await fetch("http://localhost:5002/tasks");

    const data = await response.json();

    setTasks(data);
    
}
useEffect(() => {
  getTasks();
}, []);
 async function addTask() {
    if (input.trim() !== "") {
      const response = await fetch("http://localhost:5002/tasks", {
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
        "http://localhost:5002/tasks",
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