import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Validation = () => {
    var [submitted, setsubmitted] = useState(false)
    var [value, setValue] = useState({
        fname: '',sname:''
    })
    var [validations, setValidations] = useState({
        fname: '',sname:''
    })

    const handleinput = (e) => {
        const { name, value } = e.target;
        setValue({ ...value, [name]: value })
        console.log(value)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setsubmitted(true);
        if (setsubmitted) {
            toast('Enter Any Content', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }

    const checkValidation = () => {
        let error = validations;
        if (!value.fname.trim()) {
            error.fname = "enter the first name"
        }
        else {
            error.fname = ""
        }
        if (!value.sname.trim()) {
            error.sname = "enter the first name"
        }
        else {
            error.sname = ""
        }
        setValidations(error);
    }

    useEffect(() => {
        checkValidation()
    })

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <br />
                <TextField label='first name' name='fname' value={value.fname} onChange={handleinput} />
                <br></br>
                <br></br>
                <TextField label='SECOND  name' name='Sname' value={value.Sname} onChange={handleinput} />
                {(validations.fname && submitted) && <p>{validations.fname}</p>}
                <br></br>
                <br></br>
                {(validations.sname && submitted) && <p>{validations.sname}</p>}
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Validation
