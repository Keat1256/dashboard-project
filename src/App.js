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
import { productInputs } from './formSource';
import RoleAuth from './components/role/Role';
import List from './pages/list/List';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Login from './pages/login/Login';
import Order from './pages/order/Order';
import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext)
  const [userRole, setUserRole] = useState(null);

  const auth = getAuth();
  const [uid, setUid] = useState();
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      console.log("user not logged in");
      return
    }
  });

  useEffect(() => {
    const fetchUserRole = async () => {
      if (uid) {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        setUserRole(userData.role);
        // if (docSnap.exists()) {
        //   const userData = docSnap.data();
        //   setUserRole(userData.role); // Store the fetched data in state
        // } else {
        //   // Handle the case where the document doesn't exist
        // }
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
                <Home />
              </RequireAuth>
            } />
            <Route path="users">
              <Route index element={
                <RoleAuth userRole={userRole} allowedRole="super_admin">
                  <List />
                </RoleAuth>
              } />
              <Route path=":userId" element={
                <Single />
              } />
              <Route path="new" element={<New />} />
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
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path=":newproducts"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
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

