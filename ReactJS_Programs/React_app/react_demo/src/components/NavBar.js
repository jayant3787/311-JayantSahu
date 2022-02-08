import { NavLink } from "react-router-dom";
import './NavBar.css'
const NavBar = () =>{
    return(

        <div>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">Home</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/apps">App1</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/players">Players</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/form-demos">PlayerRegistration</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/form-demos1">ControlledFormDemo</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/form-demos2">ControlledFormDemoWithMore</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/form-demos3">FormDemo</NavLink>
      </div>

    )
}

export default NavBar;