import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Dashboard from './Task/Dashboard/Dashboard';
import Button from '../UI/Button';

const OwnProjectsDashboard = () => {

    const { t } = useTranslation();
    const [taskSelect, setTaskSelect] = useState(0)

    const handleRegButtonClick = (index) => {
      setTaskSelect(index)
    }
    const taskRouts =[
      {
        title:"dashboard",
        to:"/task/Dashboard"
      },
      {
        title:"taskList",
        to:"/task/Tasklist"
      },
      {
        title:"timeline",
        to:"/task/Timeline"
      },
    ]


  return (
    <div className='bg-[#F2F6FE] h-screen pt-20 whitespace-nowrap'>
        <div className="flex justify-between ml-8 pb-8 mr-8">
        <div className="flex flex-row gap-7 ">

        {
                taskRouts && taskRouts.map((item,index)=>{
                    return  <Button
                    type={taskSelect == index ? "regularChange" : "regular"}
                    to={item.to}
                    onClick={handleRegButtonClick.bind(this,index)}
                >
                    { t(item.title)}
                </Button>
                })
              }

        </div>
        {/* {!dashboard && <button className='bg-primary text-white py-1 px-4 rounded-2xl'>
            {t('addNewTask')}
          </button>} */}
        </div>
                {/* {location.pathname === '/task/Dashboard' && <Dashboard />}
                {location.pathname === '/task/Tasklist' && <TaskList />}
                {location.pathname === '/task/Timeline' && <Timeline />} */}
                <Dashboard />
              
    </div>
  )
}

export default OwnProjectsDashboard