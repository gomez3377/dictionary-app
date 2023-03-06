import React from 'react'

const Error = ({result}) => {
    const {title, message, resolution} = result
  return (
    <div>
        <h4>&#128577;</h4>
        <h3>{title}</h3>
        <p>{message}</p>
        <p>{resolution}</p>
    </div>
  )
}

export default Error