import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Registation() {
    const navigate=useNavigate()
    const [errormsg,setErrorMsg]=useState("")
    const [error,setError]=useState(undefined)


    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [c_password,setcPassword]=useState("")

    const submit1=(e)=>{
        e.preventDefault()
        console.log(name,email,password,c_password)
        axios.post("http://192.168.4.109:8080/api/register",{
           name,email,password,c_password
        })
        .then(res=>{
            console.log(res.data.success.token)
            setError(false)
           navigate('/login')
        })   
        .catch(err=>{
          console.log(err)
          setError(true)
          setErrorMsg(err.response.data.error)
        })
        
    }
    const login1=()=>{
        navigate('/login')

    }

  return (
    <>
    <div className='d-flex flex-column justify-content-center'>
    <form className="shadow-lg p-5 m-5 bg-info rounded" onSubmit={submit1}>
      <h3  className='text-center'>Registration</h3>
        <label className='mt-3'>Name</label><br></br>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        required/><br></br>
        {error?<p style={{color:"red"}}>{errormsg.name}</p>:
        null}
        <label className='mt-3'>mail</label><br></br>
        <input type="mail" value={email} onChange={(e)=>setEmail(e.target.value)}
        required/><br></br>
        {error?<p style={{color:"red"}}>{errormsg.email}</p>:
        null}
        <label className='mt-3'>password</label><br></br>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
        required/><br></br>
        {error?<p style={{color:"red"}}>{errormsg.password}</p>:
        null}
        <label className='mt-3'>Confirm password</label><br></br>
        <input type="password" value={c_password} onChange={(e)=>setcPassword(e.target.value)}
        required/><br></br>
        {error?<p style={{color:"red"}}>{errormsg.c_password}</p>:
        null}
        <button type="submit" className='btn-primary'>registartion</button>
        <button className='btn-success m-3' onClick={login1}>Login</button>
    </form><br></br>
    
   </div>
    </>
  )
}

export default Registation