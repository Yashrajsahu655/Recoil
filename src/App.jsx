import "./App.css";
import {Filter, FilteredData, Todo} from "../src/Store/Atoms/TodoAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";


function App() {
       const[title,setTitle] = useState("");
       const[description,setDescription] = useState("");
       const [todos,setTodo] = useRecoilState(Todo);
       
       const [filter,setFilter] = useRecoilState(Filter);
       const filterdata = useRecoilValue(FilteredData); 
       
       const Submit = () =>{
           if(title.trim() === "" || description.trim() === ""){
            alert("Please fill all the fields");
            return;
           }

          setTodo([
            ...todos,
            {
              id:setId(),
              title:title,
              description:description
            }
          ])
          setTitle("");
          setDescription("");

       }

       const submitFilter =()=>{
           const filterValue = filterdata;
           setTodo(filterValue)
       }

  return (
    <>
       <input type="text" id="title" placeholder="title" onChange={(e)=>setTitle(e.target.value)} /><br />
       <input type="text" id="description" placeholder="description" onChange={(e)=>setDescription(e.target.value)} /><br />
       <button className="cursor-pointer" onClick={Submit} >Add Todo</button>
       <br />
       <br />
       <br />
       <input type="text" id="filter" placeholder="filter" onChange={(e)=>setFilter(e.target.value)} /><br />
       <button onClick={submitFilter} >filter</button>
       <br />
       <br />
       <div>{
            todos.map((todo)=>{
              return (
                <div key={todo.id}>
                 <h3>{todo.title}</h3>
                 <h3>{todo.description}</h3>
                </div>
              )
            })
       }</div>
    </>
  );
}

let id = 0;
function setId(){
 return id++;
}


export default App;
