import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { Tables } from "../Database/database.types";

const Switches = () => {
  const [switches, setSwitches] = useState<Tables<"Switches">[] | null>([]);

  useEffect(() => {
    getSwitches();
  }, []);

  async function getSwitches() {
    const { data } = await supabase
      .from("Switches")
      .select()
      .returns<Tables<"Switches">[]>();
    setSwitches(data);
  }
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
