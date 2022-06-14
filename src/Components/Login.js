import React,{useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector, useStore} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../redux/Action'


// import { setToken} from './import '
import {connect} from "react-redux"
import { useAuth } from './Auth'

let token="";
function Login(props) {
    const auth=useAuth()
    //errordisplay
    const [errormsg,setErrorMsg]=useState("")
    const [error,setError]=useState(undefined)


    const state=useSelector(state=>state)
    const dispatch = useDispatch();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    //  const [token,setToken]=useStore("")
    const navigate=useNavigate()
   

    const submit1=async(e)=>{
        e.preventDefault()
        console.log(state,"araaaa")
        console.log(email,password)
        await axios.post("http://192.168.4.109:8080/api/login",{
            email,password
        }).then(res=>{
            console.log(res.data.success.token)
            token=res.data.success.token
            // mapDispatchToProps(dispatch)
            // props.setToken(token)
            dispatch(setToken(token))
            // console.log(props.setToken(token))
            // console.log(props.token)
            // console.log(props)
            setError(false)
            auth.login(email)
            navigate("/home",{replace:true})
        })
        .catch(err=>{
            console.log(err)
            setError(true)
            setErrorMsg(err.response.data.error)
        })

        
            // console.log(props.token)
            // console.log(props.setToken(token))
            // console.log(props.token)
            // /console.log(props)
    }
    const reg=()=>{
        navigate("/")
    }
  return (
    <>
    <form className="shadow-lg p-5 mt-5 bg-info rounded" onSubmit={submit1}>
        <h3 className='text-center'>Login</h3>
    <label className='mt-3'>Email</label><br></br>
    <input type="mail" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br></br>
    {error?<p style={{color:"red"}}>{errormsg}</p>:null}

    <label className='mt-3'>password</label><br></br>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br></br>
    {error?<p style={{color:"red"}}>{errormsg}</p>:null}
   
    <button type="submit" className='m-3 btn-primary'>Login</button>
    <button className='btn-success m-3' onClick={reg}>registration</button>
    </form>

    </>
  )
}

// const mapStateToProps=(state)=>{
//     return{
//         token:state.token
//     }

// }
// const mapDispatchToProps=((dispatch)=>{
//     return{
//         setToken:(token)=>
//             dispatch(setToken(token))
//     }
// // })

// export default connect(mapStateToProps,mapDispatchToProps)(Login)
export default Login