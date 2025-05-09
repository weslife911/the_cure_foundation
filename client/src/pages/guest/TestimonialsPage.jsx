import React from 'react'
import { useSelector } from "react-redux";
import { getStatus, getTestimonies } from '../../features/images/imageSlice';
import TestimonyBox from '../../components/TestimonyBox';
import { usePagination } from '../../hooks/usePagination';

function TestimonialsPage() {

     const testimonies = useSelector(getTestimonies);

     const status = useSelector(getStatus);

     const itemsPerPage = 3;
       const {
         currentItems,
         currentPage,
         totalPages,
         nextPage,
         prevPage,
         goToPage,
       } = usePagination(testimonies, itemsPerPage);

       if(status === "pending") return <div className="spinner-border" role="status">
       <span className="sr-only">Loading...</span>
     </div>

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
                                
                                     
                                        <div className='row'>
                                        {currentItems.map((testimony) => (
                                             <TestimonyBox key={testimony._id} testimony={testimony} />
                                        ))} 
                                        </div >        
                                     
                                
                                     
                                     <div style={{display: "flex", justifyContent: "center"}}>
                                     <div style={{display: "flex", justifyContent: "center"}}>
                  <nav aria-label="Page navigation">
                    <ul className="pagination">

                    <li className='page-item'>
                      <button className='page-link' onClick={prevPage} disabled={currentPage === 1}>
                        Previous
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => (
                    <li className='page-item' key={i + 1}>
                    <button
                      
                      onClick={() => goToPage(i + 1)}
                      className={currentPage === i + 1 ? 'active' : 'page-link'}
                    >
                      {i + 1}
                    </button>
                    </li>
                  ))}

                  <li className='page-item'>
                  <button className='page-link' onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                  </button>
                  </li>
                    </ul>
                  </nav>
                </div>
                                     </div> 
                                         
                                    </div></section></div>
  )
}

export default TestimonialsPage
