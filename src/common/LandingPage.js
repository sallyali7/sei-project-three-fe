import React from 'react'


function LandingPage(){

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../assets/breakfast.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="../assets/lunch.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="../assets/dinner.jpeg" className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage