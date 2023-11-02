import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

const List = () => {
    return (
        <div>
            <h1 className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <Datatable />
                </div>
            </h1>
        </div>
    );
}

export default List;