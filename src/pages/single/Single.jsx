import "./single.scss";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import profileIcon from "../../images/pfpicon.png";

const Single = () => {
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

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {userData && ( // Check if userData is available before rendering
              <div className="item">
                <img src={userData.img ? userData.img : profileIcon} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{userData.displayName}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{userData.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{userData.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">{userData.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">{userData.country}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
