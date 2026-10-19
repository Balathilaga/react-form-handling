import { useState } from "react";
function Registration (){
 const[name,setName]=useState("");
 const[emai,setEmail]=useState("");
 const[password,setPassword]=useState("");
 const[gender,setGender]=useState("");
 const[skills,setskills]=useState([])
 const[course,setCourse]=useState("")
 const[adress,setAddress]=useState("");

 const handleSkillChange =(event)=>{
    const skill = event.target.value;
    if(event.target.value){
        setskills([...skills,skill]);
    }
    else{
        setskills(skills.filter(item=> item !== skill));
    }
 }
return(
    <>
    <h1>Task 5</h1>
    <h2 style={{color:"violet"}}> Registration form</h2>
    <form style={{textAlign:"left"}}>
        <label>Name :</label>
        <input type="text"value={name}onChange={(e)=>setName(e.target.value)} /> <br /> <br />

        <label>Email  :</label>
        <input type="text"value={emai}onChange={(e)=>setEmail(e.target.value)} /> <br /> <br />

        <label>Password :</label>
        <input type="text"value={password}onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />

        <label>Gender :</label>
        <input type="radio" name="gender" value="male"onChange={(e)=>setGender(e.target.value)} checked ={gender=== "male"}/> 
        <label>Male</label> 
        <input type="radio" name="gender"value="female"onChange={(e)=>setGender(e.target.value)} checked={gender === "female"} />
        <label>Female</label> <br /> <br />

        <label>Select Skills:</label> <br />
        <input type="checkBox"value="HTML" checked={skills.includes("HTML")}onChange={handleSkillChange} />
        <label>HTML</label> <br />
         <input type="checkBox"value="CSS" checked={skills.includes("CSS")}onChange={handleSkillChange} />
        <label>CSS</label> <br />
         <input type="checkBox"value="JAVASCRIPT" checked={skills.includes("JAVASCRIPT")}onChange={handleSkillChange} />
        <label>JAVASCRIPT</label> <br />
         <input type="checkBox"value="REACT" checked={skills.includes("REACT")}onChange={handleSkillChange} />
        <label>REACT</label> <br />
         <input type="checkBox"value="SQL" checked={skills.includes("SQL")}onChange={handleSkillChange} />
        <label>SQL</label> <br />

        <label>Course:</label> <br />

     <select value={course} onChange={(e) => setCourse(e.target.value)}>

    <option value="">Select Course</option>
    <option value="Java">Java</option>
    <option value=".NET">.NET</option>
    <option value="Python">Python</option>
   <option value="React">React</option>
   </select>
   <br /><br />

   <label>Address:</label> <br /> 
   <textarea rows="5" cols="30" value={adress}onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address">
   </textarea>
   <br /><br />


<button style={{backgroundColor:"green"}} type="submit"> Register </button> <br />

<button style={{backgroundColor:"red"}} type="reset"> Reset </button>
    </form>

    </>

);
}
export default Registration