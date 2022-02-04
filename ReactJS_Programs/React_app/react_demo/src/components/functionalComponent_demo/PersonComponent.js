import { useState } from "react";
// using arrow function
const PersonComponent = (props) => {
    var initialScore = 0;
    const [score, setScore] = useState(initialScore);
    const changeScore = () => {
        setScore(score + 4)

    }

    //state of array type variable
    const initialInfo = [501, "MCA", "BMS College Of Engineering", "Cricket", "Bangalore", "Karnataka"]
    const [info, setInfo] = useState(initialInfo);


    const initialHobby = ['cricket', 'football', 'carrom','singing']
    const [hobby, setHobby] = useState(initialHobby);

    const changeHobby = () => {

        // another way
        hobby[0] = 'chess';
        let newHobby = [...hobby]
        setHobby(newHobby);

        // one way
        // let [a1,...rest] = hobby;
        // let newHobby = ['chess',...rest];
        // setHobby(newHobby);

    }



    return (
        <div style={{ border: "6px solid green" }}>HELLO I AM  {props.name} and MY SCORE IS {score}<br />
            <button style={{ height: "35px", width: "100px" }} onClick={changeScore}>Change the score by 4 </button><br /><br />

            INFORMATION = ROLL NO {info[0]}, DEGREE: {info[1]}, COLLEGE: {info[2]}, HOBBY:{info[3]},CITY: {info[4]}, STATE: {info[5]}<br /><br />

            <button onClick={() => setInfo([101, ...info])}>CHANGE ROLL NUMBER</button><br /><br />

            INFO:
            <ul>
                {hobby.map(item => <li>{item}</li>)}

            </ul>
            <button onClick={changeHobby}>CHANGE THE HOBBY</button>

        </div>
    );
}
export default PersonComponent;