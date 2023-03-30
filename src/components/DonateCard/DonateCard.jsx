import React from 'react'
import './donatecard.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import apiUrl from "../../url.js"


export default function DonateCard({donate}) {
    let url = `${apiUrl}payments`
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    const handleClick =  async () => {
        try {
            await axios.post(url, donate, headers)
                       .then(res => (window.location.href = res.data.response.body.init_point))
                      await Swal.fire({
                        icon: "success",
                        title: "EXITO",
                        text: "Lx redirigiremos a la pagina de Mercadopago"})
                      
        } catch (error) {
            if(error.response){
                if (typeof error.response.data.message === 'string') {
                    Swal.fire({
                        icon: "error",
                        tittle: "Something went wrong",
                        text: error.response.data.message,
                    })
                } else {
                   error.response.data.message.forEach(err => Swal.fire({text: err}))
                }
              }else{
                   Swal.fire({text: error.message})
              }
        }
             
    }

    
return (
    <div className='card-donate' onClick={handleClick}>
        <h4>
            {donate.title}
        </h4>
        <p className='desc'>
            {donate.description}
        </p>
        <div className='price'>
        <h5>
            {donate.price}
        </h5>
        </div>
    </div>
)

}