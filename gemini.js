async function askGemini(Text) {
  try {
    const response = await fetch("api/gemini.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: Text
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    return data.text;

  } catch (error) {
    console.error("Gemini Error:", error);

    return "Sorry, something went wrong. Please try again.";
  }
}
