import { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from "./context/AuthContext";
import Unauthorized from './pages/unauthorized/Unauth';
import { db } from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { productInputs, userInputs, userUpdate } from "./formSource";
import RoleAuth from './components/role/Role';
import List from './pages/list/List';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import New from './pages/new/New';
import EditUser from './pages/edituser/EditUser';
import Login from './pages/login/Login';
import Order from './pages/order/Order';
import Product from './pages/product/Product';
import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext)
  const [userRole, setUserRole] = useState(null);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const auth = getAuth();
  const [uid, setUid] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        console.log("user not logged in");
        // Handle user not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (uid) {
        const docRef = doc(db, "users", uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserRole(userData.role);
          } else {
            // Handle the case where the document doesn't exist
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          // Handle the error
        }
      } else {
        // The user is not logged in, so do nothing
      }
    };
    // Re-run the effect whenever the uid state variable changes
    fetchUserRole();
  }, [uid]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
              <RequireAuth>
                <RoleAuth userRole={userRole} allowedRoles={["super_admin", "admin"]}>
                <Home />
                </RoleAuth>
              </RequireAuth>
            } />
            <Route path="users">
              <Route index element={
                <RoleAuth userRole={userRole} allowedRoles="super_admin">
                  <List />
                </RoleAuth>
              } />
              <Route path=":userId" element={
                <Single />
              } />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Create New User" />
                  </RequireAuth>
                }
              />
              <Route
                path="edit/:userId"
                element={
                  <RequireAuth>
                    <EditUser inputs={userUpdate} title="Update User"/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route
              path=":userId"
              component={Single}
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route path="products">
              <Route index element={<Product />} />
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
            </Route>
            <Route path="unauthorized">
              <Route index element={<Unauthorized />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
