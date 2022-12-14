import React from "react";
import { Link } from "react-router-dom";
import { FaDigitalOcean } from "react-icons/fa";

export default function Navbar({ user, setUser }) {
  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "20px",
    fontWeight: "300",
  };

  function logOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container-fluid">
          <p
            className="navbar-brand pl-5"
            style={{
              fontSize: "35px",
              color: "#0D7CAC",
              fontWeight: "300",
              paddingLeft: "30px",
            }}
          >
            <FaDigitalOcean /> Vibrant
          </p>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-center w-25"
            id="navmenu"
          >
            {user ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item  mx-3">
                  <p  className="nav-link" style={colorTxt}>
                    <span style={{ textDecoration: "none" }}>
                      {user.username.toUpperCase()}
                    </span>
                  </p>
                </li>
                <li className="nav-item  mx-3">
                  <p
                    onClick={logOut}
                    className="nav-link bg-primary text-white px-4 rounded"
                    style={{
                      backgroundColor: "#0D7CAC",
                      fontSize: "15px",
                      fontWeight: "300",
                      color: "white",
                      // padding: "9px 40px",
                    }}
                  >
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Log Out
                    </Link>
                  </p>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item  mx-3">
                  <p href="" className="nav-link" style={colorTxt}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home{" "}
                    </Link>
                  </p>
                </li>
                <li className="nav-item  mx-3">
                  <a href="#products" className="nav-link" style={colorTxt}>
                    <Link to="/event" style={{ textDecoration: "none" }}>
                      Events
                    </Link>
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a href="#services" className="nav-link" style={colorTxt}>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <a
                      href="#contact"
                      className="nav-link  text-white px-4 rounded"
                      style={{
                        backgroundColor: "#0D7CAC",
                        fontSize: "18px",
                        fontWeight: "300",
                        padding: "7px 38px",
                      }}
                    >
                      Post Event
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
