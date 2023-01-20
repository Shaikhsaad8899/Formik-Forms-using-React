// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { YoutubeForm } from "./components/YoutubeForm";
import { OldYoutubeForm } from "./components/oldYoutubeForm";
import { AddUser } from "./components/AddUser";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routing/Home";
import { Navbar } from "./Routing/Navbar";
import { Navigate } from "./Routing/Navigate";
import { NoMatch } from "./Routing/NoMatch";
import { Products } from "./Routing/Products";
import { Featured } from "./Routing/Featured";
import { Newproducts } from "./Routing/Newproducts";
import { Users } from "./Routing/Users/Users";
import { UserDetails } from "./Routing/Users/UserDetails";
import { Admin } from "./Routing/Users/Admin";
const LazyAbout = React.lazy(() => import("./Routing/About"));
function App() {
  return (
    <>
      <Navbar />
      <div className="App2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<Navigate />} />
          <Route path="products" element={<Products />}>
            <Route index="featured" element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<Newproducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          {/* <Route path="user/2" element={<User2 />} />
          <Route path="user/3" element={<User3 />} /> */}
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
