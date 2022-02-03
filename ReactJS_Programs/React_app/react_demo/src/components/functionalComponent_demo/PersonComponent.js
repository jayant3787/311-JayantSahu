import { useState } from "react";
// using arrow function
const PersonComponent = (props) => {
    var initialScore = 0;
    const [score, setScore] = useState(initialScore);
    const changeScore = () => {
        setScore(score + 4)

    }


    return (
        <div style={{ border: "6px solid blue" }}>HELLO I AM  {props.name} and MY SCORE IS {score}<br />
            <button style={{height:"35px", width:"100px"}} onClick={changeScore}>Change the score by 4 </button>
        </div>
    );
}
export default PersonComponent;