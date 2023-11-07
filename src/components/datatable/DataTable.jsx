import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../datatablesource';
import { useState } from 'react';

const DataTable = () => {
    const [data,setData] = useState(rows)

    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !== id))
    };

    const actionColumn = [
        {
            field: "action",
            headName: "Action",
            width: 200,
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
    return(
        <div className="datatable">
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={columns.concat(actionColumn)}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            </div>
        </div>
    )
}

export default DataTable