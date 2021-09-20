import React ,{useEffect,useState}from 'react'
import { Fragment } from 'react'
import  {link,useParams,useHistory} from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
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

  const history =useHistory()
 
useEffect(()=>{
fetch(`https://travherswopapp.herokuapp.com/${postid}`).then(res=> res.json()).then(data=>{
  if(data.error){
    console.log('nothing')

  }else if(data.user.direct){
    setLoading(false)
    setUser(data.user.direct.usernam);
    setUrl(data.user.direct.url)
  }

  else{
    setLoading(false)
    console.log("ids are",data.user.accountlinks)
    data.user.accountlinks.map(item=>console.log("ids are",item.picname, item.group))
    setPic(data.user.pic);setUsername(data.user.username);setAccount(data.user.accountuser)
    data.user.accountlinks? 
    // setLinks(data.user.accountlinks)
    setLinks((pre)=>{
        return[...pre,...data.user.accountlinks]
    })
    :setLinks([])
    console.log('arry',links)
   
  }
   
}).catch(err=>{
  console.log('error no')
})
},[])
// const haddleClicked=(event)=>{
//   event.preventDefault();
//   window.open('https://www.facebook.com/rana.buddy/','')

// }
const clickedsocial=(url,usernam)=>{
  window.open(`${url}${usernam}`,'')
}
const submitDetais=()=>{
  console.log("Please Download Swop")
}

   return (
        <>
        {loading?<div className='spin' style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}><CircularProgress /></div>:
        (url && user)?
    
    window.location.replace(`${url}${user}`)

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
  <div className='image fontfam' style={{marginTop:20}}>
      <p>{account}</p>
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
      onClick={()=>clickedsocial(item.url,item.usernam)}>
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


</div>
</div>)
 
      }</>
    )
}

export default NavBar
