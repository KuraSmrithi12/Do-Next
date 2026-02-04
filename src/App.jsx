import Taskform from './Components/taskform.jsx';
import TaskList from './Components/TaskList.jsx';
import Progresstracker from './Components/Progresstracker.jsx';         

function App() {
  return (
    <div>
    <h1>Do Next</h1>
    <p>Your next task, done right.</p>
    <Taskform />
    <TaskList />
    <Progresstracker />
    <button>Clear all tasks</button>
    </div>
  )
}

export default App;