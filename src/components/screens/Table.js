import React,{useState,useEffect,useRef} from 'react'
import MaterialTable from 'material-table'
function Table() {

const [tableData,setTableData]=useState([
    {email:'fana.buddy@gmail.com',nfc:10,totalamount:5,address:'zigatola'},
    {email:'mana.buddy@gmail.com',nfc:5,totalamount:5,address:'zigatola'},
    {email:'rana.buddy@gmail.com',nfc:3,totalamount:5,address:'zigatola'},
    {email:'kana.buddy@gmail.com',nfc:111,totalamount:5,address:'zigatola'},
    {email:'sijib.buddy@gmail.com',nfc:12,totalamount:5,address:'zigatola'},
    {email:'fana.buddy@gmail.com',nfc:10,totalamount:5,address:'zigatola'},
    {email:'mana.buddy@gmail.com',nfc:5,totalamount:5,address:'zigatola'},
    {email:'rana.buddy@gmail.com',nfc:3,totalamount:5,address:'zigatola'},
    {email:'kana.buddy@gmail.com',nfc:111,totalamount:5,address:'zigatola'},
    {email:'sijib.buddy@gmail.com',nfc:12,totalamount:5,address:'zigatola'}

])

    const columns=[
        {title:'Name',field:'name'},
        {title:'Email',field:'email'},
        {title:'NFC',field:'nfc' ,defaultSort:'desc'},
        {title:'Totalamount',field:'totalamount'},
        {title:'Paymentaddress',field:'paymentaddress'},
        {title:'Address',field:'address'},
       
    ]
    return (
        <div>
            <h2 align='center' >Payment Dashboard</h2>
            <MaterialTable
            editable={{
                onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                    
                }),
                onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{

                }),
                onRowDelete:(newRow,oldRow)=>new Promise((resolve,reject)=>{

                })
            }}
            columns={columns}
            data={tableData}
            title="Payment Dashboard"
            options={{ actionsColumnIndex:-1, searchFieldAlignment:'left',exportButton:true, exportAllData:true, searchFieldVariant:'filled',paging:true,pageSizeOptions:[2,5,10,15,30,50,100]}}
            />
        </div>
    )
}

export default Table
