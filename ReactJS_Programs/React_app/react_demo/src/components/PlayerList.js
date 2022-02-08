import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const Playerlist = () => {
    const playerData = [
        { name: "peter", age: 25, role: "Batsman", country: "India", totRuns: 20000 },
        { name: "mohan", age: 26, role: "Bowler", country: "India", totRuns: 500 },
        { name: "virat", age: 27, role: "Batsman", country: "India", totRuns: 21000 },
        { name: "rohit", age: 28, role: "Batsman", country: "India", totRuns: 22000 },
        { name: "dhawan", age: 29, role: "Batsman", country: "India", totRuns: 23000 }
    ];

   

    return (
        <div>
        <NavBar />
        <ul>
            {playerData.map(item => <li>Click here to get the details of  <Link to={`/player/${item.name}`}>{item.name}</Link></li>)}

        </ul>
        </div>

    )
}

export default Playerlist;