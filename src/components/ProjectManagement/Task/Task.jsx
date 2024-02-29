import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import TaskList from './TaskList/TaskList';
import DashBoard from './Dashboard/Dashboard'
import TimeLine from './Timeline/TimeLine';
function Task({checkedA}) {

    const { t } = useTranslation();
    

    const [dashboard, setDashboard] = useState(true);
    const [taskList, setTaskList] = useState(false);
    const [timeline, setTimeline] = useState(false);

    const showDashboard = () => {
        setDashboard(true);
        setTaskList(false);
        setTimeline(false);
    }

    const showTasklist = () => {
        setTaskList(true);
        setTimeline(false);
        setDashboard(false);
    }

    const showTimeline = () => {
        setTimeline(true);
        setDashboard(false);
        setTaskList(false);
    }


  return (
    <div className='bg-[#F2F6FE] h-screen pt-20 whitespace-nowrap'>
        <div className="flex justify-between ml-8 pb-8 mr-8">
        <div className="flex flex-row gap-7 ">
          <button
            onClick={showDashboard}
            className="bg-white py-1 px-4 rounded-3xl font-medium   text-primary focus:bg-primary focus:text-white"
          >
              {t('dashboard')}
          </button>
          <button
            onClick={showTasklist}
            className="bg-white py-1 px-4 rounded-3xl font-medium   text-primary focus:bg-primary focus:text-white"
          >
            {t('taskList')}
          </button>
          <button
            onClick={showTimeline}
            className="bg-white py-1 px-4 rounded-3xl font-medium   text-primary focus:bg-primary focus:text-white"
          >
            {t('timeline')}
          </button>
        </div>
        {!dashboard && <button className='bg-primary text-white py-1 px-4 rounded-2xl'>
            {t('addNewTask')}
          </button>}
        </div>
        {taskList && <TaskList/>}
        {dashboard && <DashBoard/>}
        {timeline && <TimeLine/>}
    </div>
  )
}

export default Task