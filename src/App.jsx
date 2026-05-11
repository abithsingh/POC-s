import { useState } from "react";
import "./App.css";
import TaskCard from "./components/board/Taskcard";
import AddTaskForm from "./components/board/AddTaskForm";

function App() {
  console.log(":ABith");
  return <div>
    <TaskCard />
    <AddTaskForm />
  </div>
}

export default App;
