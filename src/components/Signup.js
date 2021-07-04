import React ,{useEffect,useState}from 'react'
import { Fragment } from 'react'
import  {link,useParams,useHistory} from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';

function NavBar() {
  const [pic,setPic]=useState('')
  const [username,setUsername]=useState('')
  const [links,setLinks]=useState([])
  const {postid}=useParams()
  const[user,setUser]=useState('')
  const[url,setUrl]=useState('')

  const history =useHistory()
 
useEffect(()=>{
fetch(`https://travherswopapp.herokuapp.com/${postid}`).then(res=> res.json()).then(data=>{
  if(data.error){
    console.log('nothing')

  }else if(data.user.direct){
    setUser(data.user.direct.usernam);
    setUrl(data.user.direct.url)
  }

  else{
   
    console.log("ids are",data.user.accountlinks)
    data.user.accountlinks.map(item=>console.log("ids are",item._id))
    setPic(data.user.pic);setUsername(data.user.accountuser);
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
const clicked=()=>{
  alert("Please Download Swop")
}

   return (
        <>
        {(url && user)?
    
    window.location.replace(`${url}${user}`)

 :(<div>
  <nav style={{position:'fixed', zIndex: '3'}}>
<div className="nav-wrapper black" >
<a href="#" className="brand-logo center" id="colornone">Buy Swop with</a>
<ul id="nav-mobile" className="right" >
  {/* <li ><a href="#" >Swop </a></li> */}
  
</ul>
</div>
</nav>
<nav style={{position:'fixed',zIndex: '2',top:'55.5px'}}>
<div className="nav-wrapper white" >
<a href="#" className="brand-logo center" id="colorswop">Swop</a>
<ul id="nav-mobile" className="right" >
  {/* <li ><a href="#" >Swop </a></li> */}
  
</ul>
</div>
</nav>


<div className="card shadow"style={{backgroundColor:'white'}} >
  <div className='image' style={{marginTop:'65px'}}>
    {
      (pic)?<img src={pic} className="img-fluid" alt='pic'/>:
      <img src='/images/propic.png'  alt='pic'/>
    }

</div>
<div className='image'>
  <h3>username </h3>
</div>
<div className='image fontfam'>
  <p>swopapp.me/{username}</p>
</div>
<div className='image'>
<button onClick={clicked} className="text-capitalize btn btn-secondary">Direct On</button >
<button onClick={clicked} className="text-capitalize btn btn-secondary">Edit Profile</button >
</div>
<div className='image fontfam '>
  <p>Swop Opens To Your First Link</p>
</div>
{/* <div className='image fontfam '>
  <i className="fa fa-linkedin "></i>
</div> */}
<div className='image flexx '>
  {links?
  links.map((item)=>{
    return(
      // <div className='social'>
     <div style={{color:item.color,borderRadius:'10px',border:'2px white solid',margin: '2px 5px',marginBottom:'2px', boxShadow: "3px 5px 6px #9E9E9E"}}  
      onClick={()=>clickedsocial(item.url,item.usernam)}>
        <i className={`fa fa-${item.nameIcon} fa-5x`}></i>
       
      
       </div>
       
      //  </div>
     
     
    )
  })
  :null}
</div>
{/* <div className='image'>
  <FaFacebook size="6em" color="blue" onClick={haddleClicked}/>
</div> */}
<div className='image fontfamily'>
  <h3>Swop me</h3>
</div>
<div className='image fontfamily'>
  <h3>Patent Pending</h3>
</div>
<div className='image fontfamily'>
  <p>Support Center</p>
</div>




</div>
</div>)}
 
        </>
    )
}

export default NavBar
