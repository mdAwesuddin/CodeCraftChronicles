import supabase from "./supabase";

const user_id = process.env.REACT_APP_USER_ID;

export async function getUser() {
  console.log("User ID:", user_id);
  
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Unable to load blogs");
  }

  console.log("Fetched Data:", data);
  return data;
}
