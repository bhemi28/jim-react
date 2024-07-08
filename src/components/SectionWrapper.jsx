import React from 'react'

const SectionWrapper = (props) => {

    const {children, header, title} = props;

  return (
    <section className='min-h-screen flex flex-col gap-10'>
        <div className='flex flex-col gap-5  items-center justify-center bg-slate-950 text-slate-200 py-10 '>
            <p className='uppercase font-medium max-lg:text-base lg:text-2xl  '>{header}</p>
            <h1 className=' font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'>{title[0]} <span className='uppercase font-bold text-blue-400'>{title[1]}</span> {title[2]}</h1>
        </div>
    </section>
  )
}

export default SectionWrapper