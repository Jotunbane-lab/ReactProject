import React from "react";
import {Field} from "./Field";
import {CreationButton} from "./CreationButton";

export function List(props) {
    const[tasks, setTasks] = React.useState([
        {text: 'Ala', done: false},
        {text: 'ma', done: false},
        {text: 'kota', done: true}
    ]);

    function handleChange(task) {
        task.done = !task.done;
        setTasks([...tasks]);
    }

    function renderTask(task, index) {
        return <Field task={task} key={index} onChange={handleChange}/>
    }
    function handleNewTaskCreation(newTask){
        setTasks([...tasks, newTask]);
    }

    return <div>
        {tasks.map(renderTask)}
        <CreationButton onCreate={handleNewTaskCreation}/>
    </div>

}