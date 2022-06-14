import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import { setToken } from '../redux/Action'
function Home() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
   const state=useSelector(state=>state)
   const [posts,setPost]=useState([])
   console.log(state.token)
   useEffect(()=>{
     axios.get("http://192.168.4.109:8080/api/contacts",
     {
       headers:{
         'Authorization':'Bearer '+state.token
       }
     }).then((res)=>{
       console.log(res)
       setPost(res.data)
     }).catch(err=>alert(err))
   },[])
   const logout1=()=>{
    dispatch(setToken(''))
    navigate("/login",{replace:true})
   }
   const Profile1=()=>{
    axios.get("http://192.168.4.109:8080/api/profile",{
        headers:
        {
            'Authorization':'Bearer '+state.token
        }  
    }).then(res=>{console.log(res)
      if(res.data!==""){
        navigate("/profile/display")
      }else{
        navigate("/profile")
      }
       
        
    }).catch(err=>{
      navigate("/profile")
    })
   }
   

   

  return (
    <>
    <div className='bg m-5'>
      <div className='text-right' style={{float:"right"}}>
      <button className="btn-primary m-3 " onClick={Profile1}>profile</button>
      <button className="btn-primary mb-3 " onClick={logout1}>Logout</button>
      
      </div>
      
      <Table className='mb-5' hover striped bordered  >
        <thead style={{backgroundColor:"purple",color:"white"}} className=''>
          <tr>
          <th>Name</th><th>Phone</th><th>email</th>
          </tr>
        </thead>
         <tbody>
         {posts.map(post=><tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.phone}</td>
            <td>{post.email}</td>
            


            </tr>)}
            </tbody>
            </Table>
            </div>
    </>
  )
}

export default Home