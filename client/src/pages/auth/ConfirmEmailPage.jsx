import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

function ConfirmEmailPage() {

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be in email format").required("Email is required")
    }),
    onSubmit: async(values) => {
      console.log(values);
    }
  });

  return (
    <div id="login" className="page wb-page">
           <section id="section-10945347" className="
                    widget-section dynamic-form-widget sec-padding-xl  theme-dark-color-11                 " style={{background:"#1b1e25 url('https://iili.io/32fQ3uI.jpg')  no-repeat center center",position: "relative", overflow: "hidden", backgroundSize: "cover",marginTop:"0px"}}><div className="container boxWidget">
                                        <div className="row centered-row ">
                                        <div className="richTextWidget block-title ">
         <h4 style={{color: "#fff"}}>Reset Password</h4><p style={{color: "#fff"}}>Enter email address to reset password.</p></div>            
                                    <div className="col-lg-8 centered-col ">
                                        <div className="DynamicFormWidget  ">
    
                    
    
    
                    
        <div className="form-box">
            <form className="form-area" onSubmit={formik.handleSubmit}>
                            <div id="controlsDiv">

                                          
                              <div className="form-group col-lg-12 col-md-12 " id="div-field-9">

                                <label id="label-field-9">  Email Address </label>
                            <input name="email" value={formik.values.email} onChange={formik.handleChange} id="field-1" placeholder="Enter Email Address" type="email"/>
                            <strong>
                              {/* error */}
                            </strong>
                          </div>
                                
                    
                        
                        </div>
                <div className="form-group col-lg-12 col-md-12 text-left">
                <input id="textforsubmitbtn" type="submit" className="theme-button" value="SUBMIT"/>
                </div>
            </form>
        </div></div>            
        
    </div>
                
        
    </div>
                
        
    </div>
                
        
    </section></div>
  )
}

export default ConfirmEmailPage
