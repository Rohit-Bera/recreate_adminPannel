import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// primary pages
import AdminDashboardLogin from "./Admin/AdminDashboardLogin";
import AdminCommission from "./Admin/AdminCommission";
import AdminCustomerSupport from "./Admin/AdminCustomerSupport";
import AdminFeedback from "./Admin/AdminFeedback";
import AdminOrders from "./Admin/AdminOrders";
import AdminServices from "./Admin/AdminServices";
import AdminUsers from "./Admin/AdminUsers";
import AdminWorkers from "./Admin/AdminWorkers";
import Error404 from "./Admin/Error404";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminPayments from "./Admin/AdminPayments";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// secondary pages

const AdminRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={AdminDashboard} />
          <Route path="/adminLogin" exact component={AdminDashboardLogin} />
          <Route path="/adminUsersPage" exact component={AdminUsers} />
          <Route path="/adminWorkersPage" exact component={AdminWorkers} />
          <Route path="/adminServicesPage" exact component={AdminServices} />
          <Route path="/adminOrdersPage" exact component={AdminOrders} />
          <Route
            path="/adminCommissionPage"
            exact
            component={AdminCommission}
          />
          <Route path="/adminPaymentPage" exact component={AdminPayments} />
          <Route
            path="/adminCustomerSupportPage"
            exact
            component={AdminCustomerSupport}
          />
          <Route path="/adminFeedbackPage" exact component={AdminFeedback} />

          <Route exact component={Error404} />
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
};

export default AdminRoutes;
