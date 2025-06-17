import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser, getUserStatus, updateProfile } from '../../features/users/userSlice';
import Loader from "../../components/Loader/Loader"

function ProfilePage() {

  const authUser = useSelector(getAuthUser);
  const dispatch = useDispatch();

  const formik = useFormik({
      initialValues: {
        name: authUser?.name,
        fieldOfStudy: authUser?.fieldOfStudy,
        countryCode: authUser?.countryCode,
        phoneNumber: authUser?.phoneNumber,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Full Name is required"),
        fieldOfStudy: Yup.string().required("Field of Study is required"),
        countryCode: Yup.string().required("Country code is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
      }),
      onSubmit: async(values) => {
        dispatch(updateProfile({
          userId: authUser?._id,
          name: values.name,
          fieldOfStudy: values.fieldOfStudy,
          countryCode: values.countryCode,
          phoneNumber: values.phoneNumber
        }));
      }
    });


    const userStatus = useSelector(getUserStatus);

  const isLoading = userStatus === "pending";

  if(isLoading) return (
    <Loader/>
  );
  

  return (
    <div id="login" className="page wb-page">
                                            <style id="sectionStyle-10945347">
           
            
        </style><section id="section-10945347" className="
                    widget-section dynamic-form-widget sec-padding-xl  theme-dark-color-11                 " style={{background:"#1b1e25 url('https://iili.io/32fQoFf.jpg')  no-repeat center center",position: "relative", overflow: "hidden", backgroundSize: "cover",marginTop:"0px"}}><div className="container boxWidget">
                                        <div className="row centered-row ">
                                        <div className="richTextWidget block-title ">
         <h4 style={{color: "#fff"}}>Update your Profile</h4><p style={{color: "#fff"}}>Update your profile to reflect changes.</p></div>            
                                    <div className="col-lg-8 centered-col ">
                                        <div className="DynamicFormWidget  ">
    
                    
    
    
                    
        <div className="form-box">
            <form className="form-area" onSubmit={formik.handleSubmit}>
                            <div id="controlsDiv">

                                <div className="form-group col-lg-12 col-md-12 " id="div-field-9">
                                    <label id="label-field-9">  Full Name </label>
                                <input name="name" value={formik.values.name} onChange={formik.handleChange} id="field-1" placeholder="Enter Full Name" type="text"/>
                                <strong>
                                  {formik.errors.name}
                                </strong>
                            </div>

                            <div className="form-group col-lg-12 col-md-12 " id="div-field-9">
                                <select name="fieldOfStudy" value={formik.values.fieldOfStudy} onChange={formik.handleChange}>
                                  <option>
                                    {formik.values.fieldOfStudy}
                                  </option>
                                  <option>
                                  {formik.values.fieldOfStudy === "Engineering" ? "Medicine" : "Engineering" }
                                  </option>
                                </select>
                              <strong>
                              {formik.errors.fieldOfStudy}
                              </strong>
                            </div>

                            <div className="form-group col-lg-12 col-md-12 " id="div-field-9" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                                <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                                    <label id="label-field-9">  Enter Country Code </label>
                                    <input list="country-codes" value={formik.values.countryCode} onChange={formik.handleChange} name="countryCode" id="field-3"  placeholder="e.g +237" type="text"/>
                              <strong>
                              {formik.errors.countryCode}
                              </strong>
                                </div>
                            <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                                <label id="label-field-9">  Enter Phone Number </label>
                            <input name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} id="field-4" placeholder="e.g. 675667394" type="text"/>
                              <strong>
                              {formik.errors.phoneNumber}
                              </strong>
                            </div>
                        </div>
                    
                <div className="form-group col-lg-12 col-md-12 text-left">
                <input id="textforsubmitbtn" type="submit" className="theme-button" value="UPDATE"/>
                </div>
           </div> </form>
        </div></div>            
        
    </div>
                
        
    </div>
                
        
    </div>
                
        
    </section></div>
  )
}

export default ProfilePage
