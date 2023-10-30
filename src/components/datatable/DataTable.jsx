import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../datatablesource';

const Datatable = () => {
    const actionColumn = [
        {
            field: "action",
            headName: "Action",
            width: 200,
            renderCell:()=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return(
        <div className="datatable">
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
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

export default Datatable