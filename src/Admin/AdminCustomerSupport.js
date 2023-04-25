import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../Admin/allStyle.css";
import Modal from "react-modal/lib/components/Modal";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { toast } from "react-toastify";
import AdminNav from "./AdminNav";

const AdminCustomerSupport = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminNav />
        <div>
          <h3>admin customer support page</h3>
        </div>
      </div>
    </>
  );
};

export default AdminCustomerSupport;
