import "./widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Widget = ({ type }) => {
    let data;
    switch (type) {
        case "sales":
            data = {
                title:"SALES",
                isMoney:true,
                link:"See all sales",
                icon: <ShowChartIcon className="icon" />,
            };
            break;
        case "order":
            data = {
                title:"ORDER",
                isMoney:false,
                link:"See all orders",
                icon: <ShoppingCartIcon className="icon negative" />,
            };
            break;
        case "earning":
            data = {
                title:"EARNING",
                isMoney:true,
                link:"See all earnings",
                icon: <MonetizationOnIcon className="icon" />,
            };
            break;
        case "stock":
            data = {
                title:"STOCK",
                isMoney:false,
                link:"See all stock",
                icon: <InventoryIcon className="icon" />,
            };
            break;
            default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowUpwardIcon />
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget