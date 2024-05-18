import React, {useState} from "react";
import DataTable from "react-data-table-component";
import './Table.css';

const Table: React.FC=() => {
    
    const colums=[
    { 
        name: 'Titile',
        selector: (row: any) =>row.title,
        sortable: true
    },
    {
         name:'Client',
         selector: (row: any) =>row.client,
        sortable: true
    },
    {
        name: 'Data di Inizio', 
        selector: (row: any) =>row.startDate,
        sortable: true
    }
];

const data=[
    {
        id: 1,
        title: 'CHatGpt vs Bedrock',
        client: 'Zero12',
        startDate:'11/05/2024'
    }
]

    const[records, setRecords]= useState(data);

    function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void{
        const newData=data.filter(row =>{
            return row.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    }

return(
    <div className='container mt-5 table'>
        <div className='textSearch'><input type="text" placeholder="Search" onChange={handleFilter}/></div>
        <DataTable
            columns={colums}
            data={records}
            fixedHeader
            pagination
        >

        </DataTable>
    </div>
)

}
export default Table;