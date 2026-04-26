import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Tasklist from "./components/TaskList/Tasklist.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Settings from "./components/Settings/Settings.jsx";
import "./App.css"

function App() {
  const [project, setProject] = useState([])
  const [projectname, setProjectname] = useState("My Tasks")
  const [selectedproject, setSelectedproject] = useState(1)
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("all")
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed
    if (filter === "incomplete") return !task.completed 
    return true
  })

  function addProject(){
    const newpj = {
      id: 1,
      name: "project1",
      tasks: [
        {id: Date.now(),
        text: input,
        completed: false}
      ]
    }
  }

  function addTask() {
    if (input.trim() === "") return

    const newtask = {
    }

    setTasks([...tasks, newtask])
    setInput("")
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <BrowserRouter>  
      <Header />
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="*" element={<Navigate to="/tasklist" />} />
          <Route path="/tasklist" element={<Tasklist 
            tasks={filteredTasks}
            filter={filter}
            setFilter={setFilter}
            input={input}
            setInput={setInput}
            addTask={addTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App