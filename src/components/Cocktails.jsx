import React from 'react'
import { Link } from 'react-router-dom'
const Cocktails = ({image, name, id, info, glass}) => {
  return (
    <article>
      <div>
        <img src={image} alt={image}/>
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}}`}>Details</Link>
      </div>
    </article>
  )
}

export default Cocktails