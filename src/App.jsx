import "./App.css";
import { count_State, even_selector } from "../src/Store/Atoms/CounterAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useMemo } from "react";

function App() {
  return (
    <>
      <Count />
      <Even/>
    </>
  );
}

function Count() {
  console.log("re"); // now it is not re-rendering
  return (
    <>
      <Buttons />
      <CountRenderer />
    </>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(count_State);
  // now it is nit re-rendering
  return (
    <>
      <button
        onClick={() => {
          setCount(count=>count + 1);
        }}
      >
        Increament
      </button>
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(count_State);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

function Even(){
  const isEven = useRecoilValue(even_selector);
  
  return <>
     {isEven?"It is even":null}
  </>
}

export default App;
