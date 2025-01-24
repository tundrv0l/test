import React, { useState } from 'react';

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()){
        setTasks([...tasks, inputValue]);
        setInput('');
        }
    }

    return (
        <div>
            <h1>To Do List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder='Add a task'
                />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;