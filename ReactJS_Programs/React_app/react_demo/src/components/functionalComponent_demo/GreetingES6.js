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
    //state of primitive numeric
    var initialAge = 24

    const [age, setAge] = useState(initialAge);

    const changeAge = () => {
        if (age % 5 === 0)
            setAge(age + 5);
        else
            setAge(age + 1);
    }


    //state of string type variable
    const myName = "Jeh"
    const [ mName , setNm ] = useState(myName);

    //state of object type variable

    const [address, setAddress] = useState({doorNum:201, street:"1st cross road", road:"Dynasty layout, Mariyannanapalya", city:"Bangalore", state:"Karnataka"});


    return (
        <div>HELLO I AM  {props.name} and I AM {age}<br />
        

            {/* 1st way */}
            <button onClick={() => setAge(age + 1)}>Change Age</button><br/>
            {/* 2nd way */}
            <button onClick={changeAge}>Change Age by 5  if it is div by 5 otherwise 1 </button><br/>
            NAME: {mName}
            <button onClick={() => setNm("Pooja")}>Change name</button><br/><br/>
            
            Address: {address.doorNum}, Street: {address.street}, Road: {address.road}, City: {address.city}, State: {address.state}<br/><br/>
            <button onClick={() => setAddress({...address, doorNum:501})}>CHANGE DOOR NUMBER</button><br/><br/>

        </div>
    );
}
export default GreetingES6;