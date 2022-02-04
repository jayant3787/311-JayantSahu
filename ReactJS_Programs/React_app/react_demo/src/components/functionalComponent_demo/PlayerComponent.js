import { useState } from "react";
const PlayerComponent = (props) => {
  const [state, setState] = useState({
    lastScore: 0,
    score: props.score,
  });

  const f1 = () => {
      alert("inside f1")
    let tempScore = Math.floor(Math.random() * 10);
    setState({ score: state.score + tempScore, lastScore: tempScore });
  };

  return (
    <div style={{ border: "5px solid orange" }}>
      <h2>
        Player Name: {props.name}
        <br />
      </h2>
      <h3>
        Score: {props.score} <br />
      </h3>
      {/* <Message /> */}
    </div>
  );
};

export default PlayerComponent;
