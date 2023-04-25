import React, { useState } from "react";
import LoginImage from "../resources/loginImg.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import "../Admin/allStyle.css";
import { Circles } from "react-loader-spinner";
import { adminLogin } from "../Data/Services/Oneforall";
import { useDispatch } from "react-redux";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AdminDashboardLogin = () => {
  const [logUser, setLoguser] = useState({
    email: "",
    password: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const referesh = (e) => {
    e.preventDefault();
  };

  const formInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoguser({ ...logUser, [name]: value });
  };

  const signInWeb = async () => {
    console.log("logUser: ", logUser);

    setLoader(true);
    if (logUser.email === "" || logUser.password === "") {
      console.log("logUser: ", logUser);

      alert("please enter all details");

      setLoader(false);
    } else {
      const reply = await adminLogin(logUser);

      const { response, error } = reply;

      if (response) {
        const { token, user } = response;
        console.log("user: ", user);

        console.log("response: ", response);

        setLoader(false);
        setLoguser({
          email: "",
          password: "",
        });

        toast.success("Login Suucessfull!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        dispatch(adminData({ user, token }));

        history.push("/");
      } else if (error) {
        console.log("error consoled: ", error);
        toast.error(`${error}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoader(false);
      }
    }
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
      </style>
      {/* parent */}
      <div
        style={{
          display: "flex",
        }}
      >
        {/* child */}
        <div
          style={{
            backgroundColor: "#38b6ff",
            height: "100vh",
            width: "50vw",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img src={LoginImage} height="500vh" width="650vw" />
        </div>
        {/* child */}
        <div
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#38b6ff",
          }}
        >
          <form
            onSubmit={(e) => referesh(e)}
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
              height: "65vh",
              width: "30vw",
              borderRadius: "5px",
              boxShadow: "0px 0px 25px 10px white",
              border: "2px solid #38b6ff",
            }}
            className="loginFormbg"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label style={{ fontSize: "20px", fontWeight: "500" }}>
                Email
              </label>
              <input
                style={{
                  border: "none",
                  outline: "none",
                  height: "2rem",
                  width: "20rem",
                  fontSize: "17px",
                  borderRadius: "5px",
                  border: "2px solid #38b6ff",
                }}
                type="text"
                name="email"
                value={logUser.email}
                onChange={formInput}
              />
            </div>
            <div>
              <label style={{ fontSize: "20px", fontWeight: "500" }}>
                Password
              </label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    height: "2rem",
                    width: "18rem",
                    fontSize: "17px",
                    borderRadius: "5px",
                    border: "2px solid #38b6ff",
                  }}
                  type={showPwd ? "text" : "password"}
                  name="password"
                  value={logUser.password}
                  onChange={formInput}
                />

                {showPwd ? (
                  <EyeSlashIcon
                    color="#38b6ff"
                    fontWeight={"bold"}
                    height="30px"
                    className="btn"
                    onClick={() => setShowPwd(false)}
                  />
                ) : (
                  <EyeIcon
                    color="#38b6ff"
                    fontWeight={"bold"}
                    height="30px"
                    className="btn"
                    onClick={() => setShowPwd(true)}
                  />
                )}
              </div>
            </div>
            <div
              style={{
                width: "20rem",
                height: "5rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "7rem",
                  fontSize: "18px",

                  borderRadius: "5px",
                  border: "2px solid #38b6ff",
                }}
                className="btn"
                onClick={() => signInWeb()}
              >
                {loader ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Circles color="#38b6ff" height={30} width={30} />
                  </div>
                ) : (
                  "login"
                )}
              </button>
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "10rem",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border: "2px solid #38b6ff",
                }}
                className="btn"
              >
                forgot password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLogin;
