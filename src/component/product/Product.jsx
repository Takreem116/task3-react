import React, { useEffect, useState } from 'react'

function Product() {

let [products , setData] = useState([]); 

    const getProduct = async() =>{


        let response =  await fetch(`https://fakestoreapi.com/products`);
        let data =  await response.json();
        setData(data);
    }


    useEffect(()=>{


        getProduct() , []
    })


  return (
    <div className='row'>


        {   products.map(  (ele)=>{

return <div className='col-md-4' key={ele.id}>

    <h4 className='text-center py-3'> {ele.title}</h4>
    <img src={ele.image} className='w-75'/>
    

</div>


        })}
    </div>
  )
}

export default Product