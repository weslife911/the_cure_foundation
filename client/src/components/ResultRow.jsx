import React from 'react'
import { selectSubjectNameById } from '../features/subjects/subjectSlice';
import { useSelector } from 'react-redux';

function ResultRow({ result }) {

    const subjectName = useSelector(state => 
    selectSubjectNameById(state, result.subjectId)
  );

  return (
    <tr>
        <td>
            {subjectName}
        </td>
        <td>
            {result.score}
        </td>
    </tr>
  )
}

export default ResultRow
