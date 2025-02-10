import './App.css'
import {count_State} from "../src/Store/Atoms/CounterAtom"
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"

function App() {
  
  return (
    <>   
        <Count />    
    </>
  )
}

function Count(){
  console.log("re"); // now it is not re-rendering
    return (<>
     <Buttons />
     <CountRenderer />
  </>)
}

function Buttons(){
  const [count,setCount] = useRecoilState(count_State)
    // the button is still renrendering but it should not , the only thing changing is count value which 
    //which is changing in CountRenderer
  return(<>
     <button onClick={()=>{setCount(count+1)}} >Increament</button>
  </>)
}

function CountRenderer(){
  
  const count = useRecoilValue(count_State)

  return(<>
      <h1>{count}</h1>
  </>)
}


export default App
