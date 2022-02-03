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
    var initialAge = 24

    const [age, setAge] = useState(initialAge);
    
    const changeAge = () => {
        if (age % 5 === 0)
            setAge(age + 5);
        else
            setAge(age + 1);
    }



    return (
        <div>HELLO I AM  {props.name} and I AM {age}<br />

            {/* 1st way */}
            <button onClick={() => setAge(age + 1)}>Change Age</button><br/>
            {/* 2nd way */}
            <button onClick={changeAge}>Change Age by 5  if it is div by 5 otherwise 1 </button>

        </div>
    );
}
export default GreetingES6;