import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useTranslation } from "react-i18next";

function Header() {
  const [hamburgerSize, setHamburgerSize] = useState(30); // Initial size
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language === "ar");
  

  const location = useLocation();
  const admin =
    location.pathname == "/useradmin" || location.pathname == "/topiwala"
      ? false
      : true;

  const [isDrawerOpen, setDrawerOpen] = useState(admin);

  const handleHamburgerClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleChange = () => {
    const newLanguage = checked ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };

  return location.pathname == "/" || location.pathname == "/login" || location.pathname == "/forgot" || location.pathname == "/CompanySignup" ? (
    <></>
  ) : (
    <div>
      <div className="w-full bg-primary sm:h-14 h-12 flex justify-between fixed md:px-8 sm:px-5 px-3 py-2  z-[3000]">
        <div className="flex flex-row sm:gap-3 gap-2 items-center justify-center">
          <button className="sm:w-8 w-7  sm:h-8 h-7  rounded-full">
            <img src="/Images/navbar/Avatar.png" />
          </button>
          <button className="sm:w-8 w-7 sm:h-8 h-7  bg-[#ffffff] bg-opacity-20 drop-shadow-lg rounded-full flex justify-center items-center">
            <IoIosNotifications color="white" />
          </button>
        </div>

        <div className="flex justify-center items-center sm:gap-6 gap-3">
          {/* <Switch color="default" checked={checked} inputProps={{ 'aria-label': 'toggle language' }} onChange={handleChange} /> */}
          <button
            className="text-white"
            checked={checked}
            onClick={handleChange}
          >
            {!checked ? "عربي" : "English"}
          </button>
          <div>
            <div className="relative md:block hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch color="white" size={20} />
              </div>
              <input
                type="search"
                className="block w-full p-1 pl-10 border-0 rounded-xl ring-0 outline-none bg-[#f9fafb] bg-opacity-20 text-white placeholder-white focus:placeholder-opacity-75"
                placeholder="Search"
                required
              />
            </div>

            <div className="relative md:hidden block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                <CiSearch color="white" size={20} />
              </div>
              <input
                type="search"
                className=" sm:w-[32px] sm:h-[32px] w-[28px] h-[28px]  p-1  border-0 rounded-full ring-0 outline-none bg-[#f9fafb] bg-opacity-20 text-white placeholder-white "
                required
              />
            </div>
          </div>

          <div>
            <RxHamburgerMenu
              color="white"
              size={30}
              onClick={handleHamburgerClick}
            />
          </div>

          <div className="lg:pl-8 sm:pl-3 ">
            <Link to="/useradmin" className="lg:block hidden">
              <img src="/Images/navbar/Logo.png" alt="logo" />
            </Link>
            <Link to="/useradmin" className="lg:hidden block">
              <img src="/Images/logo-sm.svg" alt="logo" className="h-[30px]" />
            </Link>
          </div>
        </div>
      </div>

      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className="sm:w-[300px] w-[280px] pt-16 px-4">
          <NestedDrawer />
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Header;

const NestedDrawer = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isHubOpen, setHubOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false)
  const { t } = useTranslation();

  const toggleProject = () => {
    setProjectOpen(!isProjectOpen);
    setHubOpen(false);
  };

  const toggleHub = () => {
    setHubOpen(!isHubOpen);
    setProjectOpen(false);
  };
  const handleTask = () => {
    setIsTaskOpen(!isTaskOpen);
  }


  return (
    <div>
      <div>
        <ListItemButton onClick={handleTask}>
          <div className="flex items-center justify-between w-full">
          {isTaskOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
     
              <div className="flex gap-3">
                <ListItemText primary={t("taskManagement")} />

                <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
                </ListItemIcon>
              </div>
        
          </div>
        </ListItemButton>
        {isTaskOpen && (
          <div className="">
            <Link to="/task/Dashboard">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("task")} />
              </ListItemButton>
            </Link>

            <Link to="/taskCreate">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("taskCreate")} />
              </ListItemButton>
            </Link>
            <Link to="/userTask">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("userTask")} />
              </ListItemButton>
            </Link>
            
          </div>
        )}
        {/* <ListItemButton onClick={toggleProject}>
          <div className="flex items-center justify-between w-full">
            {isProjectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            <div className="flex gap-2">
              <ListItemText primary={t("projectPhases")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </div>
        </ListItemButton> */}

        {/* {isProjectOpen && (
          <div className="">
            <Link to="/preparation/Bill">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("preparationPhase")} />
              </ListItemButton>
            </Link>

            <Link to="/initiatingphase">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("initiatingPhase")} />
              </ListItemButton>
            </Link>
            <Link to="/execution">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("excecutionPhase")} />
              </ListItemButton>
            </Link>
            <Link to="/close">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("closeOutPhase")} />
              </ListItemButton>
            </Link>
          </div>
        )} */}
      </div>

      <div>
        <ListItemButton onClick={toggleHub}>
          <div className="flex items-center justify-between w-full">
            {isHubOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            <div className="flex gap-3">
              <Link to="/knowledgeHub/reg" className=" items-center flex justify-between">
              <ListItemText primary={t("knowledgeHub")} />

              <ListItemIcon className=" flex justify-end mr-5">
                <img
                  src="/Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
              </Link>
            </div>
          </div>
        </ListItemButton>

        {isHubOpen && (
          <div className="">
            <Link to="/knowledgeHub/reg">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("regulations")} />
              </ListItemButton>
            </Link>

            <Link to="/knowledgeHub/template">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("templates")} />
              </ListItemButton>
            </Link>

            <Link to="/knowledgeHub/ep">
              <ListItemButton className=" !text-end !pr-10">
                <ListItemText primary={t("engineeringPractices")} />
              </ListItemButton>
            </Link>
          </div>
        )}
      </div>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/data">
            <div className="flex gap-3">
              <ListItemText primary={t("database")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/database.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/ProjectManagement">
            <div className="flex gap-3">
              <ListItemText className=" text-right" primary={t("currentProjdash")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/project.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            <ListItemText primary={t("calculator")} />

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="/Images/sidebar/calculator.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            <ListItemText primary={t("report")} />

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="/Images/sidebar/report.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <div className="flex gap-3">
            <ListItemText primary={t("techSupp")} />

            <ListItemIcon className="flex items-center justify-center">
              <img
                src="/Images/sidebar/support.svg"
                alt="project-image"
                className="w-4 h-4"
              />
            </ListItemIcon>
          </div>
        </div>
      </ListItemButton>

      {/* <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/topiwalaPlant">
            <div className="flex gap-3">
              <ListItemText className=" text-right" primary={t("topiwalaPlant")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/project.svg"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton> */}

      <ListItemButton>
        <div className="flex items-center justify-end w-full">
          <Link to="/ownProjects">
            <div className="flex gap-3">
              <ListItemText className=" text-right" primary={t("Own Projects Dashboard")} />

              <ListItemIcon className="flex items-center justify-center">
                <img
                  src="/Images/sidebar/Vector.png"
                  alt="project-image"
                  className="w-4 h-4"
                />
              </ListItemIcon>
            </div>
          </Link>
        </div>
      </ListItemButton>
    </div>
  );
};
