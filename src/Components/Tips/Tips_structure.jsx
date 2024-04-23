import React from 'react'

const Tips_structure = ({image, title, description}) => {
  return (
    <div className='tips__element'>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Tips_structure