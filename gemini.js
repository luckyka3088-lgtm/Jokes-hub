const API_KEY = "";

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
