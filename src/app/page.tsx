'use client';
import { useState } from "react";

const Home = () => {
  const [task, setTask] = useState<string>("");

  const [tasks, setTasks] = useState<string[]>([]);


  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#16423C] via-[#6A9C89] to-[#C4DAD2] flex flex-col items-center justify-center p-4">
      <div className="bg-[#C4DAD2] rounded-lg shadow-lg p-6 max-w-lg w-full space-y-6">
        <h1 className="text-3xl font-semibold text-center text-[#16423C]">My To-Do App</h1>

        <div className="flex items-center space-x-4">
          <input type="text" className="w-full p-3 border border-[#6A9C89] rounded-lg outline-none focus:ring-2 focus:ring-[#16423C]" placeholder="Enter a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <button onClick={addTask} className="bg-[#16423C] text-white px-6 py-3 rounded-lg hover:bg-[#6A9C89] transition">Add Task</button>
        </div>
        <ul className="space-y-4">
          {tasks.map((taskItem, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-[#C4DAD2] rounded-lg shadow-md">
              <span className="text-lg text-[#16423C]">{taskItem}</span>
              <button onClick={() => deleteTask(taskItem)} className="text-[#FF2929] hover:text-red-500 transition"> &times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;