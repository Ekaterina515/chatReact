import "./App.css";
import { Message } from "./components";

function App() {
  return (
    <div>
      <h1> The Chat </h1>
      <Message messageProps={Message} />
    </div>
  );
}

export default App;
