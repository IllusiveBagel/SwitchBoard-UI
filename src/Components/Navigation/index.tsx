import { Link } from "react-router-dom";
import {
    HomeIcon,
    Squares2X2Icon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";

const Navigation = () => {
    return (
        <>
            <div className="wlvw h-16 bg-slate-800"></div>
            <div className="w-60 h-[calc(100vh-4rem)] bg-slate-700">
                <ul className="list-none">
                    <li>
                        <Link
                            className="text-2xl w-full flex flex-row items-center gap-3 pt-5 pl-3.5"
                            to="/"
                        >
                            <HomeIcon className="size-7" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-2xl w-full flex flex-row items-center gap-3 pt-5 pl-3.5"
                            to="/switches"
                        >
                            <Squares2X2Icon className="size-7" />
                            Switches
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-2xl w-full flex flex-row items-center gap-3 pt-5 pl-3.5"
                            to="/about"
                        >
                            <InformationCircleIcon className="size-7" />
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;
