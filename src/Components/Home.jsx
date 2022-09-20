import React,{useEffect,useState} from "react";
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.jpg'
import m4 from '../images/m4.jpg'
import m5 from '../images/m5.jpg'
import m6 from '../images/m6.jpg'


const images =[m1,m2,m3,m4,m5,m6]

export default function Home() {

const [index, setIndex]=useState(0)

useEffect(()=>{
  const setImage=setInterval(()=>{
    setIndex(index=>index + 1)
  },4000)
  return()=>{
    clearInterval(setImage)
  }
},[])

function setToZero(){
 if  (index === 5){
  setIndex(0)
 }
}

setToZero()
  return (
    <div>
  <div
      className="bg-hero-pattern  bg-no-repeat bg-cover mx-auto bg-gray-900 pl-10"
      style={{
        height: '80vh',
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${images[index]})`,
      }}
    >

    </div>
    </div>
  );
}
