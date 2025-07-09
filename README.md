# 🛰️ Nexa Help Bot – AI Chatbot Interface for Satellite Data Portals

> A floating chat widget built with **React**, **TypeScript**, and **shadcn/ui**, designed for quick information retrieval from portals like [MOSDAC](https://www.mosdac.gov.in).  
> This project is crafted with modularity in mind – perfect for hackathons, data portals, or any knowledge-driven web app!

---

## 🚀 Demo

<img src="https://user-images.githubusercontent.com/your-image-link" alt="Chatbot UI Preview" width="600" />

---

## 🛠️ Tech Stack

| Layer        | Tools / Frameworks              |
|--------------|----------------------------------|
| Frontend     | React + TypeScript              |
| UI Library   | shadcn/ui + TailwindCSS         |
| State Mgmt   | React Hooks                     |
| Styling      | TailwindCSS                     |
| API Handling | Mock (via `setTimeout`)         |

---

## ✨ Features

- 🔘 Floating chatbot launcher (bottom-right)
- 💬 Responsive chat window with user + bot messages
- ⚡ Instant fake replies based on keywords (e.g., `INSAT`, `rainfall`)
- ♻️ Modular components: `ChatWidget`, `ChatWindow`
- 🧠 Easy plug-in for LLM, RAG, or external API
- 🎨 Styled using shadcn components and Tailwind

---

## 🧪 Local Setup

```bash
# Clone the repo
git clone https://github.com/your-username/nexa-chatbot.git
cd nexa-chatbot

# Install dependencies
npm install

# Run the dev server
npm run dev
