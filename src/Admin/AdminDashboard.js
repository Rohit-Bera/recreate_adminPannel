import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../Admin/allStyle.css";
import Modal from "react-modal/lib/components/Modal";
import {
  UserIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  CurrencyRupeeIcon,
  BanknotesIcon,
  QueueListIcon,
  ChatBubbleLeftRightIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const adminToken = useSelector((state) => state.adminReducer).token;
  console.log("adminToken: ", adminToken);

  const history = useHistory();
  const dispatch = useDispatch();

  if (adminToken === "") {
    history.push("/adminLogin");
    toast.error("please login first! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

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
          flexDirection: "column",
        }}
      >
        <h3>Admin Dashboard</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "91vh",
            width: "80vw",
            flexWrap: "wrap",
          }}
        >
          <Link to="/adminUsersPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <UserIcon color="white" height="6rem" width="10rem" />
              Users
            </button>
          </Link>
          <Link to="/adminWorkersPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <UserGroupIcon color="white" height="6rem" width="10rem" />
              Workers
            </button>
          </Link>
          <Link to="/adminServicesPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <WrenchScrewdriverIcon
                color="white"
                height="6rem"
                width="10rem"
              />
              Services
            </button>
          </Link>
          <Link to="/adminOrdersPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <ClipboardDocumentListIcon
                color="white"
                height="6rem"
                width="10rem"
              />
              Orders
            </button>
          </Link>
          <Link to="/adminCommissionPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <CurrencyRupeeIcon color="white" height="6rem" width="10rem" />
              Commission
            </button>
          </Link>
          <Link to="/adminPaymentPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <BanknotesIcon color="white" height="6rem" width="10rem" />
              Payments
            </button>
          </Link>
          <Link to="/adminFeedbackPage" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <QueueListIcon color="white" height="6rem" width="10rem" />
              feedback
            </button>
          </Link>
          <Link
            to="/adminCustomerSupportPage"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                border: "none",
                outline: "none",
                height: "13rem",
                width: "16rem",
                backgroundColor: "#38b6ff",
                color: "white",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px",
                boxShadow: "0px 0px 25px 2px grey",
              }}
              className="btn"
            >
              <ChatBubbleLeftRightIcon
                color="white"
                height="6rem"
                width="10rem"
              />
              customer support
            </button>
          </Link>
          <button
            style={{
              border: "none",
              outline: "none",
              height: "13rem",
              width: "16rem",
              backgroundColor: "#38b6ff",
              color: "white",
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "5px",
              boxShadow: "0px 0px 25px 2px grey",
            }}
            className="btn"
            onClick={() => setModalIsOpen(true)}
          >
            <PowerIcon color="white" height="6rem" width="10rem" />
            Log out
          </button>
        </div>
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

export default AdminDashboard;
