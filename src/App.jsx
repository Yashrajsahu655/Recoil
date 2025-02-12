import { useRecoilValue, useRecoilValueLoadable } from "recoil";
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

  const todo = useRecoilValueLoadable(todo(id)); 
    
  if(todo.state === "loading"){
    return <div>Loading...</div>;
  }
  else if (todo.state === "hasValue"){
    return (
      <>
        <h1>{todo.contents.title}</h1>
        <h2>{todo.contents.description}</h2>
      </>
    );
  }
  else if (todo.state === "hasError"){
    return <div>Error</div>;
  }
  
}

export default App;

//  useRecoilValueLoadable  are hooks used to interact with Recoil loadable states. Loadable states are a special type of state that can represent asynchronous operations, such as fetching data. These hooks help manage the loading, error, and success states of asynchronous data.

// useRecoilValueLoadable
// useRecoilValueLoadable is used to read the current value of a Recoil atom or selector, but also allows you to handle the loading and error states.

// Returns: A Loadable object, which has three possible states:
// loading: The data is still being fetched.
// hasValue: The data has been successfully fetched.
// hasError: There was an error while fetching the data.