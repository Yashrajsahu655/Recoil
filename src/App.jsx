import { useRecoilState } from "recoil";
import "./App.css";
import { TodosAtom } from "./Store/Atoms/Todos";

function App() {
      const [Todos,setTodos] = useRecoilState(TodosAtom);
      console.log(Todos);

      if (!Todos || Todos.length === 0) {
        return <h3>No Todos available</h3>;
      }
      
  return (
    <>
      {Todos.map((todo)=>{
         return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
         )
      })}
    </>
  );
}




export default App;
