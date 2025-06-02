import React from 'react'

function Label({name,onClick, className}) {
  return (
    <div className={`p-4 text-2xl font-light hover:bg-cyan-500 h-full flex items-center ${className}`} onClick={onClick}>
        {name}
    </div>
  )
}

export default Label