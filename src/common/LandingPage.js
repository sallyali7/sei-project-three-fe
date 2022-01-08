import React from 'react'
import { Carousel } from '3d-react-carousal'


function LandingPage(){
  const slides = [
    <img  src="../assets/breakfast.jpeg" alt="1" height="500px" width="550px" key="1"/>,
    <img  src="../assets/lunch.jpeg" alt="2" height="500px" width="550px" key="2"/>,
    <img src="../assets/dinner.jpeg" alt="3" height="500px" width="550px" key="3"/>   ]

  return (
    <><Carousel slides={slides} autoplay={false} interval={3000} className="carousel"/><div>
      {/* <h1>KetoKitchen</h1> */}
    </div></>
    

  )
}
  
export default LandingPage