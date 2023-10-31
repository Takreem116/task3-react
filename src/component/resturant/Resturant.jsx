import React from 'react'
import Food from '../Food/Food.jsx'

function Resturant() {

 





  return (
    <>
    
    <section >
<h2 className='text-center bg-success' > Pizza </h2>


        <Food  foodName={'pizza'}/>
    </section>

    <section >

    <h2 className='text-center bg-success' > Salad </h2>

        <Food  foodName={'salad'}/>
    </section>

    <section >
    <h2 className='text-center bg-success' > Onion </h2>

        <Food  foodName={'onion'}/>
    </section>

   
    
    </>
  )
}

export default Resturant