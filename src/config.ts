export const siteConfig = {
  name: "Jihye Park",
  title: "AI Researcher",
  description: "Portfolio website of Jihye Park, AI Researcher specialized in Generative Models and Image Restoration",
  accentColor: "#1d4ed8",
  social: {
    email: "ghp1112@korea.ac.kr",
    linkedin: "https://www.linkedin.com/in/jihye-park-3b481923a/",
    github: "https://github.com/Jihyepark98",
    scholar: "https://scholar.google.com/citations?user=Fg0DBKwAAAAJ&hl=ko", 
  },
  aboutMe:
    "AI Researcher who is interested in Generative AI. I have extensive experience in multi-modal generative research, specifically in audio-driven synthesis and text-guided image translation. Currently, I am a researcher at Samsung Electronics (MX Division), where I develop and optimize generative pipelines for image restoration tasks, including denoising and super-resolution, to deliver enhanced visual experiences.",
  skills: ["Python", "PyTorch", "Git", "Docker", "Linux", "LaTeX"],
  experience: [
    {
      company: "Samsung Electronics, MX",
      title: "AI Researcher",
      dateRange: "Mar. 2024 - Present",
      bullets: [
        "Develop high-performance image restoration solutions (Denoising, Super-Resolution) by leveraging state-of-the-art Generative Models, specifically focusing on Diffusion models.",
        "Optimize generative AI pipelines for on-device deployment, enhancing the visual quality of mobile photography in Galaxy devices.",
        "Engineer advanced restoration models specialized for RAW data processing to maximize signal-to-noise ratio and detail preservation.",
      ],
    },
    {
      company: "Computer Vision Course",
      title: "Teaching Assistant",
      dateRange: "Sep. 2023 - Feb. 2024",
      bullets: [
        "Assisted in managing the graduate-level Computer Vision course, supporting student projects and grading.",
      ],
    },
    {
      company: "Linear Algebra Course",
      title: "Teaching Assistant",
      dateRange: "Mar. 2022 - Jun. 2022",
      bullets: [
        "Facilitated learning for students in the Linear Algebra course, focusing on mathematical foundations for AI.",
      ],
    },
    {
      company: "Korea University CVLAB",
      title: "Undergraduate Researcher",
      dateRange: "Jan. 2021 - Feb. 2022",
      bullets: [
        "Participated in research related to generative adversarial models and image translation.",
      ],
    },
  ],
  education: [
    {
      school: "Korea University",
      degree: "Master in Computer Science",
      dateRange: "Mar. 2022 - Feb. 2024",
      achievements: [
        "Advisor: Prof. Seungryong Kim",
        "Generative AI, Audio-driven synthesis, and Text-guided image translation",
      ],
    },
    {
      school: "Korea University",
      degree: "Bachelor in Mathematics",
      dateRange: "Mar. 2017 - Feb. 2022",
      achievements: [
        "Multiple Awards for Academic Excellence (2020, 2021)",
      ],
    },
  ],
  projects: [
    {
      name: "Talking Face Generation",
      description:
        "National project focused on multi-modal learning between audio and image domains. Designed a GAN inversion-based model to map audio to latent space, enabling virtual human generation with face swap and teeth synthesis technologies.",
      skills: ["Multi-modal Learning", "GAN Inversion", "Virtual Human"],
    },
    {
      name: "Complex Scene Translation (HYUNDAI MOBIS)",
      description:
        "Developed an instance-aware translation system using diffusion models to change scene domains (e.g., Sunny to Night) while preserving detailed instance information in complex road environments.",
      skills: ["Diffusion Models", "Instance-aware Translation", "Autonomous Driving"],
    },
    {
      name: "Transformer-based Restoration Model",
      description:
        "Collaboration with Samsung Electronics to study and validate the performance of various transformer architectures in image restoration tasks.",
      skills: ["Transformer", "Image Restoration", "Samsung Electronics"],
    },
    {
      name: "Smart Child Care Project",
      description:
        "National project proposing pose estimation and object detection methods tailored for children's behavior. Enhanced performance by fine-tuning large-scale pre-trained models on specialized datasets.",
      skills: ["Pose Estimation", "Object Detection", "Deep Learning"],
    },
  ],
};
