import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Knowledge base tentang Raka Nugraha
const rakaKnowledge = `
Kamu adalah AI Assistant untuk portfolio Raka Nugraha. Berikut informasi tentang Raka:

## Profil
- Nama: Raka Nugraha
- Profesi: Fullstack JavaScript Developer
- Lokasi: Indonesia
- Pengalaman: 2+ tahun di bidang web development

## Keahlian Teknis
- Pemrograming Language: JavaScript, TypeScript
- Frontend: React.js, Next.js, Vite, Electron, Shadcn UI
- Backend: Node.js, Express.js, Electron
- Database: MySQL, SQLite, MongoDB
- Tools: DBeaver, Postman, Swagger, Git, Docker, GitHub, Supabase, Figma, 
- AI Tools : Groq, OpenAI, Antigravity, Claude, Gemini, Claude, Winsurf, dan Cursor
- Styling: Tailwind CSS

## Pengalaman Kerja
### Sebelum menjadi Fullstack Developer
- IT Support Staff at PT American Hamburger (2017-2020)
- Store Leader at PT Surganya Motor Indonesia (2014-2016)

### Setelah menjadi Fullstack Developer
- Manual QA at PT Karya Kaya Bahagia (2025-present)
- Freelance Fullstack Developer (2022-present) 

### Bootcamps and Internships:
- Completed a 5-month bootcamp at Harisenin.com, deepening knowledge of HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL.
- Received a JavaScript Expert scholarship from Devhandal.id, with access to advanced JavaScript materials on Codepolitan.com.
- Participated in a project-based internship program at Rakamin Academy in collaboration with BTPN Syariah, developing a CRUD API using Golang.
- Completed a Virtual Project-Based Internship at CMLABS, working as a Full-Stack Developer to develop the Smartliving E-Commerce platform.

## Project mandiri yang Dikerjakan
1. Fullstack Flixflix Movie dengan Reactjs Vite dan Tailwind CSS, nodejs, expressjs dan API external
2. Project-Based Internship: Fullstack Developer BTPN Syariah x Rakamin Academy
3. Task Management App
4. Portfolio Raka Nugraha Integrated dengan AI Chatbot
5. Team Project: 
- Fullstack Clone Xiaomi Website dengan Reactjs dengan Vite dan Tailwind CSS, nodejs, expressjs
- Fullstack E-Commerce Smartliving dengan Reactjs Vite dan Tailwind CSS, nodejs, expressjs

## Project Freelance yang Dikerjakan (Paid Project)
1. Sewing Sparepart POS dengan Reactjs, Electron dan SQLite 

## About Raka
Raka adalah seorang developer yang passionate dengan teknologi web modern. Selalu berusaha belajar hal baru dan mengikuti perkembangan teknologi terkini. Suka berbagi knowledge dan berkolaborasi dalam tim.

Jawab pertanyaan dengan ramah, informatif, dan dalam bahasa yang sama dengan pertanyaan user (Indonesia atau Inggris).
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
