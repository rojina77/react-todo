import logo from './logo.svg';
import './App.css';
import './TodoList';
import './AddTodoForm';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

   
function App() {
  return (
    <div>
      <h1> 
        Todo List
      </h1>
      <AddTodoForm/>
      <TodoList/>
    </div>    
  );
}

export default App;
