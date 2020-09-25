import React from 'react'
import '../css/Photo.scss'
import {Photo_List} from './PhotoImg';

function Photo() {
    return(
        <div className="photo_page">
            {
                Photo_List.map((v) => {
                    return <a key={v.id} href={v.src}>
                            <img className="photo_img" alt="pictures" src={v.src}/>
                        </a>
                })
            }
        </div>
    )
}

export default Photo;