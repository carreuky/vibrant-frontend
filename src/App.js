import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Userpage from "./Components/Userpage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      <div>
        <Navbar user={user} setUser={setUser} />
      </div>
      <div className="">
        {user ? (
          <Switch>
            <Route path="/">
              <Userpage user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/event">
              <Events />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
