import * as React from 'react';
import App from './App';

const todoList= [
    {id:1,title:"Read the assigned lesson"},
    {id:2,title: "Review code in VS code"},
    {id:3,title: "Submit assignment"}
  ];

function TodoList() {
    return (
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
     );
}

export default TodoList;
