import { atom, selector } from "recoil";

export const Todo = atom({
    key: 'Todo',
    default:[]
})

export const Filter = atom({
    key:'Filter',
    default:""
})

export const FilteredData = selector({
    key:'FilteredData',
    get:({get})=>{
        const todo = get(Todo);
        const filterString = get(Filter);
        return todo.filter(x=> x.title.includes(filterString) || x.description.includes(filterString))
    }
})