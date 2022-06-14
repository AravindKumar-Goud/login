import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfileDisplay() {
    const state=useSelector(state=>state)
    const [posts,setPost]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://192.168.4.109:8080/api/profile",{
            headers:
            {
                'Authorization':'Bearer '+state.token
            }  
        }).then(res=>{console.log(res)
            setPost(res.data)
             
            
           
            
        })
    },[])

    // {  url=}
  return (
      <>
      
    <div className="shadow-lg p-5 m-5 bg-white rounded" >
    <div className='' style={{float:'right'}}>
            {/* <button className="btn-primary "  onClick={()=>{navigate("/home")}}>Home</button> */}
        </div>
        <div>
        <h2 className='text-center'>Profile details</h2>
        <h3>Fullname : {posts?.first_name} {posts.last_name}</h3>
        <h3>gender : {posts?.gender}</h3>
        <h3>Skills : {posts?.skills}</h3>
        <h3>Country : {posts?.country}</h3><br>
        </br>
        <h3>image</h3>
         <img src={`http://192.168.4.109:8080/storage${posts?.image?.slice(6)}`} style={{width:"500px",height:"450"}}/>
   
         </div> </div>
    </>
  )
}

export default ProfileDisplay