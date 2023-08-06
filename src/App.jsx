import Title from "./components/Title";
import Input from "./components/Input";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="app">
      <div className="appContent">
        <Title titleMessage="X.com" />
        <hr />
        <Input />
        <div className="tweetContainer">
          <Tweet date="05-08-2023" tweet="Hello world" />
        </div>
      </div>
    </div>
  );
}

export default App;
