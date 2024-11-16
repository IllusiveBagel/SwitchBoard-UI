import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="wlvw h-16 bg-slate-800"></div>
            <div className="w-80 h-[calc(100vh-4rem)] bg-slate-700">
                <ul>
                    <li>
                        <Link className="" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="/switches">
                            Switches
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;
