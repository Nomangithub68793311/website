import React ,{useEffect,useState}from 'react'
import { Fragment } from 'react'
import  {link,useParams,useHistory} from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function NavBar() {
  const [pic,setPic]=useState('')
  const [username,setUsername]=useState('')
  const [account,setAccount]=useState('')
  const [links,setLinks]=useState([])
  const {postid}=useParams()
  const[user,setUser]=useState('')
  const[url,setUrl]=useState('')
  const[loading,setLoading]=useState(true)
  const[data,setData]=useState('')
  const history =useHistory()
 
useEffect(()=>{
fetch(`https://travherswopapp.herokuapp.com/${postid}`).then(res=> res.json()).then(data=>{
  if(data.error){
   

  }else if(data.user.direct){
    setLoading(false)
    setUser(data.user.direct.usernam);
    setUrl(data.user.direct.url)
  }

  else{
    setLoading(false)
    
    // data.user.accountlinks.map(item=>console.log("ids are",item.picname, item.group))
    setPic(data.user.pic);setUsername(data.user.username);setAccount(data.user.accountuser)
    data.user.accountlinks? 
    // setLinks(data.user.accountlinks)
    setLinks((pre)=>{
        return[...pre,...data.user.accountlinks]
    })
    :setLinks([])
    
   
  }
   
}).catch(err=>{
  // console.log('error no')
})
},[])
// const haddleClicked=(event)=>{
//   event.preventDefault();
//   window.open('https://www.facebook.com/rana.buddy/','')

// }
const clickedsocial=(url,usernam,group,placeholder)=>{
  if(group=="crypto"){
    navigator.clipboard.writeText(usernam)
    return toast("Successfully Copied")
  }
  else if(placeholder=="WhatsApp Number"||placeholder=="FaceTime"){
    return window.open(`${url}${usernam}`,'_self')
  }
  else if(placeholder=="Phone Number"){
    return window.open(`${url}${usernam}`,'_self')
  }
  else if(placeholder=="Email Address"){
    return window.open(`${url}${usernam}`,'_self')
  }
  else if(placeholder=="Number Number"){
    return window.open(`${url}${usernam}`,'_self')
  }
 else if(group=="payment"){
    if(placeholder=='Paypal.me Link'){
      return  window.open(`${usernam}`,'_self')
    }else{
      navigator.clipboard.writeText(usernam)
      return toast("Successfully Copied")
    }
    
  }
  
  else{
    // navigator.clipboard.writeText(window.location.toString())

    return   window.open(`${usernam}`,'')
    //  window.location.replace(`${usernam}`)
   

  }

}
const submitDetais=()=>{
  // console.log("Please Download Swop")
}
const hello =()=>{
  console.log("Please Download Swop")
  // navigator.clipboard.writeText(window.location.toString())

  navigator.clipboard.writeText("copied")
    return toast("Successfully copied")

}


   return (
        <>
        {loading?<div className='spin' style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}><CircularProgress /></div>:
        (user)?
    
    window.location.replace(`${user}`)

 :(
<div >
   <nav style={{position:'fixed',zIndex: '1'}}>
        <div className="nav-wrapper white" >
            <a href="https://swopme.app" className="brand-logo center" id="colorswop"><img src='/images/swopp.png'  className="imgbar"  alt='srcoic'/></a>
            <ul id="nav-mobile" className="right" >
          
            </ul>
        </div>
   </nav>


  <div style={{backgroundColor:'white',display:'flex',flexDirection:'column'}} >
    <div className='image ' style={{marginTop:80}}>
      {
        (pic)?<img src={pic} className="img-fluid" alt='pic'/>:null
        // <img src='/images/propic.png'  alt='pic'/>
      }

  </div>
  <div className='image font-name' style={{marginTop:20}}>
      <h1>{account}</h1>
    </div>
    <div className='image fontfam' >
      <p>swopme.app/{username}</p>
    </div>

<div className='image-contact'>
  <div  style={{display:'flex',flexDirection:'row',marginTop:5,flexWrap:'wrap',flexGrow:1,alignItems:'stretch',justifyContent:'space-evenly'}}>
    {links?
     links.map((item)=>{
     return( 
      // <div className='social'>
     <div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial(item.url,item.usernam,item.group,item.placeholder)}>
        {/* <i className={`fa fa-${item.nameIcon} fa-5x`}></i> */}
        <img src={`/images/socialImages/${item.group}/${item.picname}`} 
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
      
       {/* </span> */}
       
     </div>
     
     
    )
        })
        :null}
      </div>
      </div>

      {/* <div className='image fontfamily'>
        <h3  style={{fontSize:15}}>Patent Pending</h3>
      </div> */}


<div align='center' style={{marginTop:20,marginBottom:30}}>
                {/* <ExitToApp onClick={()=>submitDetais()}/> */}
     <button type="button" style={{width:"50%",borderRadius:15, height:50,color:'#FCFCFF',backgroundColor:'#536DEF'}} onClick={()=>submitDetais()}>Get SWOP</button>
     </div>

 
{/* <div align='center' style={{marginTop:20,marginBottom:30}}>
                
                <button 
  onClick={() =>  copyToClipboard()}
>
  Copy
</button>   
  </div> */}
  <ToastContainer />
</div>
</div>)
 
      }</>
    )
}

export default NavBar
