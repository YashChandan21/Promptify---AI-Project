export async function generatePrompt(input, mode) {
  const masterPrompt = `
You are a world-class prompt engineer.

Transform the user input into a highly optimized AI prompt.

Structure:

[ROLE]
[CONTEXT]
[TASK]
[OUTPUT FORMAT]
[CONSTRAINTS]

User Input: ${input}
Mode: ${mode}

Return:
1. Optimized Prompt
2. Explanation
`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "user",
          content: masterPrompt
        }
      ],
      reasoning: { enabled: true }
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content;
}