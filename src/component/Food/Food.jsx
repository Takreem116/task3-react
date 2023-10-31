import React, { useState ,useEffect } from 'react'



function Food(props) {
   
let [meal , setMeal] = useState([]); 

const getMeal = async() =>{

    let response =  await fetch(`https://forkify-api.herokuapp.com/api/search?q=${props.foodName}`);
    let data =  await response.json();

     setMeal(data.recipes);

}

useEffect(()=>{


    getMeal() , []
})
  return (
    
    <div className='row'>


    { meal.map(  (ele)=>{

return <div className='col-md-4' key={ele.id}>

<h4 className='text-center py-3 '> {ele.title}</h4>
<img src={ele.image_url} className='w-50' />

</div>

  })}
</div>



  )
}

export default Food