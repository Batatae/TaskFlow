import { useState, useRef } from "react";
import "./Tasklist.css"
import * as icons from "./../../assets/icons"

function TasksDisplay({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      <div className="task-header-content">
        <div className="task-header">
          <div className="task-item">
            <span>Tasks</span>
          </div>
          <div className="task-actions">
            <span>Complete</span>
            <span>Remove</span>
          </div>
        </div>
      </div>
      <div className="task-body">
        {tasks.length > 0 ? tasks.map((task) => (
          <>
          <div key={task.id} className={task.completed ? "task-completed" : "task"}>
            <div className="task-item">
              <span className="task-text">
                {task.text}
              </span>
            </div>
            <div className="task-actions">
              <input 
                type="checkbox" 
                className="complete-button" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                <img src={icons.removeIcon} alt="Delete" /> 
              </button>
            </div>
          </div>
          <hr></hr>
          </>
        )) :  <div className="no-tasks">
                <span>No tasks added Yet..</span>
              </div>
          }
      </div>
    </div>
  )
}

function Tasklist({ tasks, input, setInput, addTask, deleteTask, toggleTask, setFilter, filter}) {
  const [showInput, setShowInput] = useState(false)
  const containerref = useRef(null)
  return (
    <div className="main-content">
      <h2>PROJECTNAME</h2>
      <div className="uppertasks">
        <div className="task-stats">
          <span>Progress: {tasks.filter(t => t.completed).length}/{tasks.length}</span>
        </div>
        <div className="task-filters">
            <span>Filters: </span>
            <button onClick={() => setFilter("all")} className={filter === "all" ? "selected" : "filters-btn"}>All</button>
            <button className={filter === "completed" ? "selected" : "filters-btn"} onClick={() => setFilter("completed")}>Completed</button>
            <button className={filter === "incomplete" ? "selected" : "filters-btn"} onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>
      </div>

      <div className="task-display">
        <TasksDisplay 
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>

      <div className="task-input" ref={containerref}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)){
          setShowInput(false)
        }
      }}>

        {!showInput ? 
        (<button className="seeinputbtn"
        onClick={() => setShowInput(true)}
        >  
          Add A new Task
        </button>)
        : (        
        <>
        <input 
          className="addtaskinput"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="addtaskbtn">Add Task</button>
        </>
        )}
      </div>
    </div>
  )
}

export default Tasklist