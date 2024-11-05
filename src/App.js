import './App.css';
import Object from './component/Object';

function App() {
  let viratDetails={
    firstName:"Virat",
    lastName:"kohli",
    age:35,
    team :"india",
    bestScore:150,
  }
  console.log(viratDetails);
  console.log(viratDetails.bestScore);
  /*destructuring object*/
  // let {team,age,bestScore}=viratDetails;
  // console.log(team);
  // console.log(age);
  // console.log(bestScore);

  let skyDetails ={...viratDetails};
  skyDetails.firstName="surya kumar";
  skyDetails.lastName="yadav";
  console.log(viratDetails);
  console.log(skyDetails);

  let rohitDetails=["Rohit","Sharma","36","india","150"];

  // console.log(rohitDetails);
  // console.log(rohitDetails[0]);
  // console.log(rohitDetails[3]);
// let firstName=rohitDetails[0];
// let Age =rohitDetails[2];
  let[firstName,lastName,Age,group,score]=rohitDetails;
console.log(firstName,lastName,Age,group,score);
  let abhishekDetails=[...rohitDetails];

 abhishekDetails[0]="abhishek";
 abhishekDetails[2]=25;
 
 console.log(rohitDetails);
 console.log(abhishekDetails);
  let marksDetails =(engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks,passFn,failFn)=>{
let passMarks =35;
if (engMarks>=passMarks&&
    telMarks>=passMarks&&
    hinMarks>=passMarks&&
    sciMarks>=passMarks&&
    socMarks>=passMarks&&
    matMarks>=passMarks)
    {passFn();}
    else{failFn();};
    
}
marksDetails(91,0,44,94,95,96,()=>{console.log("student passed")},
()=>{console.log("student failed")});

  return (
    <div className="App">
    <h2>Callback functions ,arrays and objects</h2>
    <Object firstName="virat" lastName="kohli" age="35"></Object>
    </div>
  );
}

export default App;
