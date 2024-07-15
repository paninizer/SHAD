import { useState } from 'react';
import '../App.css';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

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

  // Add remove button function here 
  const removeTask = (index) => {
    const newTasks = tasks.filter((_task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }

  return (
    <div>
      <div class = "flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
        <h1 class="text-3xl font-bold">ToDo List</h1>
        <ul class = "flex gap-[40px]">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/home">Home</a></li>
        </ul>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-blue-500">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">My To Do List</h1>
          {/* Add total tasks counter and total completed counter */}

          <div className="mb-4 text-center my-2 bg-blue-300 rounded-full ">
                  <p>Total Tasks: {tasks.length}</p>
                  <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
          </div>

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
                  
                  {/* Add a remove button here */}
                  <button 
                    onClick={() => removeTask(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
