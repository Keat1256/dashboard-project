import profileIcon from "../src/images/pfpicon.png";

export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70
    },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img ? params.row.img : profileIcon} alt="avatar" />
                </div>
            );
        },
    },
    {
        field: "username",
        headerName: "User Name",
        width: 200,
        

    },
    {
        field: "email",
        headerName: "Email",
        width: 200,
    },
    {
        field: "displayName",
        headerName: "Full Name",
        width: 100,
    },
    {
        field: "address",
        headerName: "Address",
        width: 250,
    },
];

export const productColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 100
    },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img ? params.row.img : profileIcon} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "title",
        headerName: "Product Name",
        width: 150,

    },
    {
        field: "price",
        headerName: "Product Price",
        width: 150,
    },
    {
        field: "quantity",
        headerName: "Total Quantity",
        width: 150,
    },
    {
        field: "wh1qty",
        headerName: "Warehouse 1 Quantity",
        width: 150,
    },
    {
        field: "wh2qty",
        headerName: "Warehouse 2 Quantity",
        width: 150,
    },
    {
        field: "wh3qty",
        headerName: "Warehouse 3 Quantity",
        width: 150,
    },
    {
        field: "status",
        headerName: "Product Status",
        width: 150,
    }
]

export const orderColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 100,
    },
    {
        field: "title",
        headerName: "Product Title",
        width: 250, // Adjust the width as needed
    },
    {
        field: "qty",
        headerName: "Quantity",
        width: 100, // Adjust the width as needed
    },
    {
        field: "status",
        headerName: "Order Status",
        width: 100,
    },
    {
        field: "totalPrice",
        headerName: "Total Paid",
        width: 100,
    },
    {
        field: "selectedWarehouse",
        headerName: "Warehouse",
        width: 150,
    },
    {
        field: "userId",
        headerName: "Customer ID",
        width: 250,
    },
    {
        field: "timeStamp",
        headerName: "Order Date",
        width: 200,
        valueFormatter: (params) => {
            // Assuming "timeStamp" is a Firestore timestamp
            if (params.value && params.value.toDate) {
                const date = params.value.toDate();
                return date.toLocaleString(); // Format the timestamp as a string
            }
            return ""; // Return an empty string if the timestamp is not valid
        },
    },
]