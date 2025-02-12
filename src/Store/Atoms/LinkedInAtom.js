import { atom, selector } from "recoil";

export const NotificationAtom = atom({
     key:'NotificationAtom',
     default:0
})

export const MessageAtom = atom({
    key:'MessageAtom',
    default:0
})

export const JobAtom = atom({
    key:'JobAtom',
    default:102
})

export const AllNotification = selector({
    key: 'AllNotification',
    get:({get})=>{
        const Notification = get(NotificationAtom);
        const Jobs = get(JobAtom);
        const message = get(MessageAtom);

        return Notification+Jobs+message;
    }
})