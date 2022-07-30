
import './App.scss';
import ToDoApp from './pages/ToDoApp';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div className="App">
        <ToDoApp />
        <ToastContainer />
    </div>
  );
}

export default App;
