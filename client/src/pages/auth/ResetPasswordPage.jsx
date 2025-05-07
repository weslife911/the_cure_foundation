import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

function ResetPasswordPage() {


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Email is required").email("Must be in email format"),
      password: Yup.string().required("Password is required"),
      passwordConfirmation: Yup.string().required("Enter the same password as above to confirm password")
    }),
    onSubmit: async(values) => {
      if(values.password === values.passwordConfirmation) {
        console.log(values);
      }
    }
  });

  return (
    <div id="login" className="page wb-page">
                                            <style id="sectionStyle-10945347">
            
        </style><section id="section-10945347" className="
                    widget-section dynamic-form-widget sec-padding-xl  theme-dark-color-11                 " style={{background:"#1b1e25 url('https://iili.io/32fQHaR.jpg')  no-repeat center center",position: "relative", overflow: "hidden", backgroundSize: "cover",marginTop:"0px"}}><div className="container boxWidget">
                                        <div className="row centered-row ">
                                        <div className="richTextWidget block-title ">
         <h4 style={{color: "#fff"}}>Reset Password</h4><p style={{color: "#fff"}}>Enter email address to reset password.</p></div>            
                                    <div className="col-lg-8 centered-col ">
                                        <div className="DynamicFormWidget  ">
    
                    
    
    
                    
        <div className="form-box">
            <form className="form-area" onSubmit={formik.handleSubmit}>
                            <div id="controlsDiv">
                                          

                          <div className="form-group col-lg-12 col-md-12 " id="div-field-9">
                            <label id="label-field-8">  Password </label>
                        <input name="password" value={formik.values.password} onChange={formik.handleChange} id="field-1" placeholder="Enter New Password" type="password"/>
                        <strong>
                          {/* error */}
                        </strong>
                      </div>

                      <div className="form-group col-lg-12 col-md-12 " id="div-field-9">
                        <label id="label-field-9">  Confirm Password </label>
                    <input name="passwordConfirmation" value={formik.values.passwordConfirmation} onChange={formik.handleChange} id="field-1" placeholder="Confirm Password" type="password"/>
                    <strong>
                      {/* error */}
                    </strong>
                  </div>
                                
                    
                        
                        </div>
                <div className="form-group col-lg-12 col-md-12 text-left">
                <input id="textforsubmitbtn" type="submit" className="theme-button" value="RESET"/>
                </div>
            </form>
        </div></div>            
        
    </div>
                
        
    </div>
                
        
    </div>
                
        
    </section></div>
  )
}

export default ResetPasswordPage
