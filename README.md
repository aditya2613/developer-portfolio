# My Portfolio Website by @aditya2613 🚀

A modern, interactive developer portfolio built completely from scratch using cutting-edge web technologies.

---

## 🛠️ Tech Stack

- **React** - UI Framework
- **TypeScript** - Type-safe JavaScript
- **GSAP** - Smooth animations & transitions
- **Three.js** - 3D graphics & effects
- **WebGL** - GPU-accelerated rendering
- **HTML & CSS** - Structure & styling
- **JavaScript** - Core scripting

---

## ✨ Features

- 🎨 Stunning 3D visuals powered by Three.js & WebGL
- ⚡ Smooth animations with GSAP
- 📱 Fully responsive design
- 🖥️ Project showcase gallery
- 🛠️ Tech stack section
- 📬 Contact form
- 🌙 Modern dark UI

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/aditya2613/chatbot.git

# Navigate to the project folder
cd chatbot

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production
```bash
npm run build
```

### Enable chat when hosted on GitHub Pages
The "Talk with me" chat needs a backend. GitHub Pages is static, so:

1. Deploy this repo (or just the `api/` folder) to [Vercel](https://vercel.com) so the `/api/chat` serverless function runs.
2. In Vercel, set the env var **`GROQ_API_KEY`** (get a key from [Groq](https://console.groq.com)).
3. In `src/config.ts`, set **`chatApiUrl`** to your Vercel API URL, e.g. `"https://your-app.vercel.app/api/chat"`.
4. Rebuild and redeploy the frontend to GitHub Pages.

---

## 📁 Project Structure

```
├── public/
│   ├── images/        # Project images
│   └── video/         # Video assets
├── src/
│   └── components/    # React components
│       ├── Navbar.tsx
│       ├── Contact.tsx
│       ├── Loading.tsx
│       └── TechStackNew.css
├── package.json
└── README.md
```

---

## 📸 Preview

> Coming soon...

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Aditya** - [@aditya2613](https://github.com/aditya2613)

> If you like this project, please give it a ⭐ on GitHub!
