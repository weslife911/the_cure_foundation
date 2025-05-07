import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getUserStatus, isLoggedIn, loginUser } from '../../features/users/userSlice';
import Loader from "../../components/Loader";

function LoginPage() {

  const dispatch = useDispatch();

  const isUserLoggedIn = useSelector(isLoggedIn);
  const userStatus = useSelector(getUserStatus);
  const navigate = useNavigate("/");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be in email format").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async(values) => {
      dispatch(loginUser(values));
      if(isUserLoggedIn) {
        navigate("/")
      }
    }
  });

  if(userStatus === "pending") return <>
    <Loader/>
  </>

  return (
    <div id="login" className="page wb-page">
                                        <style id="sectionStyle-10945347">
        {/* #section-10945347:before {
         background-color:#1b1e25;opacity:0.4;content:""; position:absolute; top:0%; display:block; left:0%; right:0%; bottom:0%; width:100%; height:100%;
        } */}
    </style>
    <section id="section-10945347" className="
                widget-section dynamic-form-widget sec-padding-xl  theme-dark-color-11                 " style={{background:"#1b1e25 'url(https://iili.io/32fLp6J.jpg')  no-repeat center center",position: "relative", overflow: "hidden", backgroundSize: "cover",marginTop:"0px"}}><div className="container boxWidget">
                                    <div className="row centered-row ">
                                    <div className="richTextWidget block-title ">
     <h4 style={{color: "#fff"}}>Login Form</h4><p style={{color: "#fff"}}>Login to access your student account.</p></div>            
                                <div className="col-lg-8 centered-col ">
                                    <div className="DynamicFormWidget  ">

                


                
    <div className="form-box">
        <form className="form-area" onSubmit={formik.handleSubmit}>
                        <div id="controlsDiv">
                                      
                          <div className="form-group col-lg-12 col-md-12 " id="div-field-9">
                            <label id="label-field-9">  Email Address </label>
                        <input name="email" value={formik.values.email} onChange={formik.handleChange} id="field-1" placeholder="Enter Email Address" type="email"/>

                        <strong style={{color: "red"}}>
                          {formik.errors.email}
                        </strong>
                      </div>
                            
                
                
                        <div className="form-group col-lg-12 col-md-12 " id="div-field-9">
                          <label id="label-field-9">  Password </label>
                      <input name="password" value={formik.values.password} onChange={formik.handleChange} id="field-2" placeholder="Enter Password" type="password"/>
                      <strong style={{color: "red"}}>
                      {formik.errors.password}
                      </strong>
                    </div>  
                    
                    </div>
                    <div>
                      <p>
                        <Link to="/confirm-email" style={{color: "blue", textDecoration: "underline"}}>
                          Forgot Password?
                        </Link>
                      </p>
                      <p>
                        Don't have an account? <Link to="/signup"  style={{color: "blue", textDecoration: "underline"}}>SignUp</Link>
                      </p>
                    </div>
            <div className="form-group col-lg-12 col-md-12 text-left">
            <input id="textforsubmitbtn" type="submit" className="theme-button" value="LOGIN"/>
            </div>
        </form>
    </div></div>            
    
</div>
            
    
</div>
            
</div></section></div>
  )
}

export default LoginPage
