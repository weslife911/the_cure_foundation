import React from 'react'
import { Link } from "react-router-dom";
import { getAuthUser } from '../../features/users/userSlice';
import { useSelector } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactPage() {

  const authUser = useSelector(getAuthUser);

  const formik = useFormik({
    initialValues: {
      email: authUser?.email ? authUser?.email : "",
      message: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be in email format").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async(values) => {
      console.log(values);
    }
  });

  return (
<div id="contact" className="page wb-page">



<section id="section-10942796" className="
breadcrumb-section dark sec-padding-lg                 " style={{backgroundImage: "url('https://iili.io/32fLr4j.jpg')",backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "center center"}}><div className="container boxWidget">
<div className="col-lg-6 ">
<div className="richTextWidget title-heading ">
<h1>Get in Touch</h1></div>            

</div>


</div>


</section><section id="section-10942800" className="
widget-section widget-section-11-1 pt-0                 "><div className="container boxWidget">
<div className="row ">
<div className="col-sm-8 col-sm-push-2 container-shadow ">
<div className="item ">
<div className="default-form block-form half-col-input ">
<div className="richTextWidget block-title ">
<h6>Send us a Message</h6><p>Contact us today to learn more about our programs and how we can help prepare your child for the future.</p></div>            
<div className="richTextWidget  ">
<p style={{textAlign:"center", fontWeight: "700"}}><span style={{color:"black",margin: "0px 15px"}} className="fa">&#61463;</span><Link style={{color:"black",textDecoration: "none"}}>Regular Timings :  8:00 a.m to 5:00 p.m</Link></p></div>            
<div className="richTextWidget  ">
<p style={{textAlign:"center", fontWeight: "700"}}><span style={{color:"black",margin: "0px 15px"}} className="fa">&#61505;</span><Link href="#">St. Louis, Mile 3 Nkwen</Link></p></div>            
<div className="ContactFormWidget  ">


                                                        



<form onSubmit={formik.handleSubmit}>


<div className="alert alert-success" style={{display: "none"}} id="email_sent">
<Link to="#" className="close" data-dismiss="alert" aria-label="close">&times;</Link>
</div>
<div>
<label id="labelformessage" className="">Email Address:</label>
<input type='text' value={formik.values.email} onChange={formik.handleChange} name="email" placeholder="&#61504; Email Address"/>
<label id="labelformessage" className="">Message:</label>
<textarea rows="6" value={formik.values.message} onChange={formik.handleChange} name="message" placeholder="&#61504; Message"/>
<div></div>
<input type="submit" className="button theme-button" id="textforsubmitbtn" value="Submit"/>
</div>
</form>



</div>




</div>


</div>


</div>


</div>


</div>


</section></div>
  )
}

export default ContactPage
