import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import {
    fetchData,
    selectSwitches,
    selectLoading,
} from "../Features/Switches/switchesSlice";

const Switches = () => {
    const dispatch = useAppDispatch();
    const switches = useAppSelector(selectSwitches);
    const isLoading = useAppSelector(selectLoading);

    useEffect(() => {
        console.log("I AM HERE");
        dispatch(fetchData());
    }, []);

    if (isLoading) return <>Loading</>;
    return (
        <>
            <h1>SwitchBoard</h1>
            <ul>
                {switches?.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Switches;
