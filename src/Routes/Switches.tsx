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
            <div className="flex w-full h-12 items-center justify-end px-4 bg-transparent mt-5 gap-3 fixed top-12 left-0">
                {!isTable && (
                    <TableCellsIcon
                        className="size-10"
                        onClick={() => setIsTable(true)}
                    />
                )}
                {isTable && (
                    <Squares2X2Icon
                        className="size-10"
                        onClick={() => setIsTable(false)}
                    />
                )}
                <FunnelIcon className="size-10" />
            </div>
            {!isTable && (
                <div className="grid grid-cols-8 gap-4 m-5 mt-[3.75rem]">
                    {switches?.map((item) => (
                        <GridItem key={item.id} name={item.name} />
                    ))}
                </div>
            )}
            {isTable && (
                <table className="table-auto border-collapse border border-slate-500 m-5 mt-[3.75rem]">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">Name</th>
                            <th className="border border-slate-600">
                                Manufacturer
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {switches?.map((item) => (
                            <tr>
                                <td className="border border-slate-700">
                                    {item.name}
                                </td>
                                <td className="border border-slate-700">
                                    {item.manufacturer}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Switches;
