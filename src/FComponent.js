import React, {useState} from "react";

export default function FComponent(props) {
    const [age, setAge] = useState(0);
   
    return (
        <div>
            <button onClick={() =>setAge(age+1)}>Add age
            </button>
            <h1>Hello from  {props.fName} {props.lName} age: {age}</h1>
        </div>
    )
}
FComponent.defaultProps = {
    fName: "Raikhan",
     lName: "Imanbay",
}