import './verify.css'
import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import userAction from "../../store/user/actions"
// import Swal from 'sweetalert2'
import { Link as Anchor } from 'react-router-dom'

const { verify_account } = userAction

export default function Verify() {
  const Store = useSelector((store) => store.user)
  console.log(Store)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)


  useEffect(() => {
      dispatch(verify_account({verify_code: params.verify_code}))
  
  })

  return (
    <div className="containerGeneral">
      <div className='content'>
          <h1 id='h1verify'>Your account has been verified</h1>
          <Anchor className="anchor" to={"/"}>Explore</Anchor>
      </div>
    </div>
  )
}