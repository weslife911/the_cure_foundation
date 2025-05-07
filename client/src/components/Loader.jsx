import React from 'react'

function Loader() {
  return (
    <>
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Loader
