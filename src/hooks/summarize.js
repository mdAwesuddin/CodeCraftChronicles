export async function summarizeArticle(content) {
  try {
    const res = await fetch(
      "https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-text/",
      {
        method: "POST",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY, // 🔑 keep in .env
          "x-rapidapi-host": "tldrthis.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: content,
          num_sentences: 5, // you can make this dynamic
        }),
      }
    );

    const data = await res.json();
    console.log("Summarizer response:", data);

    // ✅ Handle API errors
    if (!res.ok) {
      throw new Error(data.message || "Failed to summarize");
    }

    // TLDRThis returns structure like:
    // { summary: ["point 1", "point 2", ...] }
    const bullets = data.summary || [];

    return bullets.join("\n");
  } catch (error) {
    console.error("Summarize error:", error);
    return `⚠️ Failed to generate summary: ${error.message}`;
  }
}
