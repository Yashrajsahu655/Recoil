import "./App.css";
import { count_State } from "../src/Store/Atoms/CounterAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  return (
    <>
      <Count />
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

export default App;
