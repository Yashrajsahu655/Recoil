import { useRecoilValue } from "recoil";
import "./App.css";
import { todo } from "./Store/Atoms/TodoAtomFamily"; 

function App() {
  return (
    <>
      <Todo id={1} />
      <Todo id={2} />
    </>
  );
}

function Todo({ id }) { 

  const todoItem = useRecoilValue(todo(id)); 
  
  return (
    <>
      <h1>{todoItem.title}</h1>
      <h2>{todoItem.description}</h2>
    </>
  );
}

export default App;


// atomFamily in Recoil
// An atomFamily in Recoil allows you to create multiple independent atoms dynamically based on a parameter. It is useful when you need a separate atom instance for each unique key, such as managing state for multiple todos, users, or items.

// Why Use atomFamily?
// Instead of creating multiple atoms manually, atomFamily lets you generate them dynamically.
// Each atom is independent but shares the same structure.
// Useful when dealing with dynamic lists, caching, and parametrized state.

// When to Use atomFamily?
// ✅ Managing multiple independent items dynamically (e.g., todos, users, posts).
// ✅ Avoiding manually creating separate atoms for each instance.
// ✅ When different components should have their own separate state but follow the same structure.