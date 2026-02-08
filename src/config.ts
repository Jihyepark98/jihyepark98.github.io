export const siteConfig = {
  name: "Jihye Park", [cite: 1]
  title: "AI Researcher", [cite: 15]
  description: "Portfolio website of Jihye Park, AI Researcher specialized in Generative Models and Image Restoration", [cite: 3, 5]
  accentColor: "#1d4ed8",
  social: {
    email: "ghp1112@korea.ac.kr", [cite: 1]
    linkedin: "https://www.linkedin.com/in/jihye-park-3b481923a/, 
    github: "https://github.com/Jihyepark98",
  },
  aboutMe:
    "Dedicated AI Researcher focused on pushing the boundaries of Generative AI. I have extensive experience in multi-modal generative research, specifically in audio-driven synthesis and text-guided image translation, resulting in high-impact academic contributions at top-tier conferences. Currently, I am a researcher at Samsung Electronics (MX Division), where I develop and optimize generative pipelines for image restoration tasks, including denoising and super-resolution, to deliver enhanced visual experiences.", [cite: 3, 4, 5, 14]
  skills: ["Python", "PyTorch", "Git", "Docker", "Linux", "LaTeX"], [cite: 17, 31, 37, 91, 93, 95]
experience: [
    {
      company: "Samsung Electronics, MX",
      title: "AI Researcher",
      dateRange: "Mar. 2024 - Present",
      bullets: [
        "Spearheaded the development of high-performance image restoration solutions (Denoising, Super-Resolution) by leveraging state-of-the-art Generative Models, specifically focusing on Diffusion models.",
        "Optimized generative AI pipelines for on-device deployment, enhancing the visual quality of mobile photography in Galaxy devices.",
        "Engineered advanced restoration models specialized for RAW data processing to maximize signal-to-noise ratio and detail preservation.",
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
        "Focused on Generative AI, Audio-driven synthesis, and Text-guided image translation",
        "Award for Academic Excellence",
      ],
    },
    {
      school: "Korea University",
      degree: "Bachelor in Mathematics",
      dateRange: "Mar. 2017 - Feb. 2022",
      achievements: [
        "Double Major in Computer Science",
        "Multiple Awards for Academic Excellence (2020, 2021)",
      ],
    },
  ],
  projects: [
    {
      name: "Talking Face Generation", [cite: 34]
      description:
        "Studied multi-modal learning using audio and image domains. Designed a model using GAN inversion to learn the mapping between audio and image in latent space, generating virtual humans with face swap and teeth generative methods.", [cite: 37, 38, 39]
      link: "#",
      skills: ["GAN Inversion", "Multi-modal Learning", "Python"], [cite: 37, 38, 91]
    },
    {
      name: "Complex Scene Translation", [cite: 47]
      description:
        "Solved instance-aware translation tasks using diffusion models, changing domains (e.g., Sunny to Night) while preserving detailed instance information in complex road scenes.", [cite: 50]
      link: "#",
      skills: ["Diffusion Models", "Image-to-Image Translation"], [cite: 50]
    },
    {
      name: "Smart Child Care Project", [cite: 42]
      description:
        "Proposed pose estimation and object detection methods to detect children's behavior, improving performance by adapting pre-trained models to specialized datasets.", [cite: 44, 45]
      link: "#",
      skills: ["Pose Estimation", "Object Detection"], [cite: 44]
    },
  ],
  education: [
    {
      school: "Korea University", [cite: 7]
      degree: "Master in Computer Science", [cite: 8]
      dateRange: "Mar. 2022 - Feb. 2024", [cite: 12, 26]
      achievements: [
        "Specialized in Generative AI and Multi-modal synthesis", [cite: 3, 4]
        "Award for Academic Excellence", [cite: 80]
      ],
    },
    {
      school: "Korea University", [cite: 9]
      degree: "Bachelor in Mathematics", [cite: 10]
      dateRange: "Mar. 2017 - Feb. 2022", [cite: 13]
      achievements: [
        "Double major in Computer Science",
        "Multiple Awards for Academic Excellence", [cite: 82]
      ],
    },
  ],
};
