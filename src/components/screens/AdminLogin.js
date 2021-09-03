import React ,{useEffect,useState}from 'react'
import { useHistory } from "react-router-dom";
import Background from '../imagess/background.png';

import { Alert } from 'react-alert'
function AdminLogin() {
    const history = useHistory();

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [emailwrong, setEmailwrong] = useState('');
    const [passwrong, setPasswrong] = useState('')
    const[loading,setLoading]=useState(false)

    const submitDetais=()=>{
        if(password.length<1){
            alert("Please Add All the Fields")
            setPassword('')
          }
         
          if(email.length<1 ){
            alert("Please Add All the Fields")
            setEmail('')
          } 
          else{
          
                setLoading(true)
                 fetch("https://travherswopapp.herokuapp.com/admin/travis",{
                   method:'POST',
                   headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                   body:JSON.stringify({  
                    
                    "email":email,
                    "password":password 
        
                   })
                 }).then(res=> res.json()).then(async (data)=>{if(data.error){ console.log(data.error);
                    setEmail('');setPassword('')
                    alert(data.error)
                  
                   setLoading(false)
                  //  setPasswrong(data.error.password);setUserwrong(data.error.fullname)
                  }
                   else{
                    setLoading(false)
                  
                    
                    history.push('/admin/dashboard');setEmail('');setPassword('');}})
                 .catch(err=> {
                   setLoading(false) 
                   console.log('err',err)})
                  
                
                 
                     
                
            }
    }
    return (
    <div  className='wholediv' style={{background:`url(${Background})`,backgroundRepeat:'no-repeat'}}>
     <div >
   <input type='email' className="seenit" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
     </div>
     <div>
     {(emailwrong)?( <h5 style={{fontSize:14,marginTop:10,color:'#3C3B3B'}}>{emailwrong}</h5>):null}

     <input type='password' value={password}  placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
     </div>
     {(passwrong)?(<h5 style={{fontSize:14,marginTop:10,color:'#3C3B3B'}}>{passwrong}</h5>):null}

     <div align='center'>
     <button type="button" style={{width:"50%",height:50,borderColor:'white'}} onClick={()=>submitDetais()}>Sign in</button>
     </div>
       </div> 
    )
}

export default AdminLogin
