import { useLoaderData, useNavigate } from "react-router-dom"
import DashServices from "../../services/DashService";
import { ErrorResponse, Statistics, StatisticsResponse } from "../../types/response.types";
import { handleError } from "../../utils/authActions";
import CountCard from "../../components/card/CountCard";
import { PiUsersThree } from "react-icons/pi";
import { BsJournalMedical } from "react-icons/bs";
import { PieChart } from "../../components/chart/PieChart";
import { DoughnutChart } from "../../components/chart/Doughnut";
import { LineChart } from "../../components/chart/Line";
import { useMemo } from "react";

const Main = () => {
  const navigate = useNavigate();
  const { stats } = useLoaderData() as { stats: Statistics };

  const handleUpdateQuery = (days: number) => {
    navigate(`/?days=${days}`)
  }

  interface LineChartData {
    currentMonth: number[];
    prevMonth: number[];
  }

  const lineChartData = useMemo<LineChartData>(() => {
    return {
      currentMonth: [5, 10, 2],
      prevMonth: [stats.upperBodyCountPrevMonth, stats.torsoCountPrevMonth, stats.lowerBodyCountPrevMonth],
    };
  }, [stats]);

  const queryParams = new URLSearchParams(window.location.search);
  let days = +queryParams.get('days')! || 7;
  return (
    <div className="p-10 max-sm:p-5 space-y-4">
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        <CountCard title="Total Users" color="#404040" count={stats.usersCount} Icon={PiUsersThree} />
        <CountCard title="Upper Body Journals" color="#8EDD11" count={stats.upperBodyCount} Icon={BsJournalMedical} />
        <CountCard title="Torso Body Journals" color="#3787FF" count={stats.torsoCount} Icon={BsJournalMedical} />
        <CountCard title="Lower Body Journals" color="#E81515" count={stats.lowerBodyCount} Icon={BsJournalMedical} />
      </section>

      <section className="grid lg:grid-cols-3 md:grid-cols-1 gap-3">
        <div className="p-5 border rounded-md shadow-lg lg:col-span-2 md:col-span-1 flex items-center justify-around flex-col gap-2">
          <div className="w-full flex items-start justify-between max-md:flex-col">
            <div className="">
              <h1 className="text-3xl font-medium">User's Journals</h1>
            </div>

            {/* Filter by days */}
            <div className="flex items-center justify-end mb-5 w-max border rounded-md overflow-hidden divide-x">
              <button
                className={`${days === 7 ? "bg-primaryGreen" : "hover:bg-gray-100"} text-sm font-medium py-2 px-5`}
                onClick={() => handleUpdateQuery(7)}>
                7
              </button>
              <button
                className={`${days === 15 ? "bg-primaryGreen" : "hover:bg-gray-100"} text-sm font-medium py-2 px-5`}
                onClick={() => handleUpdateQuery(15)}>1
                5
              </button>
              <button
                className={`${days === 30 ? "bg-primaryGreen" : "hover:bg-gray-100"} text-sm font-medium py-2 px-5`}
                onClick={() => handleUpdateQuery(30)}>3
                0
              </button>
            </div>
          </div>

          <LineChart {...lineChartData} />
          <h6 className='text-md text-gray-600'>Previous Month Journals vs Current Month Journals</h6>
        </div>

        <div className="col-span-1 space-y-3">
          <div className="p-5 border rounded-md shadow-lg flex items-center flex-col gap-2">
            <DoughnutChart female={stats?.femaleCount} male={stats?.maleCount} />
            <h6 className='text-md text-gray-600'>Male Users vs Female Users</h6>
          </div>
          <div className="p-5 border rounded-md shadow-lg flex items-center flex-col gap-2">
            <PieChart upper={stats.upperBodyCount} torso={stats.torsoCount} lower={stats.lowerBodyCount} />
            <h6 className='text-md text-gray-600'>Journals: Upper vs Torso vs Lower</h6>
          </div>
        </div>
      </section>

      {/* Spacer only visible in mobile screens */}
      <div className="h-32 sm:hidden" />
    </div>
  )
}

export const DashboardLoader = async () => {
  try {
    const queryParams = new URLSearchParams(window.location.search);
    let days = +queryParams.get('days')!;

    if (![7, 15, 30].includes(days)) days = 7;

    const response = (await DashServices.fetchStats(days)) as StatisticsResponse;

    if (response.data.success) {
      return { success: true, stats: response.data.result };
    }
  } catch (err) {
    const error = err as ErrorResponse;
    const errorRes = handleError(error);
    return { success: false, error: errorRes };
  }
}

export default Main