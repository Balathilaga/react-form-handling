import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Students from'./Students.jsx'
import CourseSelection from './CourseSelection.jsx'
import Agree from './Agree.jsx'
import Registration from './Registration.jsx'

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    alert("Name:" + name +"\nEmail:" + email);
  }

  return (
    <>
      {/* <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
        <label style={{color:"blue",}}>Name:</label> 
        <input style={{borderRadius:"5px",border:"2px solid blue", height:"25px",font:"20px",marginBottom:"30px"}}type="text" placeholder='Enter your name' value={name}onChange={(e)=>setName(e.target.value)} required/> <br />
        <label style={{color:"blue",marginBottom:"30px"}}>Email id:</label>
        <input style={{borderRadius:"5px",border:"2px solid blue", height:"25px",font:"20px",marginBottom:"30px"}} type="text" placeholder='Enter your Email' value={email}onChange={(e)=>setEmail(e.target.value)} required /> <br />
        <label style={{color:"blue",marginBottom:"30px"}}> Password:</label>
        <input style={{borderRadius:"5px",border:"2px solid blue", height:"25px",font:"20px",marginBottom:"30px"}} type="text" placeholder='Enter your Password' value={password}onChange={(e)=>setPassword(e.target.value)} required /> <br />

        <button style={{backgroundColor:"red", borderRadius:"5px"}} type='submit'>Registerd</button>
        </form>
      </div> */}



      {/* <Students />
      <CourseSelection />
      <Agree /> */}
      <Registration />
    </>
  )
}

export default App
