import React,{useState,useEffect,useRef,forwardRef} from 'react'
import MaterialTable from 'material-table'
import Payment from '@material-ui/icons/Payment';
import Refresh from '@material-ui/icons/Refresh';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Nfc from '@material-ui/icons/Nfc';
import { useHistory } from "react-router-dom";
import { MenuItem, Select } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Table() {

    const {tableRef} = useRef()
        const history = useHistory();

const [user,setUser]=useState([])
const [address,setAddress]=useState([])
// const [address,setAddress]=useState('');
// const [city,setCity]=useState('');
// const [state,setState]=useState('');
// const [idd,setIdd]=useState('');

useEffect(()=>{
    
    const fectData= async ()=>{ 
       
        fetch('https://travherswopapp.herokuapp.com/admin/travis')
        .then(res=>res.json()).then((details)=>{if(details.error){console.log("vul")}else{
            // console.log("vul",details.users.userTotal.data)
            setUser(details.users.userTotal)
            // details.users.userTotal.map((item)=>{

            //     console.log("addess email",item.data.address)
               
            
              
              
              
            //   })

            
            //   console.log("addess email",address)

          }}).catch(err=>{console.log("pro erro",err)})
}    

fectData() 
return()=>{
    console.log('profile me')
}

}, [])

    const columns=[
        {title:'Name',field:'fullname',align:'center',},

        {title:'Email',field:'email',align:'center',},
        {title:'Address',align:'center',field:'data',
        render: (rowData) => (
            rowData.data? <Select>
            <MenuItem value="address">{rowData.data.address}</MenuItem>
            <MenuItem value="city">{rowData.data.city}</MenuItem>
            <MenuItem value="zipcode">{rowData.data.zipcode}</MenuItem>
            <MenuItem value="state">{rowData.data.state}</MenuItem>
            <MenuItem value="country">{rowData.data.country}</MenuItem>
            </Select>: null
            // rowData.data.address +`${" "}`+ rowData.data.city +`${" "}`+ rowData.data.zipcode  +`${" "}`+rowData.data.state 
        )
    
    },
        {title:'NFC',field:'nfcGet' ,align:'center',},
        {title:'TotalEarned',field:'totalearned',align:'center',},
        {title:'Totalamount',field:'totalAmount',align:'center',type:'currency',currencySetting:{minimumFractionDigits:0 }},
        {title:'Paymentaddress',field:'paymentAddress',align:'center'},
        {title:'RequestPayment',field:'paymentrequest',align:'center',},
        
        
       
    ]
    

    const submitDetais=()=>{
        history.push('/admin/travis')
    }
    return (
        <div>
            <div align='end'>
                {/* <ExitToApp onClick={()=>submitDetais()}/> */}
     <button type="button" style={{width:"10%",height:50,color:'tomato',backgroundColor:'white'}} onClick={()=>submitDetais()}>Log out<ExitToApp/></button>
     </div>
            <h2 align='center' >Payment Dashboard</h2>
            <MaterialTable
             tableRef={tableRef}
             actions={[
                {
                  icon: Refresh,
                  tooltip: 'Refresh Data',
                  isFreeAction: true,
                  onClick: () => window.location.reload()
                  
                },
                {
                  icon: Payment,
                  tooltip: 'referral amount',
                  onClick: (event, rowData) => history.push('/privacy/policy')
                },
                {
                  icon: Nfc,
                  tooltip: 'Send Nfc',
                  onClick: (event, rowData)=>console.log("You want to delete ",rowData._id)
                }
              ]}
            editable={{
                
                // onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                //     console.log('profile me newRow',newRow)
                //     console.log('profile me oldRow',oldRow)
                // }),
                // onRowDelete:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                //     console.log('profile me newRow',newRow) 
                //     console.log('profile me oldRow',oldRow)
                // })
            }}
            columns={columns}
            data={user}
            title="Payment Dashboard"
            options={{ actionsColumnIndex:-1, searchFieldAlignment:'left',
            exportButton:true, exportAllData:true, searchFieldVariant:'filled',paging:true,paginationType:'stepped',showFirstLastPageButtons:false,showSelectAllCheckbox:true}}
            />
             <ToastContainer />
        </div>
    )
}

export default Table
