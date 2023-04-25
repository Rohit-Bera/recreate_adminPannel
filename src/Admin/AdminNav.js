import React, { useState } from "react";
import logo from "./REcREATE.png";
import "../Admin/allStyle.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { toast } from "react-toastify";
import Modal from "react-modal/lib/components/Modal";

const AdminNav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
    },
  };

  const logout = () => {
    const user = {
      _id: "",
      name: "",
      email: "",
      type: "",
    };

    const token = "";

    dispatch(adminData({ token, user }));

    setModalIsOpen(false);
    history.push("/adminLogin");
    toast.success("Logout Suucessfull!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ height: "100vh", width: "40vh" }}>
          <div
            style={{
              height: "17vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img src={logo} style={{ height: "7rem", width: "8rem" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link
              to="/adminUsersPage"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                {" "}
                Users
              </button>
            </Link>
            <Link
              to="/adminWorkersPage"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                Workers
              </button>
            </Link>
            <Link
              to="/adminServicesPage"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  color: "black",
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                }}
                className="btn"
              >
                Services
              </button>
            </Link>
            <Link
              to="/adminOrdersPage"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                Orders
              </button>
            </Link>
            <Link
              to="/adminCommissionPage"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                Commission
              </button>
            </Link>
            <Link
              to="/adminPaymentPage"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                Payments
              </button>
            </Link>
            <Link
              to="/adminFeedbackPage"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                feedback
              </button>
            </Link>
            <Link
              to="/adminCustomerSupportPage"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  border: "none",
                  outline: "none",
                  height: "3rem",
                  width: "15rem",
                  margin: "8px",
                  fontSize: "17px",
                  borderRadius: "5px",
                  backgroundColor: "cyan",
                  color: "black",
                }}
                className="btn"
              >
                customer support
              </button>
            </Link>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "3rem",
                width: "15rem",
                margin: "8px",
                fontSize: "17px",
                borderRadius: "5px",
                backgroundColor: "cyan",
                color: "black",
              }}
              className="btn"
              onClick={() => setModalIsOpen(true)}
            >
              logout
            </button>
          </div>
        </div>

        <div
          style={{ height: "90vh", backgroundColor: "cyan", width: "0.2rem" }}
        ></div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="modalbackground">
          <div className="modalcontainer">
            <div className="closebutton">
              <button className="cancel" onClick={() => setModalIsOpen(false)}>
                X
              </button>
            </div>
            <div className="body" style={{ color: "black" }}>
              Are You Sure <br />
              You Want to Log out ?
            </div>
            <div className="modalbutton">
              <button className="no btn" onClick={() => setModalIsOpen(false)}>
                Cancel
              </button>
              <button className="yes btn" onClick={() => logout()}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminNav;
