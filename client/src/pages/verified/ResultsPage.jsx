import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserResults } from '../../features/results/resultSlice';
import { getAuthUser } from '../../features/users/userSlice';
import ResultRow from '../../components/ResultRow';

function ResultsPage() {

    const authUser = useSelector(getAuthUser);

    const results = useSelector(getUserResults).filter(result => result.userId === authUser?._id);

    console.log(results)

    const date = new Date(authUser?.createdAt);

    const formattedDate = `${date.getDate()}, ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;

  return (
    <div id="ca" className="page wb-page">
                                    <style id="sectionStyle-10946059">
    
</style><section id="section-10946059" className="
            widget-section sec-padding-xl  project-section ui-droppable    theme-dark-color-11                 " ><div className="container boxWidget">
                                <div className="row centered-row ">
                                <div className="col-lg-8 col-md-8 col-sm-10 centered-col ">
                                <div className="richTextWidget  ">
<h1 style={{color: "white"}}>Results</h1><p style={{color: "white"}}>Download your CAs results here.</p></div>            

</div>
        

</div>
        

</div>
        

</section>


    <div className="container mt-5" style={{marginTop: "10px"}}>

        <div style={{display: "flex", justifyContent:"space-around", marginTop:"30px"}}>
            <div>
                <p>
                    NAME: {authUser?.name}
                </p>
                <p>
                    FIELD: {authUser?.fieldOfStudy}
                </p>
            </div>
            <div>
                <p>
                    THE CURE FOUNDATION
                </p>
                <p>
                    Printed Date: {formattedDate}
                </p>
            </div>
        </div>
        
        <div style={{display: "flex", justifyContent:"center"}}>
            <p>
                <img src="https://iili.io/32fZHiu.png" alt="THE CURE FOUNDATION" width="100px"/>
            </p>
        </div>
        
        <h2 className="mb-4">CA Results</h2>
        
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Subject</th>
                    <th>Score</th>
                </tr>
            </thead>
            
            <tbody>

                {results.map((result) => (
                    <ResultRow key={result._id} result={result} />
                ))}

                {/* <span className="mb-4" style={{padding: "30px"}}>Results will soon be available</span> */}

            </tbody>
        </table>

        <Link to="" className="btn btn-primary" style={{color: "#fff", marginBottom: "30px"}}>Download</Link>
    </div></div>
  )
}

export default ResultsPage
