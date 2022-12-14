import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState()
  const userToDB = { username, password, passwordConfirmation };
  const colorTxt = {
    color: "#0D7CAC",
    textDecoration: "none",
  };

  const errormessage = error?.map((error) => {
    return (
      <>
        <li className="text-danger pt-3">{error}</li>
      </>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToDB),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setSuccess((user.success)));
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
      } else {
        r.json().then((error) => setError((error.errors)));
      }
    });
  }
  return (
    <div>
      <section className="vh-60 m-5 m-5">
        <h3
          style={{ fontWeight: "400", color: "#0D7CAC" }}
          className="text-center"
        >
          CREATE AN ACCOUNT TO POST AN EVENT
        </h3>
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
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-3  me-2">
                  HAVE AN ACCOUNT{" "}
                  <span>
                    <Link style={colorTxt} to="/login">
                      LOGIN
                    </Link>
                  </span>
                </p>
              </div>

              {/* <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div> */}
              <form>
                <div className="form-outline mb-3 ">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    id="form3Example3"
                    value={username}
                    className="form-control form-control-lg "
                    placeholder="username"
                  />
                </div>

                <div className="form-outline mb-3 ">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="password"
                  />
                </div>

                <div className="form-outline mb-3 ">
                  <input
                    type="password"
                    id="form3Example4"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="confirm password"
                  />
                </div>
                <div className="text-center text-lg-start">
                <p className="text-success">{success}</p>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-lg text-white"
                    style={{
                      border: "none",
                      paddingLeft: "2.5rem;",
                      paddingRight: "2.5rem",
                      backgroundColor: "#0D7CAC",
                      fontSize: "18px",
                      padding: "5px 40px",
                    }}
                  >
                    Sign Up
                  </button>
                  <ol>{errormessage}</ol>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
