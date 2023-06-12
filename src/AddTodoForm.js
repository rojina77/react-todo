import *as React from 'react';

function AddTodoForm() {
    return (
        <form>
            <label> Title 
            <input type = "todoTitle" />
            <htmlFor id = "todoTitle"> </htmlFor>
             <input type = "submit" />
            </label> 
        </form>
    );
}

export default AddTodoForm;
