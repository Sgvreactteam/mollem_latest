import React, { useState } from 'react'

const CustomDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    const handledropdownClick = () => {
        setDropdown(!dropdown)
    }
  return (
    <div className='relative'>
            <button onClick={handledropdownClick} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black focus:outline-none font-medium rounded-lg text-sm px-1 py-2.5 text-center inline-flex items-center" type="button">Dropdown button <svg className="w-2 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>


            { dropdown===true? (<div id="dropdown" className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a onClick={handledropdownClick} href="#" className="block text-black border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a onClick={handledropdownClick} href="#" className="block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a onClick={handledropdownClick} href="#" className="block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a onClick={handledropdownClick} href="#" className="block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
                </ul>
            </div>): (<></>)}
    </div>
  )
}

export default CustomDropdown