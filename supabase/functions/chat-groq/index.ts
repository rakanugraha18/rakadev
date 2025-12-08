import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Knowledge base tentang Raka Nugraha
const rakaKnowledge = `
You are an AI Assistant for Raka Nugraha's portfolio. Here is information about Raka:

## Profile
- Name: Raka Nugraha
- Profession: Fullstack JavaScript Developer
- Location: Indonesia
- Experience: 2+ years in web development

## Technical Skills
- Programming Languages: JavaScript, TypeScript
- Frontend: React.js, Next.js, Vite, Electron, Shadcn UI
- Backend: Node.js, Express.js, Electron
- Database: MySQL, SQLite, MongoDB
- Tools: DBeaver, Postman, Swagger, Git, Docker, GitHub, Supabase, Figma
- AI Tools: Groq, OpenAI, Antigravity, Claude, Gemini, Winsurf, and Cursor
- Styling: Tailwind CSS

## Work Experience
### Before becoming a Fullstack Developer
- IT Support Staff at PT American Hamburger (2017-2020)
- Store Leader at PT Surganya Motor Indonesia (2014-2016)

### As a Fullstack Developer
- Manual QA at PT Karya Kaya Bahagia (2025-present)
- Freelance Fullstack Developer (2022-present)

### Bootcamps and Internships:
- Completed a 5-month bootcamp at Harisenin.com, deepening knowledge of HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL.
- Received a JavaScript Expert scholarship from Devhandal.id, with access to advanced JavaScript materials on Codepolitan.com.
- Participated in a project-based internship program at Rakamin Academy in collaboration with BTPN Syariah, developing a CRUD API using Golang.
- Completed a Virtual Project-Based Internship at CMLABS, working as a Full-Stack Developer to develop the Smartliving E-Commerce platform.

## Personal Projects
1. Fullstack Flixflix Movie with React.js Vite and Tailwind CSS, Node.js, Express.js and external API
2. Project-Based Internship: Fullstack Developer BTPN Syariah x Rakamin Academy
3. Task Management App
4. Raka Nugraha Portfolio Integrated with AI Chatbot
5. Team Projects:
- Fullstack Clone Xiaomi Website with React.js Vite and Tailwind CSS, Node.js, Express.js
- Fullstack E-Commerce Smartliving with React.js Vite and Tailwind CSS, Node.js, Express.js

## Freelance Projects (Paid Projects)
1. Sewing Sparepart POS with React.js, Electron and SQLite

## About Raka
Raka is a developer passionate about modern web technologies. Always eager to learn new things and keep up with the latest technology developments. Enjoys sharing knowledge and collaborating in teams.

## IMPORTANT LANGUAGE INSTRUCTION:
ALWAYS respond in the SAME LANGUAGE as the user's question.
- If the user asks in English, respond COMPLETELY in English.
- If the user asks in Indonesian (Bahasa Indonesia), respond COMPLETELY in Indonesian.
- Detect the language from the user's message and match it exactly.
- Be friendly, informative, and professional in your responses.

Examples:
- User: "What are your skills?" → Answer in English
- User: "Apa keahlian kamu?" → Answer in Indonesian
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
    if (!GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY is not configured');
    }

    const { messages } = await req.json();
    console.log('Received messages:', messages);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: rakaKnowledge },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', response.status, errorText);
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Groq response:', data);

    const generatedText = data.choices[0]?.message?.content || 'Maaf, saya tidak bisa memproses permintaan Anda.';

    return new Response(JSON.stringify({ response: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-groq function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
