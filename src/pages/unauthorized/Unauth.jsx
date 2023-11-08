import "./unauth.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Unauthorized = () => {
  useEffect(() => {
    setTimeout(() => {
      toast.error("You do not have the authorization to access.", {
        autoClose: 5000, // 3 seconds
      });
    }, 3000); // Show toast after 3 seconds
  }, []);

  return (
    <div>
      <h1 className="unAuth">
        <Sidebar />
        <div className="unAuthContainer">
          <Navbar />
          <Link to="/">Home</Link>

        </div>
      </h1>
    </div>
  );
};

export default Unauthorized;
