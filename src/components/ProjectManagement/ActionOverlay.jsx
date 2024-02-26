import React, {useEffect} from 'react'
import './actionOverkay.css'
import { MdOutlineClose } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

function ActionOverlay({closeactionModal}) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector(".content");

      if (modalContent && !event.target.closest(".content")) {
        // Close the modal if the click is outside the modal content and not on the excluded class
        closeactionModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeactionModal]);
  return (
    <div className='action-overlay'>
      <div className="content lg:w-[60%] w-[70%] flex flex-col">
        <div className="flex flex-row justify-between items-center border-b border-[#A2F5A2]">
            <MdOutlineClose
              size={24}
              className="m-4 cursor-pointer" 
              // color="default"
              onClick={closeactionModal}
            />
            <p className='text-2xl font-bold text-primary'>Task Name</p>
            <p></p>
        </div>
        <div className="flex flex-col ml-6 mt-10 gap-4 lg:text-lg">
          <p>Assignee - User 1</p>
          <p>Project Name - Project 1</p>
          <p>Start Date - Project 1</p>

          <p>Assignee - User 1</p>
          <p>Project Name - Project 1</p>
          <p>Start Date - Project 1</p>

        </div>
        <div className="flex flex-col lg:mx-6 h-full mt-8 p-4 rounded-t-3xl bg-[#F2F6FE]">
          <p className='lg:text-lg font-bold mb-8'>Comments</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#D9D9D9"/>
            </svg>
            <p className='pl-4'>Mohan</p> <p className='text-[#B7B1B1] pl-2'>Created this task</p> <p className='text-sm pl-2 text-[#B7B1B1]'> - 2 years ago</p>
            </div>

            <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#D9D9D9"/>
            </svg>
            <p className='pl-4'>Mohan</p> <p className='text-[#B7B1B1] pl-2'>Created this task</p> <p className='text-sm pl-2 text-[#B7B1B1]'> - 2 years ago</p>
            </div>
          </div>
          <div className="flex flex-col border mt-8 mr-4 p-4 rounded-3xl bg-white">
            <div className="flex flex-row justify-between">
            <p className='text-primary'>Add Comments</p>
            <IoIosSend size={24}/></div>
            <textarea  name="" id="" cols="30" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionOverlay