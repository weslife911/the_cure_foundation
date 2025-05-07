import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerBefore wb-footer  footer-widgets footer-widgets-06-1 footer-heading footer-dark-6" style={{background: "none  no-repeat center center", position: "relative", backgroundSize: "cover",marginTop:"0px"}}>
        <div className="footer-widgets-wrapper ">
            <div className="container boxWidget">
                <div className="row ">
                    <div className="col-xs-12 ">
                        <div className="footer-logo ">
                            <div className="imageWidget  ">
                                <Link to="" target="">
                                    <img className="lazyload " data-src=""/>
                                </Link>

                            </div>
                        </div>

                        <div className="col-xs-10 col-xs-push-1 ">
                            <div className="row ">
                                <div className="col-md-4 col-sm-4  ">
                                    <div className="richTextWidget footer-contact ">
                                        <p>
                                            Contact
                                        </p>
                                        <p>
                                            <Link to="https://wa.me/+237673538762">
                                                +237 673538762
                                            </Link>
                                        </p>
                                    </div>            
                                </div>

                            <div className="col-md-4 col-sm-4  ">
                                <div className="richTextWidget footer-contact">
                                    <p>
                                        Location
                                    </p>
                                    <p>
                                        CenterBolt, Mile 5 Nkwen, Bamenda
                                    </p>
                                </div>            
                            </div>

                            <div className="col-md-4 col-sm-4  ">
                                <div className="richTextWidget footer-contact ">
                                    <p>
                                        Email Address
                                    </p>
                                    <p>
                                        thecurefoundation@gmail.com
                                    </p>
                                </div>            
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-12 ">
                                <div className="socialIconsWidget  footer-social-style4   ">
                                    <ul compid="10944086" pageid="0" component-data='{"socialIcons":[{"id":"icon1","slug":"facebook","url":"https:\/\/www.facebook.com\/","code":"&amp;#xf09a;"},{"id":"icon2","slug":"twitter","url":"https:\/\/www.twitter.com\/","code":"&amp;#xf099;"},{"id":"icon3","slug":"googleplus","url":"https:\/\/www.plus.google.com\/","code":"&amp;#xf0d5;"},{"id":"icon4","slug":"linkedin","url":"https:\/\/www.linkedin.com\/","code":"&amp;#xf0e1;"}]}' className="editSocialIcon">
                                        <li>
                                            <Link to="https://web.facebook.com/search/top?q=the%20cure%20bamenda" target="_blank">
                                                <span className="fa">
                                                    &#61594;
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.linkedin.com/" target="_blank">
                                                <span className="fa">
                                                    &#61665;
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>            
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-12 ">
                                <div className="richTextWidget footer-copyright ">
                                    <p>
                                        Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
                                    </p>
                                </div>            
                            </div>
                        </div>

                    </div>


                </div>


            </div>


        </div>


    </div>


</footer>
  )
}

export default Footer
