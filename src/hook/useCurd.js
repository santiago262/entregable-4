import React, { useState } from 'react'
import axios from "axios"
export default function useCurd(BASEURL) {
  const [response, setResponse] = useState()
  const getApi=(path)=>{
    const url=`${BASEURL}${path}`
    axios.get(url).then((res) => {
      console.log(res.data)
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
  const updateApi = (path, id, data) => {
    const url = `${BASEURL}${path}${id}/`;
    console.log(url)
    axios.put(url, data)
        .then(res => {
            // Actualiza la respuesta solo si la solicitud fue exitosa
            setResponse(prevResponse => {
                // Mapea sobre la respuesta anterior y actualiza solo el elemento correspondiente
                return prevResponse.map(item => {
                    if (item.id === id) {
                        // Combina los datos antiguos con los nuevos
                        return { ...item, ...res.data };
                    }
                    return item;
                });
            });
        })
        .catch(err => console.log(err));
};

return [response,getApi,postApi,deleteApi,updateApi]
}
