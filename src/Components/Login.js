import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const colorTxt = {
    color: "#0D7CAC",
    textDecoration: "none",
  };

  const errormessage = error?.map((error) => {
    return (
      <>
        <p className="text-danger pt-3">{error}</p>
      </>
    );
  });


  const loginDetails = { username, password };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((error) => setError(Object.values(error)));
      }
    });
  }
  return (
    <div>
      <section className="vh-60 m-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-80">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 pl-0 py-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-3  me-2">
                    REGISTER{" "}
                    <span>
                      <Link style={colorTxt} to="/signup">
                        SIGN UP
                      </Link>
                    </span>
                  </p>
                </div>

                {/* <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div> */}

                <div className="form-outline mb-3 ">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg "
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-3 ">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center text-lg-start">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{
                      border: "none",
                      paddingLeft: "2.5rem;",
                      paddingRight: "2.5rem",
                      backgroundColor: "#0D7CAC",
                      fontSize: "18px",
                      fontWeight: "600",
                      padding: "5px 40px",
                    }}
                  >
                    Login
                  </button>
                  {errormessage}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
