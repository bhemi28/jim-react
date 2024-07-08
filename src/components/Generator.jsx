import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'

const Header = (props) => {
  const { index, title, description } = props

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center text-center gap-4' >
        <p className='text-2xl sm:text-3xl  md:text-5xl font-bold text-slate-400'>{index}</p>
        <h3 className='text-lg sm:text-2xl md:text-3xl font-semibold text-slate-200'>{title}</h3>
      </div>
      <p className='text-center text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

const Generator = () => {

  const [showModal,setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to start..."} />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

        {
          Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button className='bg-slate-950 border border-blue-400 py-2 px-4 rounded-lg duration-200 hover:border-blue-600' key={typeIndex}>
                <p className='capitalize'>{type.replaceAll('_', " ")}</p>
              </button>
            )
          })
        }
      </div>

      <Header index={'02'} title={'Lock on target'} description={"Select the muscles judged for anhilation."} />
      <div className='bg-slate-950 p-3 border border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='flex w-full relative items-center justify-center'>
          <p>Select muscle groups</p>
          <i className="ri-arrow-down-s-fill absolute top-1/2 -translate-y-1/2 right-3"></i>
        </button>
          {showModal && (
            <div>
              modal
            </div>
          )}
      </div>
    </SectionWrapper>
  )
}

export default Generator