import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAuthUser } from '../../features/users/userSlice';
import { getAllQuestions } from '../../features/questions/questionSlice';

export default function GCEPage() {

  const authUser = useSelector(getAuthUser);
  
    const questions = useSelector(getAllQuestions).filter(question => question.fileGenre === "gce" &&  question.field === authUser.fieldOfStudy);

  return (
    <div id="ca" className="page wb-page">
                                    <style id="sectionStyle-10946059">
    
</style><section id="section-10946059" className="
            widget-section sec-padding-xl  project-section ui-droppable    theme-dark-color-11                 "><div className="container boxWidget">
                                <div className="row centered-row ">
                                <div className="col-lg-8 col-md-8 col-sm-10 centered-col ">
                                <div className="richTextWidget  ">
<h1 style={{color: "white"}}>GCE QUESTIONS</h1><p style={{color: "white"}}>Download your revision gce questions.</p></div>            

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
                    
                
            {questions.map((question) => (
                  <QuestionBox key={question._id} question={question} />
                ))}


                
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
