import React, { useState } from 'react';
import '../App.css';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, taskIndex) => 
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">My To Do List</h1>
          <div className="flex mb-4">
            <input 
              type="text" 
              value={taskInput} 
              onChange={(e) => setTaskInput(e.target.value)} 
              placeholder="Enter a new task" 
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={addTask} 
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li key={index} className="flex justify-between items-center p-2 border border-gray-300 rounded-lg">
                <span className={task.completed ? "line-through" : ""}>
                  {task.text}
                </span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => toggleTaskCompletion(index)} 
                    className={`px-2 py-1 rounded-lg ${task.completed ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-white'}`}
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  
                  <button 
                    onClick={() => removeTask(index)} 
                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                  
                </div>
              </li>
            ))}
          </ul>
          <div className="mb-4 text-center my-2 bg-red-300 rounded-full ">
                  <p>Total Tasks: {totalTasks}</p>
                  <p>Completed Tasks: {completedTasks}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
