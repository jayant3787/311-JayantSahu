import { useState } from "react";
// using arrow function
const GreetingES6 = (props) => {
    // var state={
    //     age:25
    // }
    // const changeAge =() =>{
    //      state.age++;

    // }

    // Hooks usage demo
    var initialAge = 25
    const [age, setAge] = useState(initialAge);
    // setAge = () =>{
    //     age++;
    // }
    


    return (
        <div>HELLO I AM  {props.name} and MY AGE IS {age}<br/>
        <button onClick={()=>setAge(age+1)}>Change Age</button>
        </div>
    );
}
export default GreetingES6;