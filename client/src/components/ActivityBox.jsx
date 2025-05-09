import React from 'react'

function ActivityBox({ image }) {


  return (
    <li className="js_image_gallary">
        <figure className="effect-milo"><img id="image1" className="lazyload" src={image.image}  width="374" height="234"/>
            <figcaption className="">
                
            </figcaption>
        </figure>
    </li>
  )
}

export default ActivityBox
