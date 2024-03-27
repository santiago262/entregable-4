import React, { useState } from 'react'
import axios from "axios"
export default function useCurd(BASEURL) {
  const [response, setResponse] = useState()
  const getApi=(path)=>{
    const url=`${BASEURL}${path}`
    axios.get(url).then((res) => {
    setResponse(res.data)

}).catch(err => console.log(err))
  } 
  const postApi=(path,data)=>{
    const url=`${BASEURL}${path}`
    axios.post(url,data).then(res=>{
        setResponse([...response,res.data])
    }).catch(err=>{console.log(err)})
  }

  const deleteApi=(path,id)=>{
    const url=`${BASEURL}${path}${id}/`
    axios.delete(url).then(res=>{
        console.log(res.data)
        setResponse(response.filter(e=>e.id !==id))
    })
  }
  const updateApi=(path,id,data)=>{
    const url=`${BASEURL}${path}${id}/`
    axios.patch(url,data).then(res=>{
        setResponse(response.map((e)=>e.id=== id?res.data:e))
    }).catch(err=>console.log(err))
  }
return [response,getApi,postApi,deleteApi,updateApi]
}
