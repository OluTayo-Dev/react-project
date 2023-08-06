import React from 'react';
import ItemDescription from "./ItemDescription";

export default function Product({ name, description, price }) {
  return (
    <div>
        

        <ItemDescription name={name}  description={description}/>
        {/* <h1>{name}</h1>
        <h2>{description}</h2> */}
        <h3>${price}</h3>
    </div>
  );
}
