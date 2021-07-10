import React from 'react'

function Home() {


    const click =()=>{
        window.open('https://www.apple.com/app-store/','')
    }
    const goclick =()=>{
        window.open('https://play.google.com/store/apps','')
    }
    return (<>
        <div className='boddy'>
        <nav >
<div className="nav-wrapper boddy " >
<a href="#" className="brand-logo center" id="colorswop"><img src='/images/swopp.png'  className="imgbar2"  alt='srcoic'/></a>
<ul id="nav-mobile" className="right" >
  {/* <li ><a href="#" >Swop </a></li> */}
  
</ul>
</div>
</nav> 
<div className="display">
    <div className="displayone">
    <h1 style={{fontSize:50,color:'white',marginLeft:50}}>Amazing Swop Experience </h1>
    <h1 style={{fontSize:50,color:'white',marginLeft:50}}> For Your Friends And Family</h1> 
    <h1 style={{fontSize:15,color:'white',marginLeft:50}}> LET YOU SHARE EVERYTHING IN YOUR LIFE WITH A SIMPLE WAY</h1>    
    <img src='/images/google.png'  className="imgbarhome"  alt='srcoic' onClick={()=>click()}/>
    <img src='/images/newpicc.png'  className="imgbarhome" onClick={()=>goclick()}  alt='yooy'/>
    </div>
    <div>
    <div>
    <img src='/images/newiphone.png'  className="imgbarhomeiphone displayone"  alt='haha'/>
    </div>
    </div>
    
</div> 
<div  className="displayfooter">
<div>

</div>
<div>

</div>
</div>
        </div>
        </>
    )
}

export default Home
