import { useRef } from "react";
import PlayerComponent from "./PlayerComponent";
 const ScoreBoardComponent = (props) =>{

    const ref1 = useRef();
    const ref2 = useRef();
    // const ref3 = useRef();
    // const ref4 = useRef();


    const changeScores = () => {
        ref1.current.f1();
        ref2.current.f1();
     
        // var score1 = ref1.current.state.score;
        // var score2 = ref2.current.state.score;
        // alert(score1);
    
        // var lastScore1 = ref1.current.state.lastScore;
        // var lastScore2 = ref2.current.state.lastScore;
    
        // ref4.current.setState((state,props)=>({commentary:`${ref1.current.props.name} scored runs ${lastScore1} and ${ref2.current.props.name} scored runs ${lastScore2}`}))
    
    
        // if(score1>50){
        //   // alert(score1);
        //   ref3.current.setState((state,props)=>({message:`${ref1.current.props.name} is winner`}))
        //   ref4.current.setState((state,props)=>({commentary:`${ref1.current.props.name} reaches his half century`}))
    
        // }
        // else if(score2>50){
        //   // alert(score1);
        //   ref3.current.setState((state,props)=>({message:`${ref1.current.props.name} is Winner`}))
        //   ref4.current.setState((state,props)=>({commentary:`${ref2.current.props.name} reaches his half century`}))
    
    
        // }
    
    
      };
    
  

      
          return(
  <div style={{border:"5px solid orange"}}>
          <PlayerComponent name="Virat" ref={ref1} score={50}/>
          <PlayerComponent name="Rohit" ref={ref2} score={50}/>

          <button onClick={changeScores}>change score</button>

        </div>
          )
      
  
  
  
  }
  
  export default ScoreBoardComponent;