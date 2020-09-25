import React,{useEffect} from 'react'
import '../css/Photo.scss'
import {Photo_List} from './PhotoImg';

function Photo() {

    useEffect(() => {
        document.querySelectorAll(".navi___link").forEach((v)=>v.classList.remove('active'))
        document.querySelector(".navi___link.photo_link").classList.add('active');
    }, [])

    return(
        <>
            <div className="photo_page">
                {
                    Photo_List.map((v) => {
                        return <a key={v.id} href={v.src} target="_blank" rel="noopener noreferrer">
                                <img className="photo_img" alt="pictures" width="100" src={v.src}/>
                            </a>
                    })
                }
            </div>
        </>
    )
}

export default Photo;