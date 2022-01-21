import "./App.css";
import "./components";
import { MessageList } from "./components";
import "./palette.css";

function App() {
  return (
    <div>
      <h1>The Chat</h1>
      <MessageList />
    </div>
  );
}

export default App;
