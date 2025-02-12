import axios from "axios"
import { atom, selector } from "recoil"


export const TodosAtom = atom({
    key:'TodosAtom',
    default:selector({
        key:'TodoSelector',
        get: async()=>{
            const res = await axios.get('http://localhost:3000/todos');
            return res.data.todos;
        }
    })
})