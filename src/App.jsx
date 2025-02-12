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


// selectorFamily in Recoil
// selectorFamily is a powerful feature in Recoil that allows you to create dynamic selectors based on a parameter. It helps to derive state or compute values from atoms or other selectors, while also allowing for unique instances based on input.

// Key Features of selectorFamily:
// Dynamic Selection: Creates selectors that can accept parameters, allowing you to derive different values based on input.
// Async Capabilities: Supports asynchronous fetching of data, which is useful for data fetching scenarios (e.g., API calls).
// Computation: Can compute derived state based on other atoms or selectors..


// How It Works
// Dynamic Parameter: The userSelector can be called with different user IDs (e.g., userSelector(1), userSelector(2)) to fetch user data dynamically.
// Fetching Data: Each call creates a new selector instance that fetches data based on the provided user ID.
// Reactivity: If the user ID changes, the component automatically re-renders with the new user data.

// When to Use selectorFamily?
// Dynamic Fetching: When you need to fetch or compute data based on changing parameters.
// Modular Code: When you want to keep your code modular by creating reusable selectors.
// Async Operations: When you need to perform asynchronous data fetching.
