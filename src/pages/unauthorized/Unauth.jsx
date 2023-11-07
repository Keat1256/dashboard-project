import "./unauth.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Unauthorized = () => {
  return (
    <div>
      <Sidebar />
      Not Authorized
      <Navbar />
    </div>
  );
};

export default Unauthorized;
