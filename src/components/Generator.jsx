import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";

const Header = (props) => {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center text-center gap-4">
        <p className="text-2xl sm:text-3xl  md:text-5xl font-bold text-slate-400">
          {index}
        </p>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-200">
          {title}
        </h3>
      </div>
      <p className="text-center text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
};

const Generator = () => {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const updateModal = (muscleGroup) => {

    if(muscles.includes(muscleGroup)){
      setMuscles(muscles.filter( val => val !== muscleGroup  ))
      return
    }
    
    if(muscles.length > 2 ){
      toggleModal()
      return
    }

    if(poison !== 'individual'){
      setMuscles([muscleGroup])
      toggleModal()
      return
    }

    

    setMuscles([...muscles,muscleGroup]);
    if(muscles.length === 2) toggleModal()

  }

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to start..."}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className={
                "bg-slate-950 border py-2 px-4 rounded-lg duration-200 border-blue-400 hover:border-blue-600" +
                (type === poison ? 'border-blue-600 shadow-md shadow-blue-200' : 'border-blue-400')
              }
              key={typeIndex}
              onClick={() => {
                setMuscles([])
                setPoison(type);
              }}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on target"}
        description={"Select the muscles judged for anhilation."}
      />
      <div className="bg-slate-950 p-3 border border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="flex w-full relative items-center justify-center"
        >
          <p className="capitalize">{muscles.length == 0 ? 'Select muscle group' : muscles.join(' ')}</p>
          <i className="ri-arrow-down-s-fill absolute top-1/2 -translate-y-1/2 right-3"></i>
        </button>
        {showModal &&
          <div className="flex flex-col gap-1 p-2">
            {
              (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex) => {
                return (
                  <button 
                  onClick={() => {
                    
                    updateModal(muscleGroup);
                  }}
                  key={muscleGroupIndex} 
                  className={"capitalize w-full rounded-sm hover:bg-slate-800 py-2 " + (muscles.includes(muscleGroup) ? "text-blue-600" : ""
                )}
                  >
                    {muscleGroup}
                  </button>
                )
              })
            }
          </div>}
      </div>

      <Header
        index={"03"}
        title={"Become juggeranut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              className={
                "bg-slate-950 border   border-blue-400 py-2 px-4 rounded-lg duration-200 hover:border-blue-600" +
                (scheme === goal ? "border-blue-600 shadow-md shadow-blue-200" : "border-blue-400")
              }
              key={schemeIndex}
              onClick={() => {
                setGoal(scheme);
              }}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
