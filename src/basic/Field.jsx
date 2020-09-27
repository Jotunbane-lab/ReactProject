import React from "react";

export function Field(props){

    const isDeadline = props.task.isDeadline;


    return <div className={"field"}>
        {props.task.text}


    </div>


}