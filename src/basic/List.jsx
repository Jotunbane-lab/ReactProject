import React from "react";
import {Field} from "./Field";

export function List(props) {
    const[tasks, setTasks] = React.useState([
        {text: 'Ala'},
        {text: 'ma'},
        {text: 'kota', state: 'done'}
    ]);

    
    function renderTask(task, index) {
        return <Field task={task} key={index}/>
    }

    return <div>
        {tasks.map(renderTask)}
    </div>

}