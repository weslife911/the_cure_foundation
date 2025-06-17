import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff } from 'lucide-react';
import { hasSignedUp, signupUser, getUserStatus } from '../../features/users/userSlice';
import Loader from '../../components/Loader/Loader';

function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Redux state selectors
  const accountCreated = useSelector(hasSignedUp);
  const userStatus = useSelector(getUserStatus);
  
  // Loading states
  const isLoading = userStatus === 'pending';

  const token = localStorage.getItem("token");

  console.log(token);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      fieldOfStudy: "",
      countryCode: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Must be in email format").required("Email is required"),
      fieldOfStudy: Yup.string().required("Field of Study is required"),
      countryCode: Yup.string().required("Country code is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Password confirmation is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await dispatch(signupUser({
          name: values.name,
          email: values.email,
          fieldOfStudy: values.fieldOfStudy,
          countryCode: values.countryCode,
          phoneNumber: values.phoneNumber,
          password: values.password
        })).unwrap();
        
        navigate("/");
      } catch (error) {
        console.error("Signup failed:", error);
      } finally {
        setSubmitting(false);
      }
    }
  });

  // Handle successful signup
  useEffect(() => {
    if (accountCreated) {
      navigate("/");
    }
  }, [accountCreated, navigate]);

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
          background:"#1b1e25 url('https://iili.io/32fQHaR.jpg') no-repeat center center",
          position: "relative", 
          overflow: "hidden", 
          backgroundSize: "cover",
          marginTop:"0px"
        }}
      >
        <div className="container boxWidget">
          <div className="row centered-row">
            <div className="richTextWidget block-title">
              <h4 style={{color: "#fff"}}>SignUp Form</h4>
              <p style={{color: "#fff"}}>Signup to create your student account.</p>
            </div>            
            <div className="col-lg-8 centered-col">
              <div className="DynamicFormWidget">
                <div className="form-box">
                  <form className="form-area" onSubmit={formik.handleSubmit}>
                    <div id="controlsDiv">
                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <label id="label-field-9">Full Name</label>
                        <input 
                          name="name" 
                          value={formik.values.name} 
                          onChange={formik.handleChange} 
                          id="field-1" 
                          placeholder="Enter Full Name" 
                          type="text"
                        />
                        <strong style={{color: "red"}}>
                          {formik.errors.name}
                        </strong>
                      </div>
                      
                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <label id="label-field-9">Email Address</label>
                        <input 
                          name="email" 
                          value={formik.values.email} 
                          onChange={formik.handleChange} 
                          id="field-2" 
                          placeholder="Enter Email Address" 
                          type="email"
                        />
                        <strong style={{color: "red"}}>
                          {formik.errors.email}
                        </strong>
                      </div>

                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <select 
                          name="fieldOfStudy" 
                          value={formik.values.fieldOfStudy} 
                          onChange={formik.handleChange}
                        >
                          <option value="">Select Field</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Medicine">Medicine</option>
                        </select>
                        <strong style={{color: "red"}}>
                          {formik.errors.fieldOfStudy}
                        </strong>
                      </div>

                      <div className="form-group col-lg-12 col-md-12" id="div-field-9" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                          <label id="label-field-9">Enter Country Code</label>
                          <input 
                            list="country-codes" 
                            value={formik.values.countryCode} 
                            onChange={formik.handleChange} 
                            name="countryCode" 
                            id="field-3" 
                            placeholder="e.g +237" 
                            type="text"
                          />
                          <strong style={{color: "red"}}>
                            {formik.errors.countryCode}
                          </strong>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                          <label id="label-field-9">Enter Phone Number</label>
                          <input 
                            name="phoneNumber" 
                            id="field-4" 
                            value={formik.values.phoneNumber} 
                            onChange={formik.handleChange}  
                            placeholder="e.g. 675667394" 
                            type="text"
                          />
                          <strong style={{color: "red"}}>
                            {formik.errors.phoneNumber}
                          </strong>
                        </div>
                      </div>
                      
                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <label id="label-field-9">Password</label>
                        <div style={{ position: 'relative' }}>
                          <input 
                            name="password" 
                            id="field-5" 
                            value={formik.values.password} 
                            onChange={formik.handleChange}  
                            placeholder="Enter Password" 
                            type={showPassword ? "text" : "password"}
                            style={{ paddingRight: '35px' }}
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
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </span>
                        </div>
                        <strong style={{color: "red"}}>
                          {formik.errors.password}
                        </strong>
                      </div>

                      <div className="form-group col-lg-12 col-md-12" id="div-field-9">
                        <label id="label-field-9">Confirm Password</label>
                        <div style={{ position: 'relative' }}>
                          <input 
                            name="passwordConfirmation" 
                            value={formik.values.passwordConfirmation} 
                            onChange={formik.handleChange} 
                            id="field-6" 
                            placeholder="Confirm Password" 
                            type={showConfirmPassword ? "text" : "password"}
                            style={{ paddingRight: '35px' }}
                          />
                          <span 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer',
                              color: '#666'
                            }}
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </span>
                        </div>
                        <strong style={{color: "red"}}>
                          {formik.errors.passwordConfirmation}
                        </strong>
                      </div> 
                    </div>
                    <div>
                      <p>
                        Already have an account? <Link to="/login" style={{color: "blue", textDecoration: "underline"}}>Login</Link>
                      </p>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 text-left">
                      <input id="textforsubmitbtn" type="submit" className="theme-button" value="SIGNUP"/>
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

export default SignupPage;