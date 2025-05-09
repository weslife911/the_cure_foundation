import React from 'react'
import { useSelector } from "react-redux";
import { getTestimonies } from '../../features/images/imageSlice';
import TestimonyBox from '../../components/TestimonyBox';

function TestimonialsPage() {

     const testimonies = useSelector(getTestimonies);

  return (
    <div id="home" className="page wb-page">
                                         
     
     
                                         <section id="section-10942673" className="
                                                         wb-heroHeader dark                 " style={{backgroundImage: "url('https://iili.io/32fQ93v.jpg')",backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "center center"}}><div className="wb-heroHeader-wrapper ">
                                                                             <div className="richTextWidget wb-heroHeader-content ">
                                             <h2 style={{marginBottom:"10px"}} className="main-heading">TESTIMONIALS</h2> <h6 style={{textTransform: "capitalize"}}>Get Inspiring experiences from students who passed through <strong>THE CURE</strong></h6>
                                         </div>            
                                         
                                     </div>
                                                 
                                         
                                     </section>
                                
                                     <section id="section-10942699" className="widget-section" style={{height: "auto"}}><div className="container boxWidget">
                                                                         <div className="row ">
                                                                         <div className="col-lg-12 ">
                                                                         <div className="richTextWidget head-content ">
                                           <h1>What Our Students have to say</h1></div>            
                                         
                                     </div>
                                                 
                                         
                                     </div>
                                
                                     
                                        {testimonies.map((testimony) => (
                                             <TestimonyBox key={testimony._id} testimony={testimony} />
                                        ))}         
                                     
                                
                                     
                                     <div style={{display: "flex", justifyContent: "center"}}>
                                          {/* Pagination        */}
                                     </div> 
                                         
                                    </div></section></div>
  )
}

export default TestimonialsPage
