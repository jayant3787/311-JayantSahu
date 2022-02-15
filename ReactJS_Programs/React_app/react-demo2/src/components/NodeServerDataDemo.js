import {connect} from 'react-redux';
import '../components/Node.css';

const NodeServerDataDemo = (props) =>{

    return(
        <div>
        {/* <table style="width:100%">
  <tr>
    <th>NAME</th>
    <th>AGE</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */}
        <table>
        <tr style={{backgroundColor:"yellow"}}>
        <td>NAME</td>
        <td>AGE</td>
        <td>AWARDS</td>
        </tr>
            {props.playersData.map((item,key)=><tr><td> {item.name}</td><td> {item.age} </td><td>{item.awards?item.awards.join(","):""} </td></tr>)}
            </table><hr/>
        <button onClick={props.getNodeAppData}>Click here to get data from node server

        </button>
        </div>

    )

}

const mapStateToProps = (state) =>{
    return{
    playersData : state.reducer5
}

}


const mapDispatchToProps = (dispatch) =>{
    return{
    getNodeAppData :() => dispatch({type:'GET_APP_DATA'})
}

}

export default connect(mapStateToProps, mapDispatchToProps)(NodeServerDataDemo);

