import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const black = {
    color: "black",
  };
  return (
    <footer className="bottom-0 pt-4 pb-2 h-auto" style={{ backgroundColor: "#0D7CAC" }}>
      <div className="container-fluid text-center ">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            Copyright © 2022. All rights reserved.
          </div>
          <div className="col-md-4 col-xs-12 text-white">
            Designed by Carreuky
          </div>
          <div className="col-md-4 col-xs-12">
            <p className="flex justify-center items-center">
              <a href="facebook" className="mx-3" style={black}>
                <FaFacebook />
              </a>

              <a href="" className="mx-3" style={black}>
                <FaTwitter />
              </a>
              <a href="https://github.com/carreuky" className="mx-3" style={black}>
                <FaGithub />
              </a>
              <a href="facebook" className="mx-3" style={black}>
                <FaLinkedinIn />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
