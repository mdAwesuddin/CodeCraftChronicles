import supabase from "./supabase";

// const user_id = process.env.REACT_APP_USER_ID;

export async function getcomments(id) {
  console.log("User ID:", id);
  
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("blog_id", id);

  if (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Unable to load blogs");
  }

  console.log("Fetched Data:", data);
  return data;
}
