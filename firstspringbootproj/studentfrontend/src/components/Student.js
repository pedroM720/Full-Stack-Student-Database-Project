
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import React, {useEffect, useState} from 'react';

export default function Student() {
  const paperStyle={padding:'50px 20px', width: 600, margin:"20px auto"}
  const[name, setName]=useState('')
  const[address, setAddress]=useState('')
  const[students, setStudents]=useState([])
  
  const handleClick=(e)=>{
    e.preventDefault()
    const student={name, address}
    console.log(student)
    fetch("http://localhost:8080/student/add", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

    }).then(()=>{
      console.log("New Student added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
},[])
  return (
    <Container>
      <Paper
      component="form"
       elevation={3}
       style={paperStyle}
      sx={{ '& > :not(style)': { m: 1, width: '100%'}, }}
      noValidate
      autoComplete="off"
      >
        <h1 style={{color:"blue"}}>Add Student</h1>
    

      <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
       
      <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
      Submit
      </Button>
    </Paper>
    <Paper elevation={3} style={paperStyle}>
      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
          Id: {student.id}<br/>
          Name: {student.name}<br/>
          Address: {student.address}
          </Paper>
        ))
      }

    </Paper>
    </Container>
  );
}
