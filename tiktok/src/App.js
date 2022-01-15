import "./App.css";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Videos />
        <Videos />
      </div>

      {/* App Container */}
      {/* <Videos/> */}
    </div>
  );
}

export default App;
