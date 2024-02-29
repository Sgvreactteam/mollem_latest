import React from 'react'
import Button from '../UI/Button'
import { useTranslation } from "react-i18next";
import { Route, Routes } from 'react-router-dom';
import Regulation from './regulation/Regulation';
import EngineeringPractices from './EngineeringPractices/EngineeringPractices';
import Templates from './template/Templates';
import { useLocation } from 'react-router-dom';
const KnowledgeHub = () => {
  const location = useLocation();
    const { t } = useTranslation();
   console.log("this is knowledge hub")
  return (
    <div className='w-full bg-background lg:px-8 md:px-5 px-3 pt-20'>
        <div className="relative max-w-4xl mx-auto lg:text-3xl md:text-2xl text-xl  font-medium text-center leading-5 pb-1">
          {t("knowledgeHub")}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gradient-to-r from-white via-green-600 to-transparent"></div>
        </div>


          
            <div className="flex gap-3 min-w-[460px] ">
              <Button
                type="regular"
                to='/knowledgeHub/reg'
              >

                {t("regulations")}
              </Button>
              <Button
                type="regular"
                to='/knowledgeHub/ep'
              >
                {t("engineeringPractices")}
              </Button>
              <Button
                type="regular"
                to='/knowledgeHub/template'
              >
                {t("templates")}
              </Button>
            </div>
            <div>
              {location.pathname === '/knowledgeHub/reg' && <Regulation/>}
              {location.pathname === '/knowledgeHub/ep' && <EngineeringPractices />}
              {location.pathname === '/knowledgeHub/template' && <Templates />}
            </div>
          

    </div>
  )
}

export default KnowledgeHub