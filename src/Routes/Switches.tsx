import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import {
    fetchData,
    selectSwitches,
    selectLoading,
} from "../Features/Switches/switchesSlice";
import GridItem from "../Components/GridItem";
import {
    TableCellsIcon,
    Squares2X2Icon,
    FunnelIcon,
} from "@heroicons/react/24/outline";
import SwitchTable from "../Components/SwitchTable";

const Switches = () => {
    const [isTable, setIsTable] = useState(false);

    const dispatch = useAppDispatch();
    const switches = useAppSelector(selectSwitches);
    const isLoading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    if (isLoading)
        return (
            <div className="h-full w-full flex justify-center items-center">
                <h1 className="text-4xl">Loading...</h1>
            </div>
        );
    return (
        <>
            <div className="flex w-[calc(100vw-15rem)] h-16 items-center justify-end px-4 bg-transparent gap-3 fixed top-16 right-0">
                {!isTable ? (
                    <TableCellsIcon
                        className="size-10"
                        onClick={() => setIsTable(true)}
                    />
                ) : (
                    <Squares2X2Icon
                        className="size-10"
                        onClick={() => setIsTable(false)}
                    />
                )}
                <FunnelIcon className="size-10" />
            </div>
            {!isTable && (
                <div className="grid grid-cols-10 gap-4 m-5 mt-16">
                    {switches?.map((item) => (
                        <GridItem key={item.id} name={item.name} />
                    ))}
                </div>
            )}
            {isTable && (
                <div className="w-[calc(100%-2.5rem)] m-5 mt-16 h-[calc(100%-5.25rem)]">
                    <SwitchTable switches={switches} />
                </div>
            )}
        </>
    );
};

export default Switches;
