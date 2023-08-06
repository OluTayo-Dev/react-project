import React from 'react';
import  Product from './Product';

export default function Props() {
  return (
    <div>
        <h1> Hello World</h1>
        <Product
         name='Google Home' 
        description='Your AI assistant' 
        price={59.99} />

         <h1> Hello World</h1>
        <Product
         name='Ihone 12' 
        description='The latest Ihone' 
        price={1200} /> 

         <h1> Hello World</h1>
        <Product
         name='Macbook ' 
        description='Your AI assistant' 
        price={2500} />  
        {/* product name, description, price  */}
        {/* product name, description, price  */}
        {/* product name, description, price  */}
        {/* product name, description, price  */}
    </div>
  )
}
