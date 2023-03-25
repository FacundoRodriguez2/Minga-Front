import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import './editmodal.css';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import modalActions from '../../store/RenderEditModal/actions'
import closeIcon from '../../images/closeIcon.png'


export default function EditModal(props) {
  const [categories, setcategories] = useState([])
  const [categoria, setCategoria] = useState(null)
  const [mangaToEdit, setMangaToEdit] = useState("")

  let editMangaId = useSelector(store => store.modalState.id)
  let title = useRef();
  let category = useRef();
  let description = useRef();
  let coverPhoto = useRef();
    // console.log(editMangaId)
  const dispatch = useDispatch()
  const isDisabled = categoria == null;
  const { renderModal } = modalActions
  

  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  async function handleSubmit(e) {
      e.preventDefault();
    if (isDisabled) {
      toast.error("Select a category");
      return;
    }

    const filteredCategory = categories.find((category) => (category.name == categoria))
    let manga = {
      title: title.current.value,
      category_id: filteredCategory._id,
      description: description.current.value,
      cover_photo: coverPhoto.current.value
    };

    console.log(manga)

    const url = 'http://localhost:8080/api/mangas/'+editMangaId


    try {
      await axios.put(url, manga, headers)
      toast.success("Manga edited successfully")
      e.target.reset()
      setTimeout(() => {
        handleClose()
      },1500)
    } catch (error) {
      if(error.response){
        if (typeof error.response.data.message === 'string') {
          toast.error(error.response.data.message)
        } else {
          error.response.data.message.forEach(err => toast.error(err))
        }
      }else{
        toast.error(error.message)
      }
    }
  }

  async function renderCategory() {
    await axios.get('http://localhost:8080/api/categories', headers).then(response =>  setcategories(response.data.categories) )
  }
  //  console.log(categories)

  function handleClose() {
    dispatch(renderModal({ state: false }))
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/mangas/' + editMangaId, headers).then(response => setMangaToEdit(response.data.response))
  }, [editMangaId])
  //  console.log(mangaToEdit)
  
  return (
    <div className='edit-modal'>
      <div className='edit-title'>
        <h2>Edit</h2>
        <img onClick={handleClose} src={closeIcon} />
      </div>
      <form className="manga-form" onSubmit={handleSubmit}>
        <input
          className="manga-input"
          type="text"
          placeholder="Insert title"
          defaultValue={mangaToEdit.title}
          ref={title}
        />
        <select
          className="manga-input"
          id="selectMove"
          ref={category}
          onClick={renderCategory}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value=""> Insert category</option>
          {categories.map((categoria) => (
            <option key={categoria.name} value={categoria.name}>
              {categoria.name}
            </option>
          ))}
        </select>
        <input
          className="manga-input"
          type="text"
          placeholder="Insert description"
          defaultValue={mangaToEdit.description}
          ref={description}
        />
        <input
          className="manga-input"
          type="text"
          placeholder="Insert cover photo"
          defaultValue={mangaToEdit.cover_photo}
          ref={coverPhoto}
        />
        <input className='send-Btn' type='submit' value='Send' />
        <Toaster />
      </form> 
    </div>
  )
}