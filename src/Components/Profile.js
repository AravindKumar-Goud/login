import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Profile() {
    
    const state=useSelector(state=>state)
    const navigate=useNavigate()

    const [first_name,setFirst_name]=useState("")
    const [last_name,setLast_name]=useState("")
    const [gender,setGender]=useState("")
    const [skills,setSkills]=useState({
        lan:[]
    })
    const [country,setCountry]=useState("")
    const [image,setImage]=useState("")


    useEffect(()=>{
        axios.get("http://192.168.4.109:8080/api/profile",{
            headers:
            {
                'Authorization':'Bearer '+state.token
            }  
        }).then(res=>{console.log(res)
            if(res.data!==""){
                navigate("/profile/display")
            }
            
            
        })
    },[])
    const submit1=(e)=>{
        e.preventDefault()
    const formData= new FormData()
   
        formData.append("first_name",first_name)
        formData.append("last_name",last_name)
        formData.append("gender",gender)
        formData.append("skills",skills.lan.join())
        formData.append("country",country)
        formData.append("image",image)
        console.log(formData)
        for(let each of formData.entries()){
            console.log(each);
        }
    
        console.log(state.token)
        axios.post("http://192.168.4.109:8080/api/profile",formData,
        {
            headers:
            {
                'Authorization':'Bearer '+state.token
            }
        }).then((res)=>{
            console.log(res)
            navigate("/profile/display")
        }).catch(err=>console.log(err))

    }
    const checkbox1=(e)=>{
        const {value,checked}=e.target;
        const {lan}=skills
        if (checked){
            setSkills({
            lan:[...lan,value],
            // res:[...lan,value],
          })
        }else{
            setSkills({
            lan:lan.filter((e)=>e!==value),
            // res:lan.filter((e)=>e!==value),
          });
        }
        
      };
      

  return (
  <>

    <form className="shadow-lg p-5 m-5 bg-info rounded text-purple" onSubmit={submit1}>
        <h3 className="text-center text-white">Profile</h3>
        <label className='mt-3'>firstName</label><br></br>
        <input required type="text" value={first_name} onChange={(e)=>setFirst_name(e.target.value)} /> <br></br>
        <label className='mt-3'>Last name</label><br></br>
        <input required type="text" value={last_name} onChange={(e)=>setLast_name(e.target.value)} /> <br></br>
        <label className='mt-3'>gender</label>
        <div className="form-check">
  <input required className="form-check-input" type="radio" name="gender" id="exampleRadios1" value="male"
   onChange={(e)=>setGender(e.target.value)} />
  <label className="form-check-label" htmlFor="exampleRadios1">
    male
  </label>
</div>
<div className="form-check">
  <input required className="form-check-input" type="radio" name="gender" id="exampleRadios2" value="female"
  onChange={(e)=>setGender(e.target.value)}/>
  <label className="form-check-label" htmlFor="exampleRadios2">
    Female
  </label>
</div>

<label className='mt-3'>Skills</label>
<div className="form-check">
  <input className="form-check-input" type="checkbox" id="check1" name="option1" value="html" onChange={checkbox1} />
  <label className="form-check-label">Html</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" id="check1" name="option1" value="css"onChange={checkbox1} />
  <label className="form-check-label">Css</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" id="check1" name="option1" value="javascript" onChange={checkbox1} />
  <label className="form-check-label">javascript</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" id="check1" name="option1" value="React" onChange={checkbox1} />
  <label className="form-check-label">React</label>
</div>
<label className='mt-3'>Country</label><br></br>
<select required onChange={(e)=>setCountry(e.target.value)}>
    <option >country</option>
    <option>india</option>
    <option>pakisthan</option>
    <option>usa</option>
</select>
<br></br>
<label className='mt-3'>upload file</label><br></br>
<input required type="file" onChange={(e)=>setImage(e.target.files[0])}/><br>
</br>

<button  className="btn-primary m-3" type='submit'> Submit</button>

    

    </form>
    </>
    )
}

export default Profile