import { generatePrompt } from "@/lib/openrouter";

export async function POST(req) {
  try {
    const { input, mode } = await req.json();

    const result = await generatePrompt(input, mode);

    return Response.json({ result });

  } catch (error) {
    return Response.json({ error: "Error generating prompt" }, { status: 500 });
  }
}