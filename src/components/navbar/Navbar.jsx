import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar