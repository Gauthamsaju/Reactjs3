import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Mkshy = () => {
    var[input,setinput]=useState({input1:'',ouput:'',items:'',outpu:''});
    
    const readValues = (e) => {
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
    
  return (
    <div>

<br></br>
        
        <br></br>
        
        <br></br>
        <TextField label='username' name='input1' value={input.input1} onChange={readValues}/>
        <Typography>{input.input1}</Typography>
        
        <br></br>
        
        <br></br>

        <TextField label='password' name='output' value={input.output} onChange={readValues}/>
        <Typography>{input.output}</Typography>

        <br></br>
        
        <br></br>

        <TextField label='mobile no' name='outputs' value={input.outputs} onChange={readValues}/>
        <Typography>{input.outputs}</Typography>

        <br></br>
        
        <br></br>

        <TextField label='email' name='outpu' value={input.outpu} onChange={readValues}/>
        <Typography>{input.outpu}</Typography>

    </div>
  )
}

export default Mkshy
