import { Outlet, useNavigation } from "react-router-dom";
// import useDashboard from "../hooks/useDashboard";
import Sidebar from "../components/appbar/Sidebar";
import Topbar from "../components/appbar/Topbar";
import Bottombar from "../components/appbar/Bottombar";
import Loader from "../components/others/Loader";

const Dashboard = () => {
  const { state } = useNavigation();
  const isLoading = state === 'loading'
  return (
    <main className="h-screen overflow-hidden flex">
      <Sidebar />
      <aside className="w-full overflow-y-auto">
        <Topbar />
        {isLoading ? <Loader isLoading={isLoading} /> : <Outlet />}
      </aside>
      <Bottombar />
    </main>
  );
};

export default Dashboard;