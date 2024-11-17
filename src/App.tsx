import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";

const App = () => {
    return (
        <>
            <Navigation />
            <div className="fixed bottom-0 right-0 h-[calc(100vh-4rem)] w-[calc(100vw-15rem)] overflow-y-auto bg-gray-900 block">
                <Outlet />
            </div>
        </>
    );
};

export default App;
