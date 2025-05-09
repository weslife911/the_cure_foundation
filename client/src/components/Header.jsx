import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../features/users/userSlice';

function Header() {

    const token = localStorage.getItem("token");

    const dispatch = useDispatch();

    return (
        <header className="blockHeader wb-header logo_left " fixed="false">
            <div className="container boxWidget">       
                <div className="navbar navbar-default navbar-static-top ">
                    <div className="navbar-header" id="10942813" compid="10942813" pageid="0" component-data="{}">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                </div>
                </div>
            </div>
            <div className="container boxWidget">    
                <div className="navbar navbar-default navbar-static-top ">
                    <div className="navWidget navbar-collapse collapse">

                        <ul className="parent-nav-ul nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <Link to="/" pageslug="home" linktype="Page" className="siteNavLink">
                                    HOME
                                </Link>
                            </li>

                            <li className="dropdown">
                                <Link to="/contact" pageslug="contact" linktype="Page" className="siteNavLink">
                                    CONTACT
                                </Link>
                            </li>  
                                                                
                
                            {!token ? <>
                                <li className="dropdown">
                                <Link to="/about" pageslug="about" linktype="Page" className="siteNavLink">
                                    ABOUT
                                </Link>
                            </li>
                                                                
                
                            <li className="dropdown">
                                <Link to="/services" pageslug="services" linktype="Page" className="siteNavLink">
                                    SERVICES
                                </Link>
                            </li>
                                                                
                
                            <li className="dropdown">
                                <Link to="/activities" pageslug="services" linktype="Page" className="siteNavLink">
                                    ACTIVITIES
                                </Link>
                            </li>

                            <li className="dropdown">
                                <Link to="/testimonials" pageslug="services" linktype="Page" className="siteNavLink">
                                    TESTIMONIALS
                                </Link>
                            </li>
                                                                                    
                                                        
                            <li className="dropdown">
                                <Link to="/login" pageslug="login" linktype="Page" className="siteNavLink">
                                    Login
                                </Link>
                            </li>
                                                    
                            <li>
                                <Link to="/signup" pageslug="login" linktype="Page" className="siteNavLink">
                                    Register
                                </Link>
                            </li>
                             </> : <>

                            <li>
                                <Link to="/gce" pageslug="login" linktype="Page" className="siteNavLink">
                                    GCE
                                </Link>
                            </li>


                            <li>
                                <Link to="/ca" pageslug="login" linktype="Page" className="siteNavLink">
                                    CA
                                </Link>
                            </li>

                            <li>
                                <Link to="/revision" pageslug="login" linktype="Page" className="siteNavLink">
                                    REVISION
                                </Link>
                            </li>

                            <li>
                                <Link to="/notes" pageslug="login" linktype="Page" className="siteNavLink">
                                    NOTES
                                </Link>
                            </li>

                                                        

                            <li>
                                <Link to="/profile" pageslug="login" linktype="Page" className="siteNavLink">
                                    PROFILE
                                </Link>
                            </li>

                            <li>
                                <Link to="/results" pageslug="login" linktype="Page" className="siteNavLink">
                                    RESULTS
                                </Link>
                            </li>

                                                    

                            <li>
                                <button type='button' onClick={() => {
                                    dispatch(logout());
                                }} style={{border: "none", backgroundColor:"red",
                                color: "white", borderRadius: "3px", textTransform: "uppercase"}}>
                                    Logout
                                </button>
                            </li>
                            </>}

                            

                        </ul>
                    </div>            
        
                </div>
            </div>
                
        </header>
    )
}

export default Header
