function Todo({
    tasks,
    input,
    setInput,
    addTask,
    deleteTask,
    logout
}) {

    return (

        <div>

            <button
                onClick={logout}
                style={{
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                    padding: "10px 15px",
                    cursor: "pointer"
                }}
            >
                Logout
            </button>

            <h1>My To-Do List</h1>

            <input
                placeholder="Enter a new task"
                value={input}
                onChange={(event) =>
                    setInput(event.target.value)
                }
            />

            <button
                onClick={addTask}
            >
                Add Task
            </button>

            {tasks.map((task) => (

                <div key={task._id}>

                    <span>
                        {task.task}
                    </span>

                    <button
                        onClick={() =>
                            deleteTask(task._id)
                        }
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>

    );

}

export default Todo;