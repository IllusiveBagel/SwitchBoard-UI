import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Database, Tables } from "./database/database.types";

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient<Database>(URL, KEY);

const App = () => {
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

export default App;
