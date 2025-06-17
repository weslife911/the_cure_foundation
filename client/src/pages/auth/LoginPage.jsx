import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getUserStatus, isLoggedIn, loginUser } from '../../features/users/userSlice';
import { Eye, EyeOff } from "lucide-react"
import Loader from '../../components/Loader/Loader';

function LoginPage() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(isLoggedIn);
  const navigate = useNavigate("/");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const userStatus = useSelector(getUserStatus);

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

  const isLoading = userStatus === "pending";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="login" className="page wb-page">
      <style id="sectionStyle-10945347"></style>
      <section 
        id="section-10945347" 
        className="widget-section dynamic-form-widget sec-padding-xl theme-dark-color-11" 
        style={{
          background:"#1b1e25 'url(https://iili.io/32fLp6J.jpg') no-repeat center center",
          position: "relative", 
          overflow: "hidden", 
          backgroundSize: "cover",
          marginTop:"0px"
        }}
      >
        <div className="container boxWidget">
          <div className="row centered-row">
            <div className="richTextWidget block-title">
              <h4 style={{color: "#fff"}}>Login Form</h4>
              <p style={{color: "#fff"}}>Login to access your student account.</p>
            </div>            
            <div className="col-lg-8 centered-col">
              <div className="DynamicFormWidget">
                <div className="form-box">
                  <form className="form-area" onSubmit={formik.handleSubmit}>
                    <div id="controlsDiv">
                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <label id="label-field-9">Email Address</label>
                        <input 
                          name="email" 
                          value={formik.values.email} 
                          onChange={formik.handleChange} 
                          id="field-1" 
                          placeholder="Enter Email Address" 
                          type="email"
                        />
                        <strong style={{color: "red"}}>
                          {formik.errors.email}
                        </strong>
                      </div>
                      
                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <label id="label-field-9">Password</label>
                        <div style={{ position: 'relative' }}>
                          <input 
                            name="password" 
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            id="field-2" 
                            placeholder="Enter Password" 
                            type={showPassword ? "text" : "password"}
                            style={{ paddingRight: '40px' }} // Add padding for the icon
                          />
                          <span 
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer',
                              color: '#666'
                            }}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </span>
                        </div>
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
                        Don't have an account? <Link to="/signup" style={{color: "blue", textDecoration: "underline"}}>SignUp</Link>
                      </p>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 text-left">
                      <input id="textforsubmitbtn" type="submit" className="theme-button" value="LOGIN"/>
                    </div>
                  </form>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage;