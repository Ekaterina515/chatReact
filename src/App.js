import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <div className="App">
      <Button></Button>

      <Button color="alert" />
      <Button disabled={false} />
      <Button disabled={true} />
      <Button disabled />
      <Button
        color="primary"
        onClick={() => {
          console.log("click");
        }}
      />
    </div>
  );
}

export default App;
