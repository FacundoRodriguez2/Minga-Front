import React from "react";
import './companyForm.css'
import Input from "../input/input";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import image from "../../images/image.png"
import apiUrl from "../../url";

export default function companyForm() {
    let dataForm = useRef()
    let {user_id} = useParams()
    console.log(user_id)
    async function handleSubmit(e){
        e.preventDefault()

        let formInputs = []
        Object.values(dataForm.current).forEach(e => {
            if(e.name){
                formInputs.push(e.value)
            }
        })

        let data = {
        name: formInputs[0],
        logo: formInputs[1],
        website: formInputs[2],
        description: formInputs[3],
        user_id
        }

        console.log(data)
        let url = `${apiUrl}companies`
        let token = localStorage.getItem('token')
        console.log(token)
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        try{
            await axios.post(url,data,headers)
            alert('Company created successfully')
            dataForm.current.reset()
          }catch(error){
            console.log(error)
            
            if (error.response.data === 'Unauthorized') {
                alert('You need to Login')
            }
            if(typeof error.response.data.message === 'string'){
                alert(error.response.data.message)
               }else{
                error.response.data.message.forEach(err => alert(err))
               }
          }
    }
        return(
        <div id="companybox">
            <div id="companycontent">
                <div id="newCompany" >
                    <h2>New Company</h2>
                </div>

                <div>
                    <img src={image} alt="profile"/> 
                </div>

                <form id="companyform" ref={dataForm} onSubmit={handleSubmit}>
                    <Input className='companyinput' type='text' name='name' placeholder='Name'/>
                    <Input className='companyinput' type='url' name='logo' placeholder='Logo'/>
                    <Input className='companyinput' type='url' name='website' placeholder='Web Site'/>
                    <Input className='companyinput' type='text' name='description' placeholder='Description'/>
                    <Input id='send' type='submit' value='Send'/>
                </form>
            </div>
        </div>
    )

}
