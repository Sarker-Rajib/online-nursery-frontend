import { Outlet } from "react-router";
import Header from "../components/Header/Header";


const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="p-2">
                <p className="my-2 underline text-3xl text-center">Product Dashboard</p>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;