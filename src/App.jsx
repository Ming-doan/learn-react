import Title from "./components/Title";
import "./App.css";
import Input from "./components/Input";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <Title titleMessage="X.com"></Title>
      <Input></Input>
      <div className="tweet-container">
        <Tweet date="05-08-2023" tweet="Hello world" />
      </div>
    </div>
  );
}

export default App;
