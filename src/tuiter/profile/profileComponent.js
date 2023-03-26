import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ProfileComponent = (
    // {
    //     profile = {
    //         firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
    //         profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
    //         bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. ' +
    //             'Retuits and likes are not endorsements.',
    //         website: 'youtube.com/webdevtv',
    //         location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
    //         followingCount: 340,	followersCount: 223
    //     }
    // }
) => {
    const profile = useSelector(state => state.profile);
    const navigate = useNavigate();

    return (
        <div className="border">
            <div className="d-flex align-items-center ms-2 me-2">
                <i className="bi bi-arrow-left ms-2"></i>
                <div className="flex-column ms-4">
                    <div className="fs-5 fw-bold">{ profile.firstName } { profile.lastName }</div>
                    <div className="text-secondary">6,114 tweets</div>
                </div>
            </div>

            <img src={ `/images/${ profile.bannerPicture }` } alt="" width="100%" height="250px"/>
            <div className="position-relative">
                <img src={ `/images/${ profile.profilePicture }` } alt="" width="120px" height="120px"
                     className="rounded-circle position-absolute" style={{top: "-60px", left: "20px", background: "rgba(255,255,255,1)"}}/>
            </div>

            <div className="d-flex justify-content-end mt-2">
                <button type="button"
                        className="btn border border-secondary-subtle rounded-pill me-2"
                        onClick={() => navigate('/tuiter/edit-profile', { replace: true })}>
                    <span className="fw-bold">Edit&nbsp;Profile</span>
                </button>
            </div>
            <div className="d-flex flex-column ms-3 mt-4 mb-3">
                <div>
                    <div className="fw-bold">{ profile.firstName } { profile.lastName }</div>
                    <div className="text-secondary">{ profile.handle }</div>
                </div>
                <div className="mt-2">
                    { profile.bio }
                </div>
                <div className="mt-2 text-secondary d-flex align-items-center">
                    <div className="me-4">
                        <i className="bi bi-geo-alt"></i>
                        <span className="ms-1">{ profile.location }</span>
                    </div>
                    <div className="me-4">
                        <i className="bi bi-balloon"></i>
                        <span className="ms-1">Born&nbsp;{ profile.dateOfBirth }</span>
                    </div>
                    <div className="me-4">
                        <i className="bi bi-calendar3"></i>
                        <span className="ms-2">Joined&nbsp;{ profile.dateJoined }</span>
                    </div>
                </div>
                <div className="d-flex mt-2 text-secondary align-items-center">
                    <div className="me-4">
                        <span className="fw-bold text-black">{ profile.followingCount }</span>&nbsp;Following
                    </div>
                    <div className="me-4">
                        <span className="fw-bold text-black">{ profile.followersCount }</span>&nbsp;Followers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;