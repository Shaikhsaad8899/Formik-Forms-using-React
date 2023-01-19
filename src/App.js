// import logo from "./logo.svg";
import "./App.css";
import { YoutubeForm } from "./components/YoutubeForm";
import { OldYoutubeForm } from "./components/oldYoutubeForm";
import { AddUser } from "./components/AddUser";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routing/Home";
import { About } from "./Routing/About";
import { Navbar } from "./Routing/Navbar";
import { Navigate } from "./Routing/Navigate";
import { NoMatch } from "./Routing/NoMatch";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="order-summary" element={<Navigate />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

        {/* For ROuting Practise */}
      </div>
      {/* <div className="App">
        <YoutubeForm />
        <AddUser />
        <Registration />
        <OldYoutubeForm />
      </div> */}
    </>
  );
}

export default App;
