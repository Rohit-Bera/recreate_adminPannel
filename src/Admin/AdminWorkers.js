import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../Admin/allStyle.css";
import Modal from "react-modal/lib/components/Modal";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { toast } from "react-toastify";
import AdminNav from "./AdminNav";
import { FaUserCircle, FaWindowClose,FaUser,FaEnvelope,FaMapMarkedAlt,FaPhone } from "react-icons/fa";
import "../style/AdminUser.css";
import { getAllWorkersApi,deleteWorkerApi } from "../Data/Services/Oneforall";

const AdminWorkers = () => {
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
    getAllWorkers();
  }, []);

  const getAllWorkers = async () => {
    const response = await getAllWorkersApi(adminToken);

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


  
  
  const deleteWorker = async(item)=>{
    try {
        const{_id} = item;
        const headers = {headers:{Authorization: `Bearer ${adminToken}` }}
        const response = await deleteWorkerApi(headers,_id);
        console.log('response: ', response);
        if(response){
            setModalIsOpen(false);
        }
        if(response.data.status === 200){
          toast.success("User deleted Succesfully!")
        }
        else{
          toast.error("User is not Deleted!")
        }
        if(response)
        getAllWorkers();
    } catch (error) {
        console.log('error: ', error);
        
    }
}
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

            width: "70vw",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "18rem",
            minHeight: "100vh",
          }}
        >
           <div className="flex-users-admin">
        {
           
           allUsers.map((item)=>{
                console.log(item);
              if(item.type == "worker")
              {
                return(
                    <div  className="User-Profile-admin">
                    <div>
                    <sapn title="delete" onClick={()=>deleteWorker(item)}><FaWindowClose/></sapn>
                    <div className="icon-user"><FaUserCircle/></div>
                    <p><span><FaUser></FaUser></span> <span>{item.name}</span></p>
                    <p><span><FaEnvelope></FaEnvelope></span> <span>{item.email}</span></p>
                    <p><span><FaMapMarkedAlt/></span> <span>{item.city}</span></p>
                    <p><span><FaPhone></FaPhone></span> <sapn>{item.phone}</sapn></p>
                   </div>
                </div>
                   
             
            )
              }
            })
        }
        
         </div>
        </div>
      </div>
    </>
  );
};

export default AdminWorkers;
