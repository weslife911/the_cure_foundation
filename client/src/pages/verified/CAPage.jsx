import React from 'react'
import { Link } from "react-router-dom";

function CAPage() {
  return (
    <div id="ca" className="page wb-page">
                                    <style id="sectionStyle-10946059">
    
</style><section id="section-10946059" className="
            widget-section sec-padding-xl  project-section ui-droppable    theme-dark-color-11                 "><div className="container boxWidget">
                                <div className="row centered-row ">
                                <div className="col-lg-8 col-md-8 col-sm-10 centered-col ">
                                <div className="richTextWidget  ">
<h1 style={{color: "white"}}>CAs</h1><p style={{color: "white"}}>Download your CAs here for revision.</p></div>            

</div>
        

</div>
        

</div>
        

</section>

    <section id="section-10946064" className="widget-section sec-padding-xl ui-droppable theme-light-color-1">


            
        <div className="container" style={{textAlign: "center",background: "white",padding: "40px",borderRadius: "12px",boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",maxWidth: "500px",width: "100%"}}>
            <h2 style={{color: "#333",fontSize: "24px",marginBottom: "20px"}}>
                Download Files
            </h2>
            <ul className="file-list" style={{listStyle: "none",padding: 0}}>
                    
                
                <li style={{background: "#ffffff",padding: "15px 20px",margin: "10px 0",borderRadius: "8px",display: "flex",justifyContent: "space-between",alignItems: "center",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",transition: "all 0.3s ease-in-out"}}>
                    <span className="file-name" style={{fontSize: "16px",fontWeight: "500",color: "#555"}}>
                      {/* file name */}
                    </span>
                    <Link to className="download-btn" download style={{padding: "10px 18px",fontSize: "14px",color: "white",backgroundColor: "#007bff",textDecoration: "none",borderRadius: "6px",transition: "background 0.3s"}}>Download</Link>
                </li>


                
                    <span className="file-name">
                        <Link to="" style={{color: "blue", textDecoration:"underline"}}>
                          {/* message */}
                        </Link>
                    </span>
                
            </ul>
        </div>
            

    </section>

</div>
  )
}

export default CAPage
