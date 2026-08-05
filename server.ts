import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API lazily
let aiInstance: GoogleGenAI | null = null;
function getAI() {
  if (!aiInstance && process.env.GEMINI_API_KEY) {
    aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiInstance;
}

// School context for the AI Assistant
const SCHOOL_CONTEXT = `
You are the official AI Assistant for School207 (Government School).
School Details:
- Name: School207
- Government Identification/School Number: 4378816351
- Primary Contact Phone: 4378816351
- Official Email: sunnatullohamroev139@gmail.com
- Hours: Monday - Friday: 8:00 AM - 4:00 PM | Saturday: 8:00 AM - 1:00 PM
- Campus: Government Educational Complex, School207 Main Campus

Academic Programs & Features:
- Primary Education (Grades 1-5): Foundational literacy, numeracy, environmental studies, art, and physical education.
- Middle School (Grades 6-8): Mathematics, General Science, Social Studies, English, Regional Languages, Computer Basics.
- High School (Grades 9-10): Advanced Mathematics, Physics, Chemistry, Biology, History, Civics, Information Technology.
- Senior Secondary (Grades 11-12): Science Stream (Physics, Chemistry, Maths/Biology), Commerce Stream (Accountancy, Economics, Business Studies), Humanities.

Admissions:
- Admissions open annually in March-April for the upcoming academic year.
- Required documents: Birth Certificate, Previous Report Cards, Transfer Certificate, Passport Photos, Government ID proof.
- Fee Structure: Government Subsidized / Free primary education under government schemes, nominal tuition for senior grades.

Key Highlights:
- Highly qualified certified government teachers.
- Modern computer labs, science labs, smart classrooms, and library.
- Sports, arts, eco-club, and robotics activities.

Instructions:
Be polite, professional, encouraging, and helpful. Always provide accurate info based on School207 details. If unsure about specific private student records, ask the user to contact the administrative office at 4378816351 or email sunnatullohamroev139@gmail.com.
`;

// API Route: AI Chatbot endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message string is required." });
    }

    const ai = getAI();
    if (!ai) {
      // Fallback response if GEMINI_API_KEY is missing
      return res.json({
        reply: `Thank you for reaching out to School207! Our AI system is operating in standard mode. For immediate assistance regarding admissions, classes, or staff inquiries, please contact our administrative office at 4378816351 or email sunnatullohamroev139@gmail.com.`
      });
    }

    // Build chat prompt with conversation context
    const fullPrompt = `${SCHOOL_CONTEXT}

User Question: ${message}

Provide a helpful, polite, and clear response formatting key information nicely.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
    });

    const replyText = response.text || "Thank you for asking! Please feel free to call our administrative desk at 4378816351 for further details.";
    return res.json({ reply: replyText });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return res.status(500).json({
      reply: "Thank you for contacting School207. For direct support, please reach us at 4378816351 or sunnatullohamroev139@gmail.com."
    });
  }
});

// API Route: Contact Form Submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  // Simulate storing contact submission
  console.log(`[School207 Contact Form] Received from ${name} (${email}, ${phone}): ${subject} - ${message}`);
  
  return res.json({
    success: true,
    ticketId: `SCH207-${Math.floor(100000 + Math.random() * 900000)}`,
    message: "Thank you for contacting School207 administration. Your inquiry has been logged, and our team will respond to " + email + " promptly."
  });
});

// API Route: Newsletter Signup
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email address is required." });
  }
  return res.json({
    success: true,
    message: "Successfully subscribed to School207 Official Announcements and Academic Updates!"
  });
});

// Setup Vite Dev Middleware or Production Static Server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`School207 Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
