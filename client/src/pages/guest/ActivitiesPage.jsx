import React from 'react'
import { useSelector } from 'react-redux'
import { getImages } from '../../features/images/imageSlice'
import ActivityBox from '../../components/ActivityBox';
import { usePagination } from "../../hooks/usePagination";

function ActivitiesPage() {

  const images = useSelector(getImages).filter(image => image.field === "activity");

  const itemsPerPage = 6;
  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(images, itemsPerPage);

  return (
    <div id="activities" className="page wb-page">
                                        <style id="sectionStyle-13314460">
        {/* #section-13314460:before {
         background-color:#1b1e25;opacity:0.3;content:""; position:absolute; top:0%; display:block; left:0%; right:0%; bottom:0%; width:100%; height:100%;
        } */}
    </style>
    <section id="section-10942673" className="
    wb-heroHeader dark                 " style={{backgroundImage: "url('https://iili.io/32fQT92.jpg')",backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "center center"}}><div className="wb-heroHeader-wrapper ">
                        <div className="richTextWidget wb-heroHeader-content ">
<h2 style={{marginBottom:"10px"}} className="main-heading">ACTIVITIES</h2> <h6 style={{textTransform: "capitalize"}}>Here, view the activities of <strong style={{color: "#fff"}}>THE CURE FOUNDATION</strong> through a collection of images showcasing their initiatives, events, and programs designed to support Advanced Level students in achieving academic excellence and preparing for concourse exams.</h6>
</div>            

</div>


</section>

<section id="section-13314464" className="
                widget-section sec-padding-xl                 "><div className="container boxWidget">
                                    <div className="row  ">
                                    <div className="grid wow fadeInLeft">



            <ul className="imageListsWidget imgs-gallery borderGallery ">
                    
                {currentItems.map((image) => (
                  <ActivityBox key={image._id} image={image} />
                ))}
                

                    </ul>
                </div>

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
            
    
</div>



            
    
</section></div>
  )
}

export default ActivitiesPage
