import React from 'react'
import { Link } from 'react-router-dom'

function QuestionBox({ question }) {
  return (
    <li style={{background: "#ffffff",padding: "15px 20px",margin: "10px 0",borderRadius: "8px",display: "flex",justifyContent: "space-between",alignItems: "center",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",transition: "all 0.3s ease-in-out"}}>
                    <span className="file-name" style={{fontSize: "16px",fontWeight: "500",color: "#555"}}>
                      {question.fileName}
                    </span>
                    <Link to={question.fileLink} className="download-btn" download style={{padding: "10px 18px",fontSize: "14px",color: "white",backgroundColor: "#007bff",textDecoration: "none",borderRadius: "6px",transition: "background 0.3s"}}>Download</Link>
                </li>
  )
}

export default QuestionBox
