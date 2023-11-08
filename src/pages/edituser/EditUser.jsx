import "./edituser.scss";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import profileIcon from "../../images/pfpicon.png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { userUpdate } from "../../formSource";

const EditUser = ({ title }) => {
  const { userId } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserData(userData); // Store the fetched data in state
      } else {
        // Handle the case where the document doesn't exist
      }
    };

    fetchUserData();
  }, [userId]);

  // Define a handler function to update the form data
  const handleInput = (e) => {
    // Update the userData state with the new value
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  // Define a handler function for form submission
  const handleAdd = (e) => {
    e.preventDefault();
    // Add code to submit the updated user data to your database
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={userData.img ? userData.img : profileIcon}
              alt={userData.name || "User Profile"}
              className="item avatar" // Add "avatar" class here
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) =>
                    setUserData({ ...userData, file: e.target.files[0] })
                  }
                  style={{ display: "none" }}
                />
              </div>

              {userUpdate.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={userData ? userData[input.id] : ""}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button
                disabled={
                  userData && userData.per !== null && userData.per < 100
                }
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
