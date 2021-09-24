import React ,{useEffect,useState}from 'react'
import { useHistory } from "react-router-dom";
import Background from '../imagess/background.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Alert } from 'react-alert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
function AdminLogin() {
    const history = useHistory();
    const classes = useStyles();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [emailwrong, setEmailwrong] = useState('');
    const [passwrong, setPasswrong] = useState('')
    const[loading,setLoading]=useState(false)

    const submitDetais=()=>{
        if(password.length<1){
         return toast("Please Add All the Fields")
           
            setPassword('')
          }
          
          if(email.length<1 ){
            return  toast("Please Add All the Fields")
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
                 }).then(res=> res.json()).then(async (data)=>{if(data.error){ 
                  setLoading(false)
                  toast("Invalid Email Or Password")
                    setEmail('');setPassword('')
                   
                  
                   setLoading(false)
                  //  setPasswrong(data.error.password);setUserwrong(data.error.fullname)
                  }
                   else{
                    setLoading(false)
                  
                    
                    history.push('/privacy/policy/table');setEmail('');setPassword('');}})
                 .catch(err=> {
                   setLoading(false) 
                  })
                  
                
                 
                     
                
            }
    }
    return (<>
      <div>
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
     <button disabled={loading} type="button" style={{width:"50%",height:50,borderColor:'white'}} onClick={()=>submitDetais()}>
    {loading?
    <CircularProgress />
      :'Sign in'
      }
      </button>
     </div>
   {/* <div className={classes.root}>
     <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} >myboy </Paper>
      </div> */}
       </div> 
       </div>
       <ToastContainer />
       </>
    )
}

export default AdminLogin
