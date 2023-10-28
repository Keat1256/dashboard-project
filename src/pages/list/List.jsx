import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
    return (
        <div>
            <h1 className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                </div>
            </h1>
        </div>
    );
}

export default List;