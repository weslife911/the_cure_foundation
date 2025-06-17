import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAuthUser, getUserStatus } from '../../features/users/userSlice';
import { getAllQuestions, getQuestionStatus } from '../../features/questions/questionSlice';
import QuestionBox from '../../components/QuestionBox';
import Loader from "../../components/Loader/Loader"

export default function GCEPage() {

  const authUser = useSelector(getAuthUser);
  
    const questions = useSelector(getAllQuestions).filter(question => question.fileGenre === "gce" &&  question.field === authUser.fieldOfStudy);

     const { visibleQuestions, accessMessage } = useMemo(() => {
        if (!questions || !authUser) return { visibleQuestions: [], accessMessage: "" };
      
        const amount = authUser.amount || 0;
        let limit = questions.length;
        let message = "";
      
        if (amount === 0) {
          limit = 2;
          message = "Pay tuition fees to have access to all files";
        } else if (amount <= 10000) {
          limit = 2;
        } else if (amount <= 20000) {
          limit = 3;
        } else if (amount <= 30000) {
          limit = 4;
        }
      
        return {
          visibleQuestions: questions.slice(0, limit),
          accessMessage: message || "Complete tuition fees to get access to all files"
        };
      }, [questions, authUser]);

      const userStatus = useSelector(getUserStatus);
    const questionStatus = useSelector(getQuestionStatus);

  const isLoading = userStatus === "pending" || questionStatus === "pending";

  if(!questions || isLoading) return (
    <Loader/>
  );

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
                    
                
            {visibleQuestions.map((question) => (
                  <QuestionBox key={question._id} question={question} />
                ))}

                
            </ul>
        </div>
            

    </section>

</div>
  )
}
