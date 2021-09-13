import React from 'react'
import Background from '../imagess/background.png';

function Home() {


    const click =()=>{
        window.open('https://www.apple.com/app-store/','')
    }
    const goclick =()=>{
        window.open('https://play.google.com/store/apps','')
    }
    const clickedsocial=(url)=>{
        window.location.replace(url)    }
    const submitDetais=()=>{
        console.log('sdfd')
    }

    return (<>
        <div className='boddy' style={{background:`url(${Background})`,backgroundRepeat:'no-repeat'}}>
        <nav style={{position:'fixed',zIndex: '1'}} >
<div className="nav-wrapper white " >
<a href="#" className="brand-logo center" id="colorswop"><img src='/images/swopp.png'  className="imgbar2"  alt='srcoic'/></a>
<ul id="nav-mobile" className="right" >
  {/* <li ><a href="#" >Swop </a></li> */}
  
</ul>
</div>


</nav> 
<div align="center">
<img src='/images/swoplogo.png' className="img-fluid" alt='hihi' style={{marginTop:80}}/>

</div>

<div align="center" style={{marginTop:20}}>
      <h2>SWOP</h2>
    </div>
    <div className='image-contact'>
    <div  style={{display:'flex',flexDirection:'row',marginTop:5,flexWrap:'wrap',flexGrow:1,alignItems:'stretch',justifyContent:'space-evenly'}}>
    
      
     <div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://facebook.com')}>
        
        <img src='/images/socialImages/social/Facebook.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
      </div>
      <div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://swopme.app')}>
      <img src='/images/socialImages/social/Instagram.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
  </div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://swopme.app')}>
         <img src='/images/socialImages/social/Twitter.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
</div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://www.linkedin.com/in/swop-app-87323a220')}>
          <img src='/images/socialImages/social/Linkedin.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
</div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://www.youtube.com/channel/UCjK7eFslL2ag6def784BMZA')}>
          <img src='/images/socialImages/social/Youtube.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/> </div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://pin.it/1na0lQ7')}>
          <img src='/images/socialImages/social/Pinterest.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
</div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://TikTok.com/')}>
          <img src='/images/socialImages/social/TikTok.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
</div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://Snapchat.com/')}>
         <img src='/images/socialImages/social/Snapchat.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
</div>
<div className="responDiv" style={{width:"30%",alignSelf:'center',display:'flex',justifyContent:'center',marginTop:10}}
      onClick={()=>clickedsocial('https://swopme.app')}>
         <img src='/images/socialImages/more/Website.png'
         style={{width:"100%",alignSelf:'center',height:"100%"}}
         alt={'haha'+ Math.floor(Math.random()*100)}/>
       
     </div>
     
     </div>
     <div align='center' style={{marginTop:20,marginBottom:30}}>
                {/* <ExitToApp onClick={()=>submitDetais()}/> */}
     <button type="button" style={{width:"50%",borderRadius:15, height:50,color:'#FCFCFF',backgroundColor:'#536DEF'}} onClick={()=>submitDetais()}>Get SWOP</button>
     </div>
      </div>

</div>
        
        </>
    )
}

export default Home
