import { PrettyChatWindow } from "react-chat-engine-pretty";
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
function ChatsPage(props) {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default ChatsPage;
