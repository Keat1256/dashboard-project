import profileIcon from "../src/images/pfpicon.png";

export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70
    },
    {
        field: "user",
        headerName: "User Name",
        width: 200,
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
        field: "inv",
        headerName: "Product Inventory",
        width: 150,
    },
    {
        field: "status",
        headerName: "Product Status",
        width: 150,
    }
]