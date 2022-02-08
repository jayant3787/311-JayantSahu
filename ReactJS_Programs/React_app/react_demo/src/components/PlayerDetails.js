import { useParams } from "react-router";
import { useEffect, useState } from "react";

const PlayerDetails = (props) => {
    const playerData = [
        { name: "peter", age: 25, role: "Batsman", country: "India", totRuns: 20000 },
        { name: "mohan", age: 26, role: "Bowler", country: "India", totRuns: 500 }
    ];

    const playerName = (name) => {
        for (let i = 0; i < playerData.length; i++) {
            if (playerData[i].name === name) return playerData[i];
        }
        return null;
    }
    const { name, age, role, country, totRuns } = useParams();
    const [player1, setPlayer1] = useState({});

    useEffect(() => {
        setPlayer1(playerName(name));
        // console.log('player1 details', + player1.name);

    },
        [player1],
    );

    let player2 = playerName(name);

    return (
        <div>
            <p>I am {name}<br /> My age is {age ? age : ""}<br /> My role in the team is {role ? role : ""} <br /> I am from {country ? country : ""} <br />I have made total {totRuns ? totRuns : ""} runs</p><br />
            solution 1:
            <p>The details are already present: {playerName(name) == null ? <p>Player not found</p> :
                <p>{playerName(name).age}</p>
            }</p><br />
            solution 2 (based on useEffect):
            {
                player1 ? player1.name : "Not Found"
            }<br /><br />

            solution 3 (based on useEffect):
            {
                player2 ? player2.name : "Not Found"
            }

        </div>
    )
}

export default PlayerDetails;