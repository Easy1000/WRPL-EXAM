import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  const { data, error } = await supabase.from("Adidas").select("*");
  // .ilike("name", "Super")
  // .eq("color", "blue");

  console.log(data);
  console.error(error);
  res.status(200).json({ message: "success", data: data });
}
