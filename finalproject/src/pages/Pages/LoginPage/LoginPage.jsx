import React, { useState } from "react";
import google from "../../../images/google.png";
import image from "../../../images/login1.jpg";
import useLoginAdmin from "../../../hooks/useLoginAdmin";

const LoginPage = () => {
  const { adminLogin } = useLoginAdmin();
  const [details, setDetails] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    adminLogin(details);
  }

  return (
    <>
      <div
        className="backgrouadminLoginApind-image pt-11"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="form bg-gray-900 bg-opacity-80 rounded-lg w-1/2 max-w-xs mx-auto mb-2">
          <div className="p-2">
            <h2 className="text-orange-500 bg-white rounded py-2 px-2 mb-4 ">
              Login Here
            </h2>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            className="w-full bg-transparent border-b border-orange-500 py-2 px-4 mb-4 text-white focus:outline-none"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password Here"
            className="w-full bg-transparent border-b border-orange-500 py-2 px-4 mb-4 text-white focus:outline-none"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
          <div className="p-2">
            <button
              className="btnn bg-orange-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-white hover:text-orange-500 transition"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className="link text-center mt-4 text-lg text-white">
            Don't have an account
            <br />
            <a href="#" className="text-orange-500">
              Sign up{" "}
            </a>
            here
          </p>
          <img
            src={google}
            className="imgG w-20 h-20 mx-auto mt-4"
            alt="Google Sign-In"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
