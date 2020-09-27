import React from "react";

export function Field(props){
    const fieldState = (props.task.done);

    return <div className={"field " +(fieldState && "done")}>
        {props.task.text}


    </div>


}