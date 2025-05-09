import React from 'react'
import { useSelector } from "react-redux";
import { getImageById } from '../features/images/imageSlice';

function TestimonyBox({ testimony }) {

    const image = useSelector((state) => 
        testimony && testimony.image 
          ? getImageById(state, testimony.image) 
          : null
      );

  return (                      
        <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="testimonial-card ">
                <div className="iconWidget icon-star ">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>            
                <div className="richTextWidget testimonial-content ">
                    <p>
                        &ldquo;
                        {testimony.testimony}
                        &rdquo;
                    </p>
                </div>            
                                         
            </div>
                                                 
            <div className="testimonial-bio ">
                <div className="imageWidget  ">
                    <img className="lazyload testimonial-bio-img" src={image.image} />
                </div>
    
                <div className="richTextWidget  ">
                    <p className="testimonial-bio-level">
                    {testimony.occupation}
                    </p>
                    <h4 className="testimonial-bio-name">
                    {testimony.userName}
                    </h4>
                </div>            
        
            </div>
                                                 
                                         
        </div>  
                                             
                
  )
}

export default TestimonyBox
