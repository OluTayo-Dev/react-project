import React from 'react'

export default function ItemDescription( {name, description }) {
  return (
    <div>
        <p>{name}</p>
        <p>
            <i>{description}</i>
        </p>
    </div>
  )
}
