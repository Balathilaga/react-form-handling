import { useState } from "react";
import React from 'react'

export const CourseSelection = () => {
const[course,setCourse]=useState();

 const handleSubmit=(e)=>{
       e.preventDefault();
    alert("Selected Course"+course);
 };
  return (
    <div>
     <form onSubmit="handleSubmit">

        <h1>Task no 3</h1>
        <h2>Course selection</h2>
        <select name="course" onChange={(e)=>setCourse(e.target.value)}>
         <option value="">Select the course</option>
       <option value="java">java</option>
       <option value="python">python</option>
        <option value="datascience">datascience</option>
        <option value="tester">tester</option>
        <option value="data analytics">data analytics</option>
       
       </select> <br /> 
      

       <button onClick={handleSubmit} type="submit">submit</button>
       <h3 >Selected Course: {course}</h3>   
    
     </form>
  </div>
  );
}

export default CourseSelection


