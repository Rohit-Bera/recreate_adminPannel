import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../Admin/allStyle.css";
import Modal from "react-modal/lib/components/Modal";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { toast } from "react-toastify";
import AdminNav from "./AdminNav";
import { getAllOrderstApi} from "../Data/Services/Oneforall";
import { FaUserCircle, FaWindowClose,FaUser,FaEnvelope,FaMapMarkedAlt,FaPhone } from "react-icons/fa";

const AdminOrders = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const adminToken = useSelector((state) => state.adminReducer).token;
  console.log("adminToken: ", adminToken);
  const [allOrders,setAllOrders]=useState([]);
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
    getOrders();
  }, []);
  const getOrders= async()=>{
    setModalIsOpen(true);
        try {
            const headers = {headers:{Authorization: `Bearer ${adminToken}` }}
            const response = await getAllOrderstApi(headers);
            console.log('response: ', response);
            if(response){
                setModalIsOpen(false);
            }

            console.log('response.data.allOrder: ', response);
            setAllOrders(response.data.orders); 
        } catch (error) {
            console.log('error: ', error);    
        }
    };

  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminNav />
        <div>
        <table cellPadding="10px" className="table-order " >
                <tr className="border-tr-order table-title-order">
                    <td>User Name</td>
                    <td>Services Name</td>
                    <td>Worker Name</td>
                    <td>Book Date</td>
                    <td>Order Status</td>
                    <td>Payment status</td>
                    <td>Visit Date</td>
                </tr>
                {
                    allOrders.map((item)=>{
                   console.log(item);
                         return(
               <tr className="border-tr-order" data-aos="zoom-in-down"> 
                    <td>
                    <p>{item.user}</p> 
                    </td>
                     <td>
                         <p>{item.service}</p>
                     </td>
                  
                    <td>
                         <p>{item.worker}</p>
                     </td>
                    <td>
                         <p>{item.bookedDate}</p>
                    </td>
                    <td>
                         <p>{item.orderStatus}</p>
                    </td>
                    <td>
                         <p>{item.paymentStatus}</p>
                    </td>
                    <td>
                         <p>{item.visitDate}</p>
                    </td>
                    
                 </tr>
       
                         )
                     
                    })
    
                }
                </table>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
