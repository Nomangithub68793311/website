import React ,{useEffect,useState,useCallback}from 'react'
import { useHistory } from "react-router-dom";
import Background from '../imagess/background.png';
function AdminDataPage() {
    const [user,setUser]=useState([])
    // const [address,setAddress]=useState('');
    // const [city,setCity]=useState('');
    // const [state,setState]=useState('');
    // const [idd,setIdd]=useState('');

    useEffect(()=>{
        
        const fectData= async ()=>{ 
           
            fetch('https://travherswopapp.herokuapp.com/admin/travis',{ })
            .then(res=>res.json()).then((details)=>{if(details.error){console.log("vul")}else{
                setUser(details.users.userTotal)
              }}).catch(err=>{console.log("pro erro",err)})
    }    

    fectData() 
    return()=>{
        console.log('profile me')
    }
      
 }, [])
//  function getBio(id){
//     fetch(`https://travherswopapp.herokuapp.com/admin/travis/bio/${id}`)
//     .then(res=>res.json()).then((details)=>{if(details.error){console.log("vul")}else{
//         setAddress(details.user.data.country)
//         setCity(details.user.data.city)
//         setState(details.user.data.state)

//         // console.log("yes",address)  
//         // console.log("yes",details.user.data.city)  
//         // console.log(details.user.data.city)
//         // console.log(details.user.data.address)
//         // console.log(details.user.data.zipcode)
//         // console.log(details.user.data.country)
//         // console.log(details.user.data.state)
//         // return  (<td>{details.user.data.address}</td>)
       

//       }}).catch(err=>{console.log("pro erro",err)})

//     //   return <td>{address.city}</td>
      
//  }

// const getBio=useCallback((id)=>{
//     const yes=()=>{
//         fetch(`https://travherswopapp.herokuapp.com/admin/travis/bio/${id}`)
//         .then(res=>res.json()).then((details)=>{if(details.error){console.log("vul")}else{
//             setAddress(details.user.data.country)
//             setCity(details.user.data.city)
//             setState(details.user.data.state)
           
//         }})
//         .catch(err=>console.log('err'))
//     }
   
   
//     yes();
//     return()=>{
//         console.log('profile me')
//     }
   
// },[])
const activateLasers=()=>{
    console.log('profile me')
}

    return (
    <div   style={{background:`url(${Background})`,backgroundRepeat:'no-repeat'}}> 
     {/* <img src='/images/background.png'  className="imgbarhomeiphone displayone"  alt='haha'/> */}
   
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <h2>Dashboard</h2>
           </div> 
 <table>
    <tr>
        <th >Email</th>
        <th >NFC</th>
        <th>TotalAmount</th>
        <th>PaymentAddress</th>
        <th >Address</th>
        <th >Action</th>
    </tr>
 
       {user?user.map((item)=>{
             return( 
            <>
             <tr style={{borderWidth:2,borderColor:'grey',marginBottom:10, borderRadius:20}}>
             
             <td  >{item.email}</td> 
            
            
             <td  >{item.nfcGet?item.nfcGet:0}</td> 
            
             
             <td  >{item.totalAmount}</td> 
             <td  >{item.paymentAddress?item.paymentAddress:'empty'}</td> 
             <td  >{item.data?item.data.address:''}{" "}{ item.data?item.data.zipcode:''}{" "}{  item.data?item.data.city:''}{" "}{item.data?item.data.state:''}{" "}{item.data?item.data.country:''}</td> 
             <td  ><button style={{margin:10}} onClick={activateLasers}> Edit </button><button onClick={activateLasers}>delete</button></td> 

            
            
             </tr>
            </>
              
             )
        }):null}

  



  
</table>

        </div>
        
    )
}

export default AdminDataPage
