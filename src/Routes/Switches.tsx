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
                <div className="w-[calc(100%-2.5rem)] m-5 mt-16">
                    <table className="border-collapse border border-slate-500 w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 bg-slate-700">
                                    Name
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Manufacturer
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Actuation
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Bottom-Out
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Pre-Travel
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Total-Travel
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Type
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Spring
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Volume
                                </th>
                                <th className="border border-slate-600 bg-slate-700">
                                    Factory Lubed
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-right">
                            {switches?.map((item) => (
                                <tr>
                                    <td className="border border-slate-700 bg-slate-800 text-left">
                                        {item.name}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.manufacturer}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.actuation}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.bottomOut}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.preTravel}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.totalTravel}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.type}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.spring}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.volume}
                                    </td>
                                    <td className="border border-slate-700 bg-slate-800">
                                        {item.factoryLubed}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Switches;
