import React from "react";
import { useState } from "react";
import img1 from "/Images/img/img1.png";
import img2 from "/Images/img/img2.png";
import img3 from "/Images/img/img3.png";
import img4 from "/Images/img/img4.png";
import img5 from "/Images/img/img5.png";
import img6 from "/Images/img/img6.png";

import { WiTime4 } from "react-icons/wi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProjMan.css";
import { useTranslation } from "react-i18next";
import { FormControl, MenuItem, Select } from "@mui/material";
import { CiSearch } from "react-icons/ci";

function ProjectManagement() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [filter, setFilter] = useState("Filter");
  const [project, setProject] = useState("Projects");

  const projects = [
    {
      id: 1,
      name: "Project Name",
      progress: 25,
      img: img6,
    },
    {
      id: 1,
      name: "Project Name",
      progress: 25,
      img: img1,
    },
    {
      id: 1,
      name: "Project Name",
      progress: 25,
      img: img2,
    },
    {
      id: 1,
      name: "Project Name",
      progress: 25,
      img: img3,
    },
    {
      id: 1,
      name: "Project Name",
      progress: 25,
      img: img4,
    },
    {
      id: 1,
      name: "Project Name",
      progress: 25,
      img: img5,
    },
  ];
  const projects_A = [
    {
      id: 1,
      name: "اسم المشروع",
      progress: 25,
      img: img6,
    },
    {
      id: 1,
      name: "اسم المشروع",
      progress: 25,
      img: img1,
    },
    {
      id: 1,
      name: "اسم المشروع",
      progress: 25,
      img: img2,
    },
    {
      id: 1,
      name: "اسم المشروع",
      progress: 25,
      img: img3,
    },
    {
      id: 1,
      name: "اسم المشروع",
      progress: 25,
      img: img4,
    },
    {
      id: 1,
      name: "اسم المشروع",
      progress: 25,
      img: img5,
    },
  ];

  return (
    <>
      <div className="bg-[#F2F6FE] lg:px-8 md:px-5 px-3 w-full flex flex-col h-full sm:pt-20 pt-16">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-3">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium">
              {t("allProjects")}
            </h1>
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Filter">
                  {t("filterr")}
                </MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="On progress">On progress</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="app-dropdown">
              <Select
                variant="outlined"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                sx={{
                  borderRadius: "50px",
                  height: "40px",
                }}
              >
                <MenuItem disabled value="Projects">
                  Projects
                </MenuItem>
                <MenuItem value="All Projects">All Projects</MenuItem>
                <MenuItem value="Own Projects">Own Projects</MenuItem>
              </Select>
            </FormControl>{" "}
          </div>

          <div className="flex gap-3">
            <div>
              <div className="relative md:block hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CiSearch size={20} />
                </div>
                <input
                  type="search"
                  className="block w-full p-1 pl-10 border-0 rounded-xl ring-0 outline-none    focus:placeholder-opacity-75"
                  placeholder="Search"
                  required
                />
              </div>

              <div className="relative md:hidden block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                  <CiSearch size={20} />
                </div>
                <input
                  type="search"
                  className=" sm:w-[32px] sm:h-[32px] w-[28px] h-[28px]  p-1  border-0 rounded-full ring-0 outline-none  placeholder-white "
                  required
                />
              </div>
            </div>
            <Link
              to={`/newProject`}
              className="bg-primary px-4 py-1 flex items-center cursor-pointer text-white rounded-full"
            >
              {t("createNewP")}
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3 mt-3">
          {projects.map((item, index) => (
            <div key={index} className="flex flex-col bg-white  rounded-lg">
              <img className="rounded-lg" src={item.img} alt="" />
              <div className=" sm:p-4 p-3">
                <div className="flex flex-row  justify-between ">
                  <p className="sm:text-xl text-base sm:leading-none leading-5 font-medium">
                    {item.name}{" "}
                  </p>
                  <div className="flex items-center bg-[#E1EFFE] rounded-full text-[#1E429F] text-base font-medium px-1">
                    <WiTime4 className="mr-2" size={16} /> {t("projectStage")}
                  </div>
                </div>
                <p className="sm:mt-2 mt-1">
                  <span style={{ color: "#2353F5" }}>{item.progress}%</span>{" "}
                  <span style={{ color: "#808080" }}>{t("completed")}</span>
                </p>
                <progress className="sm:mt-2 mt-1" value={0.25}></progress>
                <div className="flex justify-end  sm:mt-4 mt-2">
                  <button
                    onClick={() => navigate("/initiatingPhase")}
                    className="bg-white focus:bg-primary focus:text-white flex items-center border rounded-full px-4 py-1 font-medium"
                  >
                    {t("viewProj")} <MdOutlineArrowRightAlt className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div class="gantt-target"></div> */}
    </>
  );
}

export default ProjectManagement;
