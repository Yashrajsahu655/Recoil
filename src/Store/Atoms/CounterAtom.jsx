import {atom, selector} from 'recoil';


export const count_State = atom({
    key:'countState',
    default:0
})

export const even_selector = selector({
    key:'even_selector',
    get :({get})=>{
        const count = get(count_State);
        return count%2==0;
    }
})