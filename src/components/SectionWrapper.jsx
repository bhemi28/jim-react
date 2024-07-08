import React from 'react'

const SectionWrapper = (props) => {

<<<<<<< HEAD
    const {children, header, title} = props;

  return (
    <section className='min-h-screen flex flex-col gap-10'>
        <div className='flex flex-col gap-5  items-center justify-center bg-slate-950 text-slate-200 py-10 '>
            <p className='uppercase font-medium max-lg:text-base lg:text-2xl  '>{header}</p>
            <h1 className=' font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'>{title[0]} <span className='uppercase font-bold text-blue-400'>{title[1]}</span> {title[2]}</h1>
=======
    const {children, header, title} = props
    
  return (
    <section className='min-h-screen flex flex-col gap-10 p-4' >
        <div className='flex flex-col py-10 items-center justify-center bg-slate-950 text-slate-200 gap-4'>
            <p className='uppercase text-base   '>{header}</p>
            <h1 className='font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{title[0]} <span className='text-blue-400 uppercase font-bold'>{title[1]}</span> {title[2]}</h1>
        </div>
        <div className='max-w-[800px] w-full flex flex-col gap-10 mx-auto p-4'>
        {children}
>>>>>>> ba1ac16a84b603fd661b97e964666fe6f9e4a570
        </div>
    </section>
  )
}

export default SectionWrapper