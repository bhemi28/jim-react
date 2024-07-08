import React from 'react'

const SectionWrapper = (props) => {

    const {children, header, title} = props
    
  return (
    <section className='flex flex-col gap-10 ' >
        <div className='flex flex-col py-10 items-center justify-center bg-slate-900 text-slate-200 gap-4'>
            <p className='uppercase text-base   '>{header}</p>
            <h1 className='font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{title[0]} <span className='text-blue-400 uppercase font-bold'>{title[1]}</span> {title[2]}</h1>
        </div>
    </section>
  )
}

export default SectionWrapper