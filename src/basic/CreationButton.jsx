import React from "react";

export function CreationButton(props){
    function addTask(){
        const el = "0";
        return props.tasks.contact([el]);
    }
    return<div>
        <form>
            <label htmlFor="newInput">Dodaj zadanie</label>
            <input type={"textarea" } required id={"newInput"}/>
            <button onClick={addTask}>Wyślij</button>
        </form>"
    </div>
}