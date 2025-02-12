import { atomFamily } from "recoil";
import { todos } from "../../Todo";



export const todo = atomFamily({
    key:"todo",
    default:id =>{
         
        const todo = todos.find(todo => todo._id === id);
        return todo;
        
    }
})