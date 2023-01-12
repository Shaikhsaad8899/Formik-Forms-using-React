import logo from "./logo.svg";
import "./App.css";
import { YoutubeForm } from "./components/YoutubeForm";
import { OldYoutubeForm } from "./components/oldYoutubeForm";

function App() {
  return (
    <div className="App">
      <YoutubeForm />
    
      {/* <OldYoutubeForm /> */}
    </div>
  );
}

export default App;
