import React from 'react'



function Keto() {
  return (    
    <div className="footer-keto-container">      
      <div className="footer-keto-title-container">
        <h1> Ketogenic Diet </h1>
      </div>
      <div className="card border-dark mb-3">
        <div className="row g-0">
          <div className='col-md-4'>
            <img src='../assets/wik-1.jpeg' className='card-img-top' alt='Keto Food' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">What is a Ketogenic Diet?</h6>
              <p className="card-text">A keto diet is well known for being a low carb diet, where the body produces ketones in the liver to be used as energy. Its referred to as many different names - ketogenic diet, low carb diet, low carb high fat (LCHF), etc.
              </p>  
            </div>
          </div>
        </div>  
      </div>  
      
      <div className="card border-dark mb-3"> 
        <div className="row g-0">
          <div className='col-md-4'>
            <img src='../assets/wik-3.jpeg' className='card-img-top' alt='kitchen' />
          </div>
          <div className="col-md-8">
            <div className='card-body'>
              <h6 className="card-title">What Do I eat on a Keto Diet?</h6>          
              <p className="card-text">
            You want to keep your carbohydrates limited, coming mostly from vegetables, nuts, and dairy. Dont eat any refined carbohydrates such as wheat (bread, pasta, cereals), starch (potatoes, beans, legumes) or fruit. The small exceptions to this are avocado, star fruit, and berries which can be consumed in moderation.
              </p>
              <h6 className="do-not-eat"> <strong>Do Not Eat</strong></h6>
              <div className='card'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <em>Grains - wheat, corn, rice, cerels, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Sugar - honey, agave, maple syrup, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Fruits - apples, bananas, oranges, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Tubers - potato, yams, etc</em>
                  </li>
                </ul>                
              </div>
              <h6 className="do-eat"><strong>Do Eat</strong></h6>
              <div className="card do-eat">                
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <em>Meats - fish, beef, lamb, poultry, eggs, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Leafy Greens - spinach, kale, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Above ground vegetables - broccoli, cauliflower, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>High Fat Dairy - hard cheeses, high fat cream, butter, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Nuts and seeds - macadamias, walnuts, sunflower seeds, etc</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Avocado and berries - raspberries, blackberries and other low glycemic impact berries</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Sweeteners - stevia, erythritol, monk fruit and other low carb sweeteners</em>
                  </li>
                  <li className='list-group-item'>
                    <em>Other fats - coconut oil, high-fat salad dressing, saturated fats, etc</em>
                  </li>
                </ul>
              </div>              
            </div>
          </div>
        </div>
      </div> 

      <div className="card border-dark mb-3">
        <div className="row g-0">
          <div className='col-md-4'>
            <img src='../assets/wik-5.jpeg' className='card-img-top' alt='weight measurement' />
          </div>
          <div className="col-md-8">
            <div className='card-body'>
              <h6 className="card-title">Benefits of a Ketogenic Diet</h6>
              <div className="card-text"> 
                <ul>           
                  <li> Weight Loss </li>                                    
                  <li> Control Blood Sugar </li>                           
                  <li> Mental Focus </li>                          
                  <li> Increase Energy </li>         
                  <li> Lower Cholesterol and Blood Pressure </li>             
                  <li> Insulin Resistance </li>             
                  <li> Decrease Acne </li>    
                </ul>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keto