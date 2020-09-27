import React from "react";
import {Field} from "./Field";

export function List(props) {
    const array = [
        {text: 'Ala'},
        {text: 'ma'},
        {text: 'kota'}
    ]
    
    function renderList(text, index) {
        return <Field{...text} key={index}/>
    }

    return <div>
        {array.map(renderList)}
    </div>

}