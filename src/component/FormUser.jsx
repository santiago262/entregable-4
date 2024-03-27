import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
export default function FormUser({setUserEdit,updateUser,postUser,userEdit,handleClose}) {
    const {handleSubmit ,register,reset} = useForm()
    const submit=(data)=>{
      if(userEdit){updateUser("/users/",data.id,data)
      setUserEdit()
      handleClose()

      
      }else{postUser("/users/",data)}
        
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
          })
          handleClose()
    }
    useEffect(()=>{
        reset(userEdit)
        
        
      },[userEdit])
      
  return (
    <form onSubmit={handleSubmit(submit)}>
      
    <label className='inputBox'>
      <span>Email</span>
      <input {...register("email")}type="email"required/>
    </label>
    <label className='inputBox'>
      <span>Password</span>
      <input {...register("password")} type="password" required/>
    </label>
    <label className='inputBox'>
      <span>First Name</span>
      <input {...register("first_name")} type="text" required />
    </label>
    <label className='inputBox'>
      <span>Last name</span>
      <input  {...register("last_name")} type="text" required/>
    </label>
    <label className='inputBox'>
      <span>birthday</span>
      <input {...register("birthday")}type="date"  required/>
    </label>
  
<button class="button">
Submit
</button>
  </form>
  )
}
