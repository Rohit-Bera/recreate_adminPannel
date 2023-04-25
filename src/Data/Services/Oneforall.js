import axios from "axios";

const host = "https://recreate-backend-server.onrender.com";

export const adminLogin = async (data) => {
  console.log("data: ", data);
  const url = "/login";
  const link = host + url;

  try {
    const result = await axios.post(link, data);
    console.log("result: ", result.data);
    if (result.data.logUser) {
      const response = result.data.logUser;
      return { response };
    } else if (result.data.error) {
      console.log("result.data.error: ", result.data.error);
      const error = result.data.error;
      return { error };
    }
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const getAllUsersApi = async (token) => {
  console.log("token: ", token);
  const url = "/getAllUsers";
  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log("headers: ", headers);
  try {
    const result = await axios.get(link, headers);
    // console.log("result: ", result);

    if (result.data.users) {
      const users = result.data.users;

      return { users };
    } else if (result.data.code) {
      const error = result.data;

      return { error };
    }
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};


export const getAllWorkersApi = async (token) => {
  console.log("token: ", token);
  const url = "/getAllWorkers";
  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log("headers: ", headers);
  try {
    const result = await axios.get(link, headers);
    console.log("result: ", result);

    if (result.data.workers) {
      const users = result.data.workers;

      return { users };
    } else if (result.data.code) {
      const error = result.data;

      return { error };
    }
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

  
export const deleteUserApi = async (headers, _id) => {
  try {
    const url = `/deleteUser/${_id}`;
    const link = host + url;
    const response = await axios.delete(link, headers);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};


export const deleteWorkerApi = async (headers, _id) => {
  try {
    const url = `/deleteWorker/${_id}`;
    const link = host + url;
    const response = await axios.delete(link, headers);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};


export const getAllOrderstApi = async (headers) => {
  console.log("headers: ", headers);
  const host = "http://localhost:4400";
  const url = "/getOrders";
  const link = host + url;
  try {
    const result = await axios.get(link, headers);
    return result;
  
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};