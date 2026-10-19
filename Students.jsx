import { useState } from "react";

function Students (){
    const[name,setName] = useState("");
    const[age,setAge]   =useState();
    const[course,setCouse]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name:" +name)
        console.log("Age:"+age)
        console.log("Course:" + course);

    }



return(

<>

<h1>Task no 2</h1>
<h2>STUDENTS DETAILS</h2>
<div>
    <form onClick={handleSubmit}>
        <label> Student Name</label>
        <input type="text" value={name}onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your name"/> <br /> <br />

        <label>Age</label>
        <input type="text"value={age}onChange={(e)=>setAge(e.target.value)}
        placeholder="Enter your Age" /> <br /> <br />
       
       <label>Select Course</label>
       <select name="course"onChange={(e)=>setCouse(e.target.value)}>
        <option value="Python">Python</option>
        <option value="React">React</option>
        <option value="Mangodp">Mangodp</option>
        <option value="MernStack">MernStack</option>
       </select> <br /> <br />

       <button type="submit">Submit</button>

    </form>
</div>
</>
);
}
 export default Students