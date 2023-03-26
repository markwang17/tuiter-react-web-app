import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateProfile } from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    let [firstName, setFirstName] = useState(profile.firstName);
    let [lastName, setLastName] = useState(profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [website, setWebsite] = useState(profile.website);
    let [location, setLocation] = useState(profile.location);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveHandler = () => {
        const updatedProfile = {
            ...profile,
            firstName,
            lastName,
            bio,
            website,
            location,
            dateOfBirth
        }
        dispatch(updateProfile(updatedProfile));
        navigate('/tuiter/profile', { replace: true });
    }

    return (
        <div className="border">
            <form>
                <div className="d-flex align-items-center my-2">
                    <i className="bi bi-x ms-2"></i>
                    <div className="ms-4">
                        <div className="fs-5 fw-bold">Edit Profile</div>
                    </div>
                    <button type="button" className="btn btn-dark ms-auto me-2 rounded-pill px-3"
                            onClick={ saveHandler }>
                        Save
                    </button>
                </div>

                <div className="position-relative bg-black">
                    <img src={ `/images/${ profile.bannerPicture }` } alt="" width="100%" height="250px"
                         className="opacity-75"/>
                    <div className="position-absolute overlay top-50 start-50 translate-middle">
                        <button type="button" className="btn btn-dark rounded-circle opacity-50">
                            <i className="bi bi-camera"></i>
                        </button>
                        <button type="button" className="btn btn-dark rounded-circle opacity-50 ms-2 ">
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                </div>

                <div style={{marginBottom:"80px"}}>
                    <div className="position-absolute rounded-circle bg-black">
                        <img src={ `/images/${ profile.profilePicture }` } alt="" width="120px" height="120px"
                             className="position-absolute rounded-circle opacity-75" style={{top: "-60px", left: "20px", background: "rgba(127,127,127,1)"}}/>
                        <div className="position-absolute overlay translate-middle" style={{left: "80px"}}>
                            <button type="button" className="btn btn-dark rounded-circle opacity-50">
                                <i className="bi bi-camera"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mx-3">
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="floatingInput" value={ firstName }
                               onChange={ event => setFirstName(event.target.value) }/>
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="floatingInput" value={ lastName }
                               onChange={ event => setLastName(event.target.value) }/>
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating mb-4">
                        <textarea className="form-control" id="floatingInput" value={ bio } style={{height:"100px"}}
                                  onChange={ event => setBio(event.target.value) }></textarea>
                        <label htmlFor="floatingInput">Bio</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="floatingInput" value={ location }
                               onChange={ event => setLocation(event.target.value) }/>
                        <label htmlFor="floatingInput">Location</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="floatingInput" value={ website }
                               onChange={ event => setWebsite(event.target.value) }/>
                        <label htmlFor="floatingInput">Website</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="date" className="form-control" id="floatingInput" value={ dateOfBirth }
                               onChange={ event => setDateOfBirth(event.target.value) }/>
                        <label htmlFor="floatingInput">Birth date</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfileComponent;