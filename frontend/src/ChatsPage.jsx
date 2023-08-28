import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    
   return <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId="63689bfb-0606-45fa-924d-1ae3a34ac7be"
            username={props.user.username}
            secret={props.user.secret}
            style={{height:"100%"}}
        />
    </div>
}   

export default ChatsPage