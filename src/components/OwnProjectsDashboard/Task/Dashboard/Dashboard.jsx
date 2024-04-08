import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
function Dashboard() {

  const navigate = useNavigate()

  const database = [
    {
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "1 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "2 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "2 years",
      cost: "$10M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },
    {
      location: "Area",
      duration: "1 years",
      cost: "$6M",
      date: "Nov 22, 2023",
      category: "Category",
      name: "Project Name",
    },

  ];


  const chartRef = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Todo", "Doing", "Done"],
          datasets: [
            {
              label: "All Projects by section",
              data: [15, 10, 3],
              borderWidth: 1,
              backgroundColor: ["red", "red", "red"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Incomplete Project", "Complete Project", "Overdue Project"],
    datasets: [
      {
        label: "My First Dataset",
        data: [15, 15, 10],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <div className="w-full  lg:px-8 md:px-5 px-3">
        <div className="py-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-col-1 md gap-3 ">
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("completedProjects")}
              </span>{" "}
              <span className="text-2xl">3</span>{" "}
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("incomplete")}
              </span>{" "}
              <span className="text-2xl">0</span>{" "}
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("totalProCost")}
              </span>{" "}
              <span className="text-2xl">3</span>{" "}
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-3xl px-4 py-8">
              {" "}
              <span className="text-primary font-bold">
                {" "}
                {t("totalCashSpend")}
              </span>{" "}
              <span className="text-2xl">0</span>{" "}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
          <div className="bg-white rounded-3xl p-4">
            {/* <canvas ref={chartRef}></canvas> */}
            <div className="w-[100%] flex flex-row borderColor justify-between items-center headings">
            {/* <div className="w-[10%] items-center flex justify-center px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("notes")}
              </th>
            </div>
            <div className="w-[10%] items-center text-right flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("samplesAndTem")}
              </th>
            </div>
            <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("contract")}{" "}
              </th>
            </div> */}
            {/* <div className="w-[10%] items-center flex justify-end px-2 py-2">
              <th className="text-xs font-semibold text-[#6B7280]">
                {t("complexity")}
              </th>
              <span
                className="info-icon"
                title="High - 110, Medium - 60, Low - 47"
              >
                <IoIosInformationCircleOutline size={20} />
              </span>
            </div> */}
            <div className="w-[15%] items-center flex  justify-between py-2">
              <th className="text-xs font-semibold mx-auto text-[#6B7280]">
                {t("location")}
              </th>
            </div>
            <div className="w-[15.6%] items-center flex  justify-between py-2">
              <th className="text-xs font-semibold mx-auto text-[#6B7280]">
                {t("duration")}
              </th>
            </div>
            <div className="w-[15.6%] items-center flex  justify-between py-2">
              <th className="text-xs font-semibold mx-auto text-[#6B7280]">
                {t("cost")}
              </th>
            </div>
            <div className="w-[15.6%] items-center flex  justify-between py-2">
              <th className="text-xs font-semibold mx-auto text-[#6B7280]">
                {t("date")}
              </th>
            </div>
            <div className="w-[15.6%] items-center flex  justify-between py-2">
              <th className="text-xs font-semibold mx-auto text-[#6B7280]">
                {t("category")}
              </th>
            </div>
            <div className="w-[15.6%] items-center flex  justify-between py-2">
              <th className="text-xs font-semibold mx-auto text-[#6B7280]">
                {t("project")}
              </th>
            </div>
          </div>
          {database.map((item) => (
            <div
              className="w-[100%] data flex text-[14px] flex-row justify-between datatext font-normal"
              key={item.id}
            >
              <div
                onClick={() => navigate('/initiatingPhase')} className="w-[15.6%] items-center flex mx-auto justify-between px-2 py-2 cursor-pointer font-normal"

              >
                <td className="mx-auto">{item.location}</td>
              </div>
              <div onClick={() => navigate('/initiatingPhase')} className="cursor-pointer w-[15.6%] items-center flex mx-auto justify-between px-2 py-2 font-normal">
                <td className="mx-auto">{item.duration}</td>
              </div>
              <div onClick={() => navigate('/initiatingPhase')} className="cursor-pointer w-[15.6%] items-center flex mx-auto justify-between px-2 py-2 text-black font-semibold">
                <td className="mx-auto">{item.cost}</td>
              </div>
              <div onClick={() => navigate('/initiatingPhase')} className="cursor-pointer w-[15.6%] items-center flex mx-auto justify-between px-2 py-2 font-normal">
                <td className="mx-auto">{item.date}</td>
              </div>
              <div onClick={() => navigate('/initiatingPhase')} className="cursor-pointer w-[15.6%] items-center flex mx-auto justify-between px-2 py-2 font-normal">
                <td className="mx-auto">{item.category}</td>
              </div>
              <div onClick={() => navigate('/initiatingPhase')} className="cursor-pointer w-[15.6%] items-center flex mx-auto justify-between px-2 py-2 text-black font-semibold">
                <td className="mx-auto">{item.name}</td>
              </div>
            </div>
          ))}
          </div>
          <div className="bg-white rounded-3xl p-4 flex justify-center items-center">
            <div
              className=" flex flex-col justify-center items-center"
              style={{ width: "561px", height: "280px" }}
            >
              <p className="text-center">Total Project By Completion Status</p>
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
