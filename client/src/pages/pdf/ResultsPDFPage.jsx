import React from 'react'
import { useSelector } from 'react-redux'
import { getAuthUser } from '../../features/users/userSlice'
import { format } from 'date-fns';
import { getUserResults } from '../../features/results/resultSlice';
import ResultRow from '../../components/ResultRow';

function ResultsPDFPage() {

    const authUser = useSelector(getAuthUser);

    const results = useSelector(getUserResults).filter(result => result.userId === authUser?._id);

  return (
    <div className="container mt-5">
        <div className="d-flex flex-row">
            <div className="p-2">
                <p>
                    THE CURE FOUNDATION
                </p>
                <p>
                    NAME: {authUser?.name.toUpperCase}
                </p>
            </div>
            <div className="p-2">
                
                <p>
                    FIELD: {authUser?.fieldOfStudy}
                </p>
                <p>
                    Printed Date: {format(new Date(), 'd MMM, yyyy')}
                </p>
            </div>
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

            </tbody>
        </table>
    </div>
  )
}

export default ResultsPDFPage
