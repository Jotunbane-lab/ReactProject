import React from "react";
import {Button} from "./Button";

export function Field(props) {
    const fieldState = (props.task.done);
    const deadline = (props.task.date);

    function checkDeadline() {
        const from = new Date();
        const to = new Date(from);
        to.setDate(to.getDate() + 7);

        if ((deadline <= to && deadline >= from)) return "deadline";
    }

    return <div className={"field " + (fieldState && "done") + (checkDeadline())}>
        {props.task.text + " "}
        {props.task.date}
        <Button task={props.task} onChange={props.onChange}/>

    </div>


}