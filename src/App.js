import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import TodoDetail from "./components/TodoDetail";
import LoginForm from './components/LoginForm';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container">
        <Routes>
          <Route exact path="/" Component={Todos} />
          <Route exact path="/tasks" Component={Todos} />
          <Route exact path="/tasks/:id" Component={TodoDetail} />
          <Route exact path="/add" Component={AddTodo} />
          <Route exact path="/login" Component={LoginForm} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
