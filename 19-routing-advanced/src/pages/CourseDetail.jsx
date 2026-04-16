import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const Params = useParams()
    console.log(Params.id);
    
  return (
    <div>
      <h1>{Params.id} Course Details </h1>
    </div>
  )
}

export default CourseDetail
