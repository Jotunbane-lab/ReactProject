import React from "react";

export function Field(props){

    const Deadline = (props.task.deadLine);
    const fieldState = (props.task.done);

    return <div className={"field " +(fieldState && "done")}>
        {props.task.text}


    </div>


}