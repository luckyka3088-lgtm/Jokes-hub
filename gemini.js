/*async function askGemini(Text) {
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
*/

const API_KEY = "AQ.Ab8RN6KgZLQDA8AZAXZYPXyXt-avd-ffhLh65I17QpSlFxUoWA";

async function askGemini(Text) {
    const controller = new AbortController();
    
    const timeout = setTimeout(() => {
        controller.abort();
    }, 15000);

    
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: Text
                                }
                            ]
                        }
                    ]
                }),

                signal: controller.signal
            }
        );

        clearTimeout(timeout);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "API request failed"
            );
        }

        return data.candidates[0].content.parts[0].text;

    } catch (error) {

        clearTimeout(timeout);

        return "Error: " + error.message;
    }
}
