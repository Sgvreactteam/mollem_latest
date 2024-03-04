import React from 'react'
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import HideContentOverlay from './HideContentOverlay'
import { Pagination } from "@mui/material";
import { styled } from "@mui/system";
import usePagination from "./Pagination";
import ActionOverlay from './ActionOverlay';
import { IoMdSearch } from "react-icons/io";
import { IoPrintOutline } from "react-icons/io5";
import Button from '../../../UI/Button';
function TaskList() {
    const CustomPagination = styled(Pagination)(({ theme }) => ({
        "& .MuiPagination-ul": {
          justifyContent: "center", // Center align the pagination items
        },
        "& .MuiPaginationItem-root": {
          margin: theme.spacing(0.5), 
          borderRadius: "0", 
          
        },
      }));
    const tasks = [
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Done",
            priority: "Medium",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "Low",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "Low",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "Medium",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "Medium",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "Low",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Done",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Done",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Done",
            priority: "High",
            action: <FaEye/>
        },
        {
            projectName: "Project Name",
            taskName: "Task Name",
            dept: "Department",
            assignee: "Assignee",
            start: "Start Date",
            due: "Due Date",
            status: "Pending",
            priority: "High",
            action: <FaEye/>
        },
    ]
    const { t } = useTranslation();
    const [date,setDate] = useState()

    const [modalOpen, setModalOpen] = useState(false);
    const [actionModal, setactionModal] = useState(false)

    const openactionModal = () => {
        setactionModal(true);
    };

    const closeactionModal = () => {
        setactionModal(false);
    };
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleChange = (event, value) => {
        setCurrentPage(value);
        dataShown.jump(value);
      };

      const [entries, setEntries] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);
    const totalData = 16;
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const count = Math.ceil(tasks.length / postPerPage);
    const dataShown = usePagination(tasks, totalData);



    const handleEntries = (event) => {
      setPostPerPage(event.target.value)
    }


    const currentData = tasks.slice(firstPostIndex, lastPostIndex);
    const getComplexityColor = (complexity) => {
        switch (complexity) {
          case "Low":
            return "var(--green-100, #DEF7EC)"; // Light green for low complexity
          case "Medium":
            return "var(--purple-100, #EDEBFE)"; // Yellow for medium complexity
          case "High" || "عالي":
            return "var(--red-100, #FDE8E8)"; // Light red for high complexity
          case "قليل":
            return "var(--green-100, #DEF7EC)";
          case "واسطة":
            return "var(--purple-100, #EDEBFE)";
          case "عالي":
            return "var(--red-100, #FDE8E8)";
        }
      };
    
      const getTextColor = (complexity) => {
        switch (complexity) {
          case "Low":
            return "#018B00"; // Light green for low complexity
          case "Medium":
            return "var(--purple-800, #5521B5)"; // Yellow for medium complexity
          case "High":
            return "var(--red-800, #9B1C1C)"; // Light red for high complexity
          case "قليل":
            return "#018B00";
          case "واسطة":
            return "var(--purple-800, #5521B5)";
          case "عالي":
            return "var(--red-800, #9B1C1C)";
        }
      };

      const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "#FDE8E7"
            case "Done": 
                return "#E3FEF0"
        }
      }
      const getStatusText = (status) => {
        switch (status) {
            case "Pending":
                return "#F15642"
            case "Done":
                return "#4B514B"
        }
      }

      const sendToParent = ( data ) => {
        console.log(data)
      }

      const [checkedT, setCheckedT] = useState(true);
      const [checkedD, setCheckedD] = useState(true);
      const [checkedS, setCheckedS] = useState(true);
      const [checkedE, setCheckedE] = useState(true);
      const [checkedA, setCheckedA] = useState(true);
      const [checkedSt, setCheckedSt] = useState(true);
      const [checkedP, setCheckedP] = useState(true);


  return (
    <div className='border-t border-gray-300 flex flex-col'>
        <div className="flex flex-row justify-between">
            <div className='flex flex-row flex-wrap items-center ml-8 mt-4 gap-5'>
                <p>{t('filter')}</p>
                <input type="date" className='border px-2 py-2 rounded-lg' value="05-10-2023" />
                <Button
                type="whiteButton"
                >
                {t('hide')} <IoMdEyeOff className='ml-2'/>
                </Button>

            <Button
                onClick={() => openModal()}
                type="whiteButton"
            >
                {t('customize')} <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="30" height="18" viewBox="0 0 30 18" fill="none">
                                <rect width="14" height="8" rx="4" fill="#F06A6A"/>
                                <rect y="10" width="14" height="8" rx="4" fill="#5DA283"/>
                                <rect x="16" width="14" height="8" rx="4" fill="#F1BD6C"/>
                                <rect x="16" y="10" width="14" height="8" rx="4" fill="#4573D2"/>
                                </svg>
            </Button>
            <Button type="regular">
            {t('print')} <IoPrintOutline size={20} className='ml-2' />
                </Button>
                <Button type="whiteButton">
                {t('report')} <svg xmlns="http://www.w3.org/2000/svg" className='ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <g clip-path="url(#clip0_577_1135)">
                              <path d="M18.5815 4.95418C18.5432 4.95017 18.5045 4.95376 18.4676 4.96473C18.4307 4.9757 18.3964 4.99384 18.3665 5.01811C18.3367 5.04239 18.3119 5.07231 18.2936 5.10618C18.2753 5.14004 18.2639 5.17718 18.26 5.21547C18.2042 5.75582 18.0145 6.25184 17.725 6.67316V3.11965C17.9613 3.46185 18.1266 3.84789 18.2114 4.255C18.2443 4.4134 18.3995 4.51527 18.5578 4.48219C18.5955 4.47436 18.6312 4.4592 18.663 4.43755C18.6949 4.4159 18.7221 4.3882 18.7432 4.35603C18.7643 4.32386 18.7788 4.28784 18.786 4.25005C18.7932 4.21225 18.7928 4.17341 18.785 4.13574C18.4239 2.39855 16.8582 1.1377 15.0621 1.1377C12.9666 1.1377 11.2617 2.82191 11.2617 4.89207C11.2617 6.96227 12.9666 8.64648 15.0621 8.64648C16.0073 8.64648 16.9139 8.30016 17.6148 7.67129C18.3118 7.04602 18.7479 6.1952 18.8428 5.27559C18.8468 5.23732 18.8432 5.19864 18.8322 5.16178C18.8212 5.12491 18.803 5.09056 18.7788 5.06071C18.7545 5.03086 18.7246 5.00609 18.6907 4.98781C18.6569 4.96953 18.6198 4.9581 18.5815 4.95418ZM17.1391 2.51133V7.31512C16.5777 7.78223 15.8519 8.06051 15.0621 8.06051C13.2897 8.06051 11.8477 6.6391 11.8477 4.89203C11.8477 3.14496 13.2897 1.72359 15.0621 1.72359C15.8443 1.72359 16.5745 2.00543 17.1408 2.47898C17.1396 2.48957 17.1391 2.50039 17.1391 2.51133Z" fill="#018B00"/>
                              <path d="M13.0816 4.89195C13.0816 4.36941 13.287 3.87867 13.6598 3.51004C13.7143 3.45524 13.7449 3.38116 13.745 3.30391C13.745 3.22667 13.7146 3.15252 13.6603 3.09759C13.606 3.04267 13.5322 3.01141 13.455 3.01062C13.3777 3.00984 13.3033 3.03959 13.2479 3.0934C12.7629 3.57289 12.4957 4.21164 12.4957 4.89191C12.4957 5.57223 12.7628 6.21102 13.2479 6.69055C13.3027 6.74485 13.3767 6.77528 13.4539 6.7752C13.4926 6.77525 13.531 6.76759 13.5668 6.75265C13.6025 6.73771 13.635 6.71581 13.6622 6.6882C13.7168 6.63295 13.7473 6.55826 13.7468 6.48057C13.7464 6.40287 13.7151 6.32854 13.6598 6.27391C13.287 5.90523 13.0816 5.41445 13.0816 4.89195ZM3.79199 16.5978C3.79199 16.6755 3.82286 16.75 3.8778 16.8049C3.93274 16.8599 4.00726 16.8907 4.08496 16.8907H12.8062C12.968 16.8907 13.0992 16.7596 13.0992 16.5978C13.0992 16.4359 12.968 16.3048 12.8062 16.3048H11.5825V14.8914C11.5825 14.6254 11.366 14.4089 11.0999 14.4089H10.3415C10.0754 14.4089 9.85894 14.6254 9.85894 14.8914V16.3048H9.30734V12.6164C9.30734 12.3503 9.09086 12.1338 8.82476 12.1338H8.06641C7.80031 12.1338 7.58383 12.3503 7.58383 12.6164V16.3048H7.03223V14.1331C7.03223 13.867 6.81574 13.6505 6.54965 13.6505H5.79129C5.5252 13.6505 5.30871 13.867 5.30871 14.1331V16.3048H4.37793V12.4268C4.37793 12.3491 4.34706 12.2746 4.29212 12.2196C4.23718 12.1647 4.16266 12.1338 4.08496 12.1338C4.00726 12.1338 3.93274 12.1647 3.8778 12.2196C3.82286 12.2746 3.79199 12.3491 3.79199 12.4268V16.5978ZM10.4448 14.9948H10.9964V16.3048H10.4448V14.9948ZM8.16977 12.7198H8.72137V16.3048H8.16977V12.7198ZM5.89465 14.2365H6.44625V16.3048H5.89465V14.2365ZM4.08496 9.68633H10.5311C10.6929 9.68633 10.824 9.55519 10.824 9.39336C10.824 9.23152 10.6929 9.10039 10.5311 9.10039H4.08496C4.00726 9.10039 3.93274 9.13126 3.8778 9.1862C3.82286 9.24114 3.79199 9.31566 3.79199 9.39336C3.79199 9.47106 3.82286 9.54558 3.8778 9.60052C3.93274 9.65546 4.00726 9.68633 4.08496 9.68633ZM4.08496 6.27367H5.60168C5.76348 6.27367 5.89465 6.14254 5.89465 5.9807C5.89465 5.81887 5.76348 5.68773 5.60168 5.68773H4.08496C3.92316 5.68773 3.79199 5.81887 3.79199 5.9807C3.79199 6.14254 3.92316 6.27367 4.08496 6.27367ZM4.08496 8.54879H9.39348C9.55527 8.54879 9.68645 8.41766 9.68645 8.25582C9.68645 8.09399 9.55527 7.96285 9.39348 7.96285H4.08496C3.92316 7.96285 3.79199 8.09399 3.79199 8.25582C3.79199 8.41766 3.92316 8.54879 4.08496 8.54879ZM4.08496 3.24023H8.63512C8.79691 3.24023 8.92809 3.1091 8.92809 2.94727C8.92809 2.78543 8.79691 2.6543 8.63512 2.6543H4.08496C3.92316 2.6543 3.79199 2.78543 3.79199 2.94727C3.79199 3.1091 3.92316 3.24023 4.08496 3.24023Z" fill="#018B00"/>
                              <path d="M20 4.89191C20 2.19453 17.7848 0 15.0621 0C14.0887 0 13.1801 0.280547 12.4145 0.764141C12.3953 0.760285 12.3758 0.758348 12.3562 0.758359H1.43051C0.641719 0.758359 0 1.40008 0 2.18887V5.2223C0 5.3 0.0308663 5.37452 0.0858086 5.42947C0.140751 5.48441 0.215269 5.51527 0.292969 5.51527H2.27508V17.7353C2.27508 18.1059 2.5766 18.4075 2.94723 18.4075H12.8113C12.9731 18.4075 13.1043 18.2763 13.1043 18.1145C13.1043 17.9527 12.9731 17.8215 12.8113 17.8215H2.94723C2.92437 17.8215 2.90246 17.8124 2.8863 17.7962C2.87014 17.7801 2.86105 17.7582 2.86102 17.7353V2.18891C2.86102 1.87328 2.75824 1.58117 2.58445 1.34434H11.6655C10.7166 2.23637 10.1241 3.4968 10.1241 4.89195C10.1241 7.29828 11.8868 9.30441 14.2004 9.70934L14.2002 12.5521C13.8557 12.6614 13.6057 12.9821 13.6057 13.3597V13.4004C13.6057 13.6491 13.7141 13.8732 13.8866 14.0286C13.7051 14.7757 13.6057 15.7131 13.6057 16.6875C13.6057 17.5001 13.6743 18.2876 13.8041 18.9648C13.919 19.5646 14.4481 20 15.0621 20C15.6761 20 16.2051 19.5646 16.3201 18.9648C16.3553 18.7799 16.3852 18.594 16.4099 18.4074H17.0528C17.4234 18.4074 17.7249 18.1059 17.7249 17.7353V9.96195C17.7249 9.80012 17.5938 9.66898 17.432 9.66898C17.2701 9.66898 17.139 9.80012 17.139 9.96195V17.7353C17.139 17.7582 17.1299 17.7801 17.1137 17.7962C17.0975 17.8124 17.0756 17.8215 17.0528 17.8215H16.4727C16.503 17.4553 16.5185 17.0743 16.5185 16.6875C16.5185 15.7134 16.4191 14.7759 16.2376 14.0288C16.41 13.8737 16.5185 13.6496 16.5185 13.4009V13.3603C16.5185 12.9824 16.2682 12.6615 15.9236 12.5522L15.9238 9.70934C18.2373 9.30438 20 7.29828 20 4.89191ZM2.27508 4.92934H0.585938V2.18887C0.585938 1.72316 0.964805 1.3443 1.43051 1.3443C1.89621 1.3443 2.27508 1.72316 2.27508 2.18887V4.92934ZM15.7446 18.8545C15.6825 19.1787 15.3955 19.4141 15.0621 19.4141C14.7288 19.4141 14.4417 19.1787 14.3796 18.8545C14.2566 18.213 14.1916 17.4637 14.1916 16.6875C14.1916 15.7935 14.2781 14.9371 14.4368 14.2481C14.4445 14.2483 14.4523 14.2484 14.4601 14.2484H15.6646C15.6722 14.2484 15.6798 14.2483 15.6874 14.2481C15.846 14.9371 15.9325 15.7936 15.9325 16.6875C15.9325 17.4637 15.8675 18.213 15.7446 18.8545ZM15.9325 13.3603V13.4009C15.9325 13.5452 15.8124 13.6625 15.6646 13.6625H14.4601C14.312 13.6625 14.1916 13.5449 14.1916 13.4004V13.3597C14.1916 13.2155 14.3118 13.0981 14.4595 13.0981H15.6641C15.8121 13.0981 15.9325 13.2157 15.9325 13.3603ZM14.7861 12.5122L14.7863 9.77637C14.9689 9.78644 15.1552 9.78644 15.3379 9.77637L15.3377 12.5122H14.7861ZM15.0621 9.19793C12.6624 9.19793 10.7101 7.26625 10.7101 4.89191C10.7101 2.51758 12.6624 0.585938 15.0621 0.585938C17.4618 0.585938 19.4141 2.51758 19.4141 4.89191C19.4141 7.26629 17.4618 9.19793 15.0621 9.19793Z" fill="#018B00"/>
                              <path d="M4.08496 4.37793H7.1184C7.2802 4.37793 7.41137 4.2468 7.41137 4.08496C7.41137 3.92312 7.2802 3.79199 7.1184 3.79199H4.08496C3.92316 3.79199 3.79199 3.92312 3.79199 4.08496C3.79199 4.2468 3.92316 4.37793 4.08496 4.37793ZM4.08496 10.824H9.39348C9.55527 10.824 9.68645 10.6929 9.68645 10.5311C9.68645 10.3692 9.55527 10.2381 9.39348 10.2381H4.08496C3.92316 10.2381 3.79199 10.3692 3.79199 10.5311C3.79199 10.6929 3.92316 10.824 4.08496 10.824Z" fill="#018B00"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_577_1135">
                              <rect width="20" height="20" fill="white"/>
                              </clipPath>
                              </defs>
                              </svg>
                </Button>
            </div>
            
        </div>
        <div className="flex flex-row justify-between">
          <div className='ml-8 items-center flex'>
            <span> {t('show')} </span>
            <input className='bg-white px-2 py-1 rounded-md text-primary active:border-none outline-none border ml-2' placeholder='12' value={entries} type="number" min="1" max="100" step="4" inputMode="numeric" onChange={handleEntries} /> <span className='pl-4'> {t("entries")} </span>
          </div>
          <div className='border bg-white flex items-center text-primary mr-8 rounded-xl p-2'>
            <IoMdSearch size={24} />
            <input type="text" placeholder='Search' className='outline-none ml-4 placeholder:text-primary placeholder:font-thin' />
          </div>
        </div>
        <div className=' !overflow-x-auto'>
        <div className="md:w-[95%] w-[1000px] mx-auto bg-white table table-fixed mt-4 rounded-2xl">
            <div className="w-full text-xs flex flex-row borderColor justify-between headings">
                <div className="w-[10%] items-center flex justify-center px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('projectName')}</th>
                </div>
                 {checkedT && <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">
                    {t('taskName')}
                    </th>
                </div>}
               {checkedD && <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('dept')}</th>
                </div>}
                {checkedA && <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('assignee')}</th>
                </div>}
                {checkedSt && <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('startDate')}</th>
                </div>}
                {checkedD && <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('dueDate')}</th>
                </div>}
                {checkedS&& <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('status')}</th>
                </div>}
                {checkedP && <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('priority'
                    )}</th>
                </div>}
                 <div className="w-[10%] items-center flex justify-end px-2 py-2">
                    <th className="text-xs font-semibold text-[#6B7280]">{t('action')}</th>
                </div>
            </div>


            {currentData.map((item) => (
              <div
                className="w-[100%] data flex flex-row justify-between datatext font-normal text-xs"

              >
                <div className="w-[10%] items-center flex justify-center px-2 py-2 font-normal text-xs">
                  <td>{item.projectName}</td>
                </div>
                {checkedT&& <div className="w-[10%] items-center flex justify-end px-2 py-2 font-normal text-xs">
                  <td>{item.taskName}</td>
                </div>}
                {checkedD&& <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor font-normal text-xs">
                  <td>{item.dept}</td>
                </div>}
                {checkedA&& <div className="w-[10%] items-center flex justify-end px-2 py-2 textcolor font-normal text-xs">
                  <td>{item.assignee}</td>
                </div>}
                {checkedSt&& <div className="w-[10%] items-center flex justify-end px-2 py-2">
                  <td
                    className="py-1 px-2 rounded-md text-primary font-normal text-xs"
                    
                  >
                    {item.start}
                  </td>
                </div>}
                {checkedD&& <div
                  className="w-[10%] items-center flex text-primary justify-end px-2 py-2 cursor-pointer font-normal text-xs"
                 
                >
                  <td>{item.due}</td>
                </div>}
                {checkedS&& <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                  <td className="py-1 px-2 rounded-md font-normal text-xs"
                    style={{
                      background: getStatusColor(item.status),
                      color: getStatusText(item.status),
                    }}>{item.status}</td>
                </div>}
                
                {checkedP&& <div className="w-[10%] items-center flex justify-end px-2 py-2 text-black font-semibold">
                  <td className="py-1 px-2 rounded-md font-normal text-xs"
                    style={{
                      background: getComplexityColor(item.priority),
                      color: getTextColor(item.priority),
                    }}>{item.priority}</td>
                </div>}
                <div className="w-[10%] items-center flex justify-end px-2 py-2 font-normal text-xs">
                  <button className='text-primary text-xl' onClick={() => openactionModal()}>{item.action}</button>
                </div>
                
              </div>
            ))}
        </div>

        </div>
        <div className="flex justify-end w-full my-4 px-10">
          <CustomPagination
            count={count}
            variant="outlined"
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
          

          
        </div>
        {modalOpen && <HideContentOverlay checkedA={checkedA} checkedD={checkedD} checkedE={checkedE} checkedP={checkedP} checkedS={checkedS} checkedSt={checkedSt} checkedT={checkedT} setCheckedA={setCheckedA} setCheckedD={setCheckedD} setCheckedE={setCheckedE} setCheckedP={setCheckedP} setCheckedS={setCheckedS} setCheckedSt={setCheckedSt} setCheckedT={setCheckedT} closeModal={closeModal} />}
        {actionModal && <ActionOverlay closeactionModal={closeactionModal} />}
    </div>
  )
}

export default TaskList