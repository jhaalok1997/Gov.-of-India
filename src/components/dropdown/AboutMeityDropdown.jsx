import React ,{useState}from 'react'

export const AboutMeityDropdown = () => {

  const [isOpen, setIsOpen] =useState(false)

  const buttonClick = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return(
    <section className="">
      <div className="" role='menu' aria-orientation='vertical'>
        <button className=" hover:bg-green-700  font-bold  px-4 rounded inline-block" onClick={buttonClick}>About MeitY</button>
        {
          isOpen && (<div className="absolute bg-white shadow-md py-2 px-4 w-48">
            <a href="./pages/AboutMeity/VisionandMission.jsx" className="inline-block  py-2 hover:bg-gray-100">Vision & Mission</a>
            <a href="" className="block py-2 hover:bg-gray-100">option1</a>
            <a href="" className="block py-2 hover:bg-gray-100">option1</a>
            <a href="" className="block py-2 hover:bg-gray-100">option1</a>
          </div>
            )
        }
      </div>
     
    </section>
  )
}
  
   
