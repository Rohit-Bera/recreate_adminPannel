import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../Admin/allStyle.css";
import Modal from "react-modal/lib/components/Modal";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { toast } from "react-toastify";
import { getAllUsersApi } from "../Data/Services/Oneforall";
import AdminNav from "./AdminNav";

const AdminUsers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allUsers, setUsers] = useState([]);
  const adminToken = useSelector((state) => state.adminReducer).token;
  console.log("adminToken: ", adminToken);

  const history = useHistory();
  const dispatch = useDispatch();

  if (adminToken === "") {
    history.push("/adminLogin");
    toast.info("please login first!", {
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

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getAllUsersApi(adminToken);

    const { users, error } = response;
    console.log("users: ", users);

    if (error) {
      toast.error(`${error.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      users ? setUsers(users) : setUsers([]);
    }
  };

  return (
    <>
      <div style={{ position: "fixed" }}>
        <AdminNav />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            width: "70vw",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "18rem",
            minHeight: "100vh",
          }}
        >
          <h3>any page</h3>
          <h3>any page</h3>
          <h3>any page</h3>
          <h3>any page</h3>
          <h3>any page</h3>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
