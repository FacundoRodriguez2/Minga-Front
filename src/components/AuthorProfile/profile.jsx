import './profile.css'
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useRef } from "react"
import authorActions from "../../store/authors/actions"
import iconGps from "../../images/iconGps.png"
import iconDate from "../../images/iconDate.png"

const { get_me, edit_author } = authorActions

function AuthorProfile() {
    const store = useSelector((store) => store.author)
    const author = store.author
    const dispatch = useDispatch()
    const authorName = useRef(null);
    const authorLastName = useRef(null);
    const authorCity = useRef(null);
    const authorCountry = useRef(null);
    const authorDate = useRef(null);
    const authorPhoto = useRef(null);
    const userStore = useSelector((store) => store.user)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const authorData = {
        name: authorName.current.value,
        lastName: authorLastName.current.value,
        city: authorCity.current.value,
        country: authorCountry.current.value,
        date: authorDate.current.value,
        photo: authorPhoto.current.value,
        user_id: userStore.user?.response?.user.id,
        active: false,
      };
      await dispatch(edit_author(authorData));
    };



    useEffect(() => {
        if (!store.loading && author.length === 0) {
            dispatch(get_me())
        }
    }, [author, dispatch, store.loading])
      
        return(
            <>
            <div className='containerGeneral'>
                <div className='containerSuperior'>
                    <h1>Profile</h1>
                </div>
                <div className='containerInferior'>

                    <div className='sectionLeft' >
                    <div className="signup-form-container">
                        <div className='profilePhoto'>
                        <img className='photoProfile' src={author.photo} alt="foto" />
                        </div>
                            <form className='form' onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-signup-row">
                                <input
                                    ref={authorName}
                                    autoComplete="false"
                                    type="text"
                                    className="form-control"
                                    placeholder='Name'
                                    id="name"
                                />
                                </div>
                                <div className="form-signup-row">
                                <input
                                    ref={authorLastName}
                                    autoComplete="false"
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder='Last Name'
                                />
                                </div>
                                <div className="form-signup-row">
                                <input
                                    ref={authorCountry}
                                    autoComplete="false"
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    placeholder='City, Country'
                                />
                                </div>
                                <div className="form-signup-row">
                                    <input
                                    ref={authorDate}
                                    autoComplete="false"
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    placeholder='Date'
                                    />
                                </div>
                                <div className="form-signup-row">
                                    <input
                                    ref={authorPhoto}
                                    autoComplete="false"
                                    type="text"
                                    className="form-control"
                                    id="photo"
                                    placeholder='URL Profile image'
                                    />
                                </div>
                                </div>
                            <div>
                                <input className="save" type="submit" value="Save" />
                                <input className="delete" type="submit" value="Delete Account" />
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className='sectionRigth'>
                        <div className='infoAuthor'>
                            <img className='photoProfile' src={author.photo} alt="foto" />
                                <div className='datosAthor'>
                                    <p>{author.name} {author.last_name}</p>
                                    <div className='localidad'>
                                        <img className="iconLocalidad" src={iconGps}alt="icono localidad"/>
                                        <p className='grey'>{author.city}, {author.country}</p>
                                    </div>
                                    <div>
                                        <p className='grey'>{author.date && (
                                            <>
                                                <img
                                                    className="iconCumple"
                                                    src={iconDate}
                                                    alt="icono cumpleaños"
                                                />
                                                {author.date.slice(0, 10)}
                                            </>
                                        )}</p>
                                    </div>


                                    
                                </div>

                        </div>

                    </div>

                </div>

            </div>








        </>
    )
}

export default AuthorProfile
