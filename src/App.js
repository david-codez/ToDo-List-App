
import './App.scss';
import ToDoApp from './pages/ToDoApp';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
        <Header />
        <ToDoApp />
        <ToastContainer />
    </div>
  );
}

export default App;
