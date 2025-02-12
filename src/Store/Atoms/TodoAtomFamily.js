import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todo = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => { 
      try {
        const res = await axios.get(`http://localhost:3000/todo/${id}`); 
        return res.data.todo;
      } catch (error) {
        console.error("Error fetching todo:", error);
        return null; 
      }
    },
  }),
});
