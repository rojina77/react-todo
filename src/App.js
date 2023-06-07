import logo from './logo.svg';
import './App.css';

const todoList= [
  {id:1,title:"Read the materials"},
  {id:2,title: "Review coding"},
  {id:3,title: "Submit assignment"}
];
   
function App() {
  return (
    <div>
      <h1> 
        Todo List 
      </h1>
      <ul>
         {todoList.map 
            (function(item)
              {
            return <li key ={item.id}>
                  {item.title}
                  </li>;
              }
            )
          }
      </ul>
    </div>    
  );
}

export default App;
