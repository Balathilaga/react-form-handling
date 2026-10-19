import { useState } from "react";
import React from 'react'

 const Agree = () => {
    const [agree,setAgree]=useState(false);
  return (
    <div>

        <h2>Task no 4</h2>
        <form action="">
            <label>Terms And Conditions</label>
            <input type="checkBox" checked={agree}onChange={(e)=>setAgree(e.target.value)} />
        </form>

    </div>
  )
}
 export default Agree