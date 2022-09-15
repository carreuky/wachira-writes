import React from 'react'
import mic from "../images/mic.jpg";


export default function About() {
const bgtext={
  backgroundColor: 'rgb(0,0,0)',
  backgroundColor: 'rgba(0,0,0, 0.4)',
  color: 'white',
  fontWeight: 'bold',
  border: '3px solid #f1f1f1',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
  width: '80%',
  padding: '20px',
  textAlign: 'center'
}

  return (
    <div style={{ 
      backgroundImage: `url(${mic})` ,
      height:'80vh',
      backgroundSize: 'cover',
    }}>
<div style={bgtext}>
  <h2 className='text-amber-400' style={{fontSize:"30px"}}>ABOUT</h2>
  <h1  style={{fontSize:"50px"}}>MUTATHI WACHIRA</h1>
  <p className='text-2xl'>The founder and Director of Wachira Speaks, a Leader, Public Speaker, Motivational Speaker, Writer, African enthusiast, Political Scientist and Strategist, Philosopher, Team builder, Organization consultant and a Mental Health Advocate.
Wachira is also among the new upcoming sort after corporate trainers in various fields.</p>
</div>      
</div>
  )
}
