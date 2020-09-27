import React from "react";
import {Button} from "./Button";

export function Field(props){
    const fieldState = (props.task.done);

    return <div className={"field " + (fieldState && "done")}>
        {props.task.text+" "}
        {props.task.date}
        <Button task={props.task} onChange={props.onChange}/>

    </div>


}