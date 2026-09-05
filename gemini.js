async function askGemini(Text) {
  try {
    const response = await fetch("https://jokes-hub-beta.vercel.app/api/gemini.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: Text
      })
    });

    
    
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }
    const data = await response.json();
    return data.text;

  } catch (error) {
    console.error("Gemini Error:", error);

    return "Sorry, something went wrong. Please try again.";
  }
}
