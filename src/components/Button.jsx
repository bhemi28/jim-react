import React from 'react'

const Button = (props) => {

    const {text} = props

  return (
    <button className="mt-3 mx-auto border-2 group  border-blue-400 rounded text-xl font-semibold px-6 py-3 hover:bg-slate-950 group-hover:text-white text-slate-200 btnShadow shadow-blue-300 duration-200 ">{text}</button>
  )
}

export default Button