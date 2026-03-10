export const config = {
    developer: {
        name: "Aditya",
        fullName: "Aditya Jani",
        title: "AI Engineer & Python Developer",
        description: "AI Engineer with an M.S. in AI & ML and 2 years building Python-based systems in production. Specializing in LLM pipelines, RAG, Computer Vision, and workflow automation."
    },
    social: {
        github: "adityajani",
        email: "adityamjani@gmail.com",
        location: "Ahmedabad, Gujarat, India"
    },
    about: {
        title: "About Me",
        description: "AI Engineer with an M.S. in AI & Machine Learning and 2 years building Python-based systems in production. Specialize in LLM application development: RAG with vector stores (FAISS), LangChain LCEL pipelines with structured output, local LLM deployment via Ollama, and workflow automation with n8n. Previously fine-tuned LLaMA 3, Mistral, and GPT-3.5 for domain-specific use cases and built real-time Computer Vision systems reducing posture errors by 30% and improving engagement by 45%."
    },
    experiences: [
        {
            position: "Python Developer",
            company: "Yudiz Solutions",
            period: "Jan 2024 - Jan 2026",
            location: "Ahmedabad, Gujarat",
            description: "End-to-end development of AI-powered features across computer vision, NLP, and LLM domains — from problem definition and model selection through deployment and iterative refinement.",
            responsibilities: [
                "Fine-tuned conversational AI using GPT-3.5 Turbo, Mistral, and LLaMA 3 with speech-to-text and TTS pipelines",
                "Built real-time pose estimation pipelines with MediaPipe and OpenCV — reduced posture errors by 30%, improved engagement by 45%",
                "Designed automated alerting workflows using Twilio WhatsApp API, cutting manual coordination by 40–50%",
                "Improved conversational AI quality by 50% and reduced human support dependency by 40% post-deployment"
            ],
            technologies: ["Python", "FastAPI", "MediaPipe", "OpenCV", "LLaMA 3", "Mistral", "GPT-3.5", "Twilio", "MLflow"]
        },
        {
            position: "MSc - AI & Machine Learning",
            company: "Ganpat University",
            period: "July 2021 - June 2023",
            location: "Ahmedabad, India",
            description: "Master's degree in AI & Machine Learning with CGPA 7.56/10. Focused on deep learning architectures, computer vision, and intelligent systems.",
            responsibilities: [
                "Developed music recommendation system using real-time facial mood detection",
                "Built real-time home security system with face detection and email alerts",
                "Studied CNN, MobileNetV2, VGG19, ResNet50 architectures",
                "Implemented computer vision algorithms for surveillance systems"
            ],
            technologies: ["Python", "CNN", "MobileNetV2", "VGG19", "ResNet50", "OpenCV"]
        },
        {
            position: "BSc - Information Technology",
            company: "Ganpat University",
            period: "May 2018 - June 2021",
            location: "Ahmedabad, India",
            description: "Bachelor's degree in Information Technology with CGPA 8.02/10.",
            responsibilities: [
                "Built strong foundation in programming and software development",
                "Studied data structures, algorithms, and databases",
                "Completed projects in web and software development"
            ],
            technologies: ["Python", "Web Development", "Databases", "Algorithms"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Real Estate Voice Pipeline",
            category: "LLM / Automation",
            technologies: "FastAPI, LangChain, faster-whisper, Ollama, n8n, Docker",
            image: "/images/realestate.png",
            description: "End-to-end voice-to-CRM pipeline: voice notes transcribed locally via faster-whisper → LangChain PydanticOutputParser extracts 8 structured lead fields via Ollama/Mistral → auto-synced to Airtable via n8n. Fully offline-capable with local LLM inference."
        },
        {
            id: 2,
            title: "Car Dealership AI Chat Agent",
            category: "RAG / LLM",
            technologies: "FastAPI, LangChain, FAISS, Ollama, SQLite, Docker",
            image: "/images/cardealership.png",
            description: "RAG-powered conversational agent using LangChain ConversationalRetrievalChain with FAISS vector store. Intent detection routes queries across info, pricing, financing, and appointment booking — persisted to SQLite."
        },
        {
            id: 3,
            title: "AI Article Generation Platform",
            category: "LLM / Automation",
            technologies: "FastAPI, LangChain LCEL, n8n, WordPress REST API, Docker",
            image: "/images/article.png",
            description: "Multi-stage LCEL pipeline: DuckDuckGo search grounding → outline → article streamed via SSE. Automates WordPress publishing across multiple sites via n8n. Supports 4 local LLMs (Mistral, LLaMA 3.2, Phi-3, Gemma 2) via Ollama."
        },
        {
            id: 4,
            title: "Figma → WordPress Theme Converter",
            category: "AI / Dev Tools",
            technologies: "FastAPI, LangChain, ChatOllama, Figma API, Docker",
            image: "/images/figma.png",
            description: "AI design-to-code pipeline: fetches Figma structure via REST API → generates complete WordPress theme using LangChain + ChatOllama. Features Monaco Editor with live preview and iterative AI refinement via natural language prompts."
        },
        {
            id: 5,
            title: "Exercise Detection System",
            category: "Computer Vision",
            technologies: "Python, MediaPipe, OpenCV, FastAPI",
            image: "/images/exercise.png",
            description: "Real-time exercise detection using MediaPipe pose estimation. Detects 10 exercises with movement tracking and gamification scoring — reduced posture errors by 30% and improved engagement by 45%."
        },
        {
            id: 6,
            title: "Gun Detection System",
            category: "Computer Vision / MLOps",
            technologies: "Python, YOLOv5, MLflow, FastAPI, AWS EC2",
            image: "/images/gun.png",
            description: "YOLOv5-based gun detection trained on a custom dataset with MLflow experiment tracking and FastAPI for real-time predictions. Deployed on AWS EC2 with modular programming principles."
        },
        {
            id: 7,
            title: "AI Human Chatbot",
            category: "LLM / NLP",
            technologies: "Python, GPT-3.5 Turbo, Mistral, LLaMA 3, TTS, STT",
            image: "/images/chatbot.png",
            description: "Advanced AI chatbot fine-tuned on GPT-3.5, Mistral, and LLaMA 3 to mimic specific individuals' communication styles. Integrated speech-to-text and TTS for fully voice-capable interactions."
        },
        {
            id: 8,
            title: "Music Recommendation System",
            category: "Computer Vision / ML",
            technologies: "Python, CNN, MobileNetV2, VGG19, ResNet50",
            image: "/images/music.png",
            description: "Intelligent music recommendation using real-time facial mood detection via CNN architectures. Provides personalized recommendations based on detected facial expressions."
        }
    ],
    contact: {
        email: "adityamjani@gmail.com",
        github: "https://github.com/aditya2613",
        linkedin: "https://www.linkedin.com/in/aditya-jani-01-----/",
        instagram: ""
    },
    skills: {
        develop: {
            title: "LLM / AI ENGINEER",
            description: "RAG pipelines, LLM fine-tuning & local deployment",
            details: "Building production LLM systems with LangChain LCEL, FAISS, Ollama, and n8n. Fine-tuned LLaMA 3, Mistral, and GPT-3.5 for domain-specific use cases. Expert in RAG, vector stores, prompt engineering, and workflow automation.",
            tools: ["Python", "LangChain", "FAISS", "Ollama", "n8n", "FastAPI", "Docker", "LLaMA 3", "Mistral", "GPT-3.5", "RAG", "Prompt Engineering"]
        },
        design: {
            title: "COMPUTER VISION / MLOPS",
            description: "Real-time CV systems & model deployment pipelines",
            details: "Building real-time computer vision systems using MediaPipe, OpenCV, and YOLOv5. MLOps experience with MLflow, DVC, BentoML, Azure ML, and GCP Vertex AI. Deployment via FastAPI, Docker, and cloud platforms.",
            tools: ["MediaPipe", "OpenCV", "YOLOv5", "PyTorch", "TensorFlow", "MLflow", "DVC", "BentoML", "Azure ML", "GCP Vertex AI", "Docker", "AWS"]
        }
    }
};