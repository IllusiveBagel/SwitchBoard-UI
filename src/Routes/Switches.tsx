import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import {
    fetchData,
    selectSwitches,
    selectLoading,
} from "../Features/Switches/switchesSlice";
import GridItem from "../Components/GridItem";

const Switches = () => {
    const dispatch = useAppDispatch();
    const switches = useAppSelector(selectSwitches);
    const isLoading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    if (isLoading) return <h1>Loading</h1>;
    return (
        <>
            <div className="">
                {switches?.map((item) => (
                    <GridItem key={item.id} name={item.name} />
                ))}
            </div>
        </>
    );
};

export default Switches;
