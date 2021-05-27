import React ,{useEffect,useState}from 'react'
import { Fragment } from 'react'
import  {link,useParams,useHistory} from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';

function NavBar() {
  const [pic,setPic]=useState('')
  const [username,setUsername]=useState('')
  const [links,setLinks]=useState([])
  const {postid}=useParams()
  const history =useHistory()
 
useEffect(()=>{
fetch(`https://newbackendswop.herokuapp.com/${postid}`).then(res=> res.json()).then(data=>{
  if(data.error){
    console.log('nth')

  }else{
    console.log('something',data.user)
    
    data.user.accountlinks.map((item)=>{
   return(
     console.log(item.title)
   )
    })
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
const haddleClicked=(event)=>{
  event.preventDefault();
  window.open('https://www.facebook.com/rana.buddy/','')

}
   return (
        <>
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
 
 
      <div className="card "style={{backgroundColor:'white'}} >
        <div className='image' style={{marginTop:'65px'}}>
          {
            (pic)?<img src={pic} alt='pic'/>:
            <img src='/images/propic.png'  alt='pic'/>
          }
      
      </div>
      <div className='image'>
        <h3>Username </h3>
      </div>
      <div className='image fontfamily'>
        <p>swopapp.me/{username}</p>
      </div>
      <div className='image'>
      <a className="  btn">Direct On</a>
      <a className="  btn">Edit Profile</a>
      </div>
      <div className='image '>
        <p>Your Swop opens directly to your first link</p>
      </div>
      <div className='social'>
        {links?
        links.map((item)=>{
          return(
            
           <h5>
             {item.title}
           </h5>
           
           
          )
        })
        :null}
      </div>
      <div className='image'>
        <FaFacebook size="6em" color="blue" onClick={haddleClicked}/>
      </div>
      <div className='image'>
        <h3>Swop me</h3>
      </div>
      <div className='image'>
        <h3>Patent Pending</h3>
      </div>
      <div className='image'>
        <p>Support Center</p>
      </div>
      
     
      
      
      </div>
     
        </>
    )
}

export default NavBar
