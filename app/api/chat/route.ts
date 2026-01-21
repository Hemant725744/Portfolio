import { NextResponse } from "next/server";

// 1. Get Key
const API_KEY = process.env.GEMINI_API_KEY;

// 2. YOUR FULL PERSONAL KNOWLEDGE BASE
const HEMANT_CONTEXT = `
You are "HB-AI", the advanced AI assistant for Hemant Bhatt's portfolio.
Your tone is: Professional, Intelligent, slightly "Cyberpunk/Tech", and Helpful.

DATA ABOUT HEMANT BHATT:
- **Identity:** Hemant Bhola Dutt Bhatt. Final Year Computer Engineering Student at Pillai HOC College of Engineering & Technology (Mumbai University). Class of 2026.
- **Role:** Passionate Full-Stack Developer & Problem Solver.
- **Location:** Navi Mumbai, India.
- **Academics:** - Current SGPI (Sem 6): 9.3.
  - Cumulative SGPI: 7.9/10. 
  - 12th Grade: 85%. 
  - 10th Grade: 89%.
- **Work Experience:** 1. **SEMS Welfare Foundation** (Current): IT Intern.
  2. **AcmeGrade**: Web Development Intern.
  3. **TG Connect**: Technical Intern.
  4. **Ganishka Enterprises**: Software Intern.
  5. **Aptech**: Project Head.
- **Tech Stack:** - **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3.
  - **Backend:** PHP, MySQL, Python (Basic).
  - **Learning:** .NET Framework, German Language (Targeting A2 Level).
- **Key Projects:** 1. **'Ransomware Attack Detection & Mitigation'**: Final Year Project using Deep Learning (LSTM models).
  2. **'Hackoverflow 4.0'**: Official website for the national level hackathon.
  3. **'EduEase'**: Smart Attendance System.
  4. **Portfolio**: This website (Next.js, Framer Motion, Tailwind).
- **Achievements:** - Published researcher ('EduEase' in Journal of Data Engineering). 
  - Winner of AlgoHackathon. 
  - Certified by NASSCOM & Microsoft.
- **Future Plans:** - Applying for **Master's in CS in Germany** (Winter 2026 intake). 
  - Taking IELTS (Jan 2026).
- **Personal Interests:** - **Football:** Die-hard fan of Lionel Messi & Argentina. Follows Japanese Football.
  - **Gaming:** Loves Open-World & Fighting games (God of War, Batman Arkham, WWE 2K, FIFA).
  - **Other:** Photography (Nature), Rain lover.

INSTRUCTIONS:
1. Answer the user's question accurately based on the data above.
2. If the user asks a technical coding question (e.g. "What is a Hook?"), answer as a senior developer.
3. Keep answers concise (max 3-4 sentences) unless asked for details.
4. If asked "Who are you?", say you are Hemant's digital neural link.
`;

export async function POST(req: Request) {
  if (!API_KEY) {
    return NextResponse.json({ reply: "Error: API Key missing." }, { status: 500 });
  }

  try {
    const { message } = await req.json();

    // STEP 1: Auto-Discover Available Models
    const modelsResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
    );
    const modelsData = await modelsResponse.json();
    
    // STEP 2: Smart Selection Strategy
    // We prioritize the specialized "Flash" model, then "Pro", then any generic Gemini model
    const preferredModels = ["models/gemini-1.5-flash", "models/gemini-pro", "models/gemini-1.0-pro"];
    let targetModel = "";

    if (modelsData.models) {
        for (const pref of preferredModels) {
            if (modelsData.models.some((m: any) => m.name === pref)) {
                targetModel = pref;
                break;
            }
        }
        // Fallback: If no preferred model found, grab the first "gemini" model available
        if (!targetModel) {
            const fallback = modelsData.models.find((m: any) => m.name.includes("gemini") && m.supportedGenerationMethods?.includes("generateContent"));
            if (fallback) targetModel = fallback.name;
        }
    }

    if (!targetModel) {
         return NextResponse.json({ reply: "System Error: No valid AI models found for this key." }, { status: 500 });
    }

    // STEP 3: Generate Content
    const chatResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/${targetModel}:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${HEMANT_CONTEXT}\n\nUSER QUESTION: ${message}` }] }],
        }),
      }
    );

    const chatData = await chatResponse.json();

    if (!chatResponse.ok) {
        console.error("Chat API Error:", chatData);
        return NextResponse.json({ reply: "I am currently offline (API Error). Please try again." }, { status: 500 });
    }

    return NextResponse.json({ 
      reply: chatData.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated."
    });

  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ reply: "Connection failed." }, { status: 500 });
  }
}