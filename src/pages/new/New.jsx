import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {
    return (
        <div>
            <div className="new">
            <Sidebar />
            <div className="newContainer"></div>
            <Navbar />
            </div>
        </div>
    );
}

export default New;