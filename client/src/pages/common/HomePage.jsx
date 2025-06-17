import React from 'react'
import { useSelector } from 'react-redux';
import { getAuthUser, getUserStatus } from '../../features/users/userSlice';
import { Link } from "react-router-dom"
import { getImageStatus } from '../../features/images/imageSlice';
import { getQuestionStatus } from '../../features/questions/questionSlice';
import { getResultStatus } from '../../features/results/resultSlice';
import { getSubjectStatus } from '../../features/subjects/subjectSlice';
import Loader from '../../components/Loader/Loader';

function HomePage() {

  const authUser = useSelector(getAuthUser);


  const userStatus = useSelector(getUserStatus);
  // const countryStatus = useSelector(getCountryStatus);
  const imageStatus  = useSelector(getImageStatus);
  const questionStatus = useSelector(getQuestionStatus);
  const resultStatus = useSelector(getResultStatus);
  const subjectStatus = useSelector(getSubjectStatus);

  const loading = userStatus === "pending" || imageStatus === "pending" || questionStatus === "pending" || resultStatus === "pending" || subjectStatus === "pending";

  if(loading) {
    return (
      <Loader/>
    )
  }

  return (

    <>
      <div id="home" className="page wb-page">
        <section id="section-10942673" className="wb-heroHeader dark" style={{backgroundImage: "url('https://iili.io/32fQxa4.jpg')", backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "center center"}}><div className="wb-heroHeader-wrapper ">
                                                                            <div className="richTextWidget wb-heroHeader-content ">
                                            <h2 style={{marginBottom:"10px"}} className="main-heading">Welcome{authUser?.name ? `, ${authUser?.name}` : " to THE CURE"}</h2> <h6 style={{textTransform: "capitalize"}}>Preparing Students for Success</h6>
                                        </div>            
                                        
                                    </div>
                                                
                                        
                                    </section>
                                    <section id="section-10942676" className="
                                                    widget-section                 ">
                                                    <div className="container boxWidget">
                                                                        <div className="row custom-row ">
                                                                        <div className="col-lg-6 ">
                                                                        <div className="img-flex ">
                                                                                <div className="imageWidget  ">
                                                                                            <img className="lazyload img-top-left" src="https://iili.io/32fZ9Ve.jpg"/></div>
                                     
                                                
                                                                            <div className="imageWidget  ">
                                                                                            <img className="lazyload img-med" src="https://iili.io/32fZmdv.jpg"/></div>
                                     
                                                
                                     
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                                                    <div className="col-lg-6 ">
                                                                        <div className="item-box ">
                                                                        <div className="richTextWidget para-second para-normal ">
                                         <h4 className="heading-sub">ABOUT US</h4> <h1 style={{fontWeight: "700",textTransform: "capitalize"}}>Preparing Students for Success</h1><p>Our dedicated team is committed to helping students develop the critical thinking, problem-solving, and communication skills necessary for future success.</p></div>            
                                                                    <div className="richTextWidget  ">
                                         <ul style={{listStyle: "none"}}><li className="list-brands-item"><a className="list-brands-link col-lg-2 col-sm-4"><img className="list-brands-img" src="https://iili.io/32BBx24.jpg"/></a></li><li className="list-brands-item"><a className="list-brands-link col-lg-2 col-sm-4"><img className="list-brands-img" src="https://iili.io/32BBn4f.jpg"/></a></li><li className="list-brands-item"><a className="list-brands-link col-lg-2 col-sm-4"><img className="list-brands-img" src="https://iili.io/32BBCEG.jpg"/></a></li></ul></div>            
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </section>
                                    <section id="section-10942688" className="
                                                    home-3rd                 "><div className="container boxWidget">
                                                                        <div className="row custom-row ">
                                                                        <div className="col-lg-5 ">
                                                                        <div className="richTextWidget para-normal ">
                                         <h1>Endless possibilities</h1> <p>Our dedicated team is committed to helping students develop the critical thinking, problem-solving, and communication skills necessary for future success.</p><ul style={{padding:"20px", marginBottom: "30px"}}><li style={{listStyle:"none",fontWeight: "600"}}><i className="fa fa-location-arrow custom-icons"></i>Academic Tutoring</li><li style={{listStyle:"none",fontWeight: "600"}}><i className="fa fa-location-arrow custom-icons"></i>Career Guidance</li><li style={{listStyle:"none",fontWeight: "600"}}><i className="fa fa-location-arrow custom-icons"></i>Personal Development Workshops</li>
                                         
                                         {authUser && <li style={{ listStyle:"none",fontWeight: "600" }}>
                                          <div>
                                            <h3>
                                              Download your timetable to get started
                                          </h3>
                                          {authUser?.fieldOfStudy === "Engineering" ? <Link  className="btn btn-primary" to="https://mega.nz/file/N5RCzApB#Fyq4z_OzVbuxfin6znLlFPRuy3QxBE0P2puwgt_xxBQ">Download Timetable</Link> : <Link  className="btn btn-primary" to="https://mega.nz/file/ch4TwDSR#ioJnM7jlnWwQtZ_qMFsD8_Ff55zKA8BMmjUv_LMVjg8">Download Timetable</Link> }
                                          </div>
                                         </li>}
                                         
                                         </ul></div>            
                                        
                                    </div>
                                                
                                                                    <div className="col-lg-7 ">
                                                                        <div className="item-box ">
                                                                        <div className=" ">
                                                                        <div className=" ">
                                                                                <div className="imageWidget  ">
                                                                                            <img className="lazyload sec-img" src="https://iili.io/32fZYbI.jpg"/></div>
                                     
                                                
                                                                            <div className="imageWidget  ">
                                                                                            <a href="" target="">
                                                        <img className="lazyload sec-img2" src="https://iili.io/32fZHiu.png"/></a>
                                            
                                        </div>
                                     
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </section>
                                    <section id="section-10942699" className="
                                                    widget-section                 " style={{height: "auto"}}><div className="container boxWidget">
                                                                        <div className="row ">
                                                                        <div className="col-lg-12 ">
                                                                        <div className="richTextWidget head-content ">
                                          <h1>What Our Leaders Say</h1></div>            
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                                                    <div className="row ">
                                                                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                                        <div className="testimonial-card ">
                                                                        <div className="iconWidget icon-star ">
                                         <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>            
                                                                    <div className="richTextWidget testimonial-content ">
                                          <p>&ldquo;As founder of THE CURE, I’m proud of our transformative approach to student success. Our program combines personalized instruction, expert mentoring, and practical skills development, ensuring students excel academically and personally. We focus on building confidence, critical thinking, and a strong foundation for long-term achievement in all areas of life.&rdquo;</p></div>            
                                        
                                    </div>
                                                
                                                                    <div className="testimonial-bio ">
                                                                                <div className="imageWidget  ">
                                                                                            <img className="lazyload testimonial-bio-img" src="https://iili.io/32fZBDP.jpg"/></div>
                                     
                                                
                                                                    <div className="richTextWidget  ">
                                         <p className="testimonial-bio-level">Medical Doctor, Author, Public Speaker, Curer of the Disease of Ignorance, Leadership and Public Speaking Coach, Mental Health Advocate, MD, Founder and CEO of THE CURE</p><h4 className="testimonial-bio-name">Dr Nyohmbov Clinton</h4></div>            
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                                                    <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                                        <div className="testimonial-card ">
                                                                        <div className="iconWidget icon-star ">
                                         <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>            
                                                                    <div className="richTextWidget testimonial-content ">
                                          <p>&ldquo;As an associate of THE CURE, I’m proud of how our program empowers students to excel. With personalized lessons, expert guidance, and a focus on holistic growth, we prepare students not only for exams but for lifelong success. Our proven approach helps build confidence, critical thinking, and academic mastery.&rdquo;</p></div>            
                                        
                                    </div>
                                                
                                                                    <div className="testimonial-bio ">
                                                                                <div className="imageWidget  ">
                                                                                            <img className="lazyload testimonial-bio-img" src="https://iili.io/32fZKHQ.jpg"/></div>
                                     
                                                
                                                                    <div className="richTextWidget  ">
                                         <p className="testimonial-bio-level">Medical Doctor, Associate of THE CURE</p><h4 className="testimonial-bio-name">Dr Brain Tarawo Kwinji</h4></div>            
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                                                    <div className="col-lg-4 col-md-4 col-sm-12 ">
                                                                        <div className="testimonial-card ">
                                                                        <div className="iconWidget icon-star ">
                                         <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>            
                                                                    <div className="richTextWidget testimonial-content ">
                                          <p>&ldquo;THE CURE’s program is incredibly rich and effective. The curriculum is comprehensive, offering personalized attention and expert instruction that truly engages students. It’s not just about academics; it builds confidence, critical thinking, and essential life skills. This opportunity is invaluable—one you definitely don’t want to miss!&rdquo;</p></div>            
                                        
                                    </div>
                                                
                                                                    <div className="testimonial-bio ">
                                                                                <div className="imageWidget  ">
                                                                                            <img className="lazyload testimonial-bio-img" src="https://iili.io/32fZxig.jpg"/></div>
                                     
                                                
                                                                    <div className="richTextWidget  ">
                                         <p className="testimonial-bio-level">Medical Doctor, Founder and CEO of TALK PREGNANCY</p><h4 className="testimonial-bio-name">Dr. Gwanyama Noella</h4></div>            
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </div>
                                                
                                        
                                    </section></div>
    </>
  )
}

export default HomePage
