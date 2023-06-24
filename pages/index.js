import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Adidas")
        .select("*")
        .ilike("name", "Super")
        .eq("color", "blue");
      console.log(data);
      setData(data);
    };
    fetchData().catch((e) => {
      console.error(e);
    });
  }, []);
  return (
    <>
      {data.map((item) => (
        <div key={item.index}>{JSON.stringify(item)}</div>
      ))}
    </>
  );
}

