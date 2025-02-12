import "./App.css";
import { useRecoilState, useRecoilValue,  } from "recoil";
import { NotificationAtom ,JobAtom, MessageAtom,AllNotification} from "./Store/Atoms/LinkedInAtom";


function App() {
       const Notification = useRecoilValue(NotificationAtom);
       const Jobs = useRecoilValue(JobAtom);
       const [message,setMessage] = useRecoilState(MessageAtom);
       const AllNotificationCount = useRecoilValue(AllNotification);
  return (
    <>
      <button>Home</button>

      <button>Notification ({Notification})</button>
      <button>Jobs ({Jobs})</button>
      <button>Message {message}</button>
      
      <button onClick={()=>setMessage(message+1)} >Me</button>
      <p>{AllNotificationCount}</p>
    </>
  );
}




export default App;
