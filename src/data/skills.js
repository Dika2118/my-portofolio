export const skillsData = {
  title: "Keahlian & Layanan",
  subtitle: "Saya menghadirkan layanan digital dengan menggabungkan kemampuan teknis dan pemikiran kreatif untuk menciptakan solusi yang berdampak dan berkualitas tinggi.",
  categories: [
    {
      id: "frontend",
      title: "Front-End Development",
      badge: "Intermediate",
      badgeType: "intermediate",
      description: "Menciptakan antarmuka pengguna yang intuitif, responsif, dan menarik menggunakan teknologi web modern.",
      tags: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Vite", icon: "vite" }
      ]
    },
    {
      id: "backend",
      title: "Back-End Development",
      badge: "Intermediate",
      badgeType: "intermediate",
      description: "Mengembangkan API dan arsitektur basis data yang tangguh, aman, dan skalabel.",
      tags: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "PHP", icon: "php" },
        { name: "Laravel", icon: "laravel" },
        { name: "MySQL", icon: "mysql" }
      ]
    },

    {
      id: "uiux",
      title: "UI/UX Design",
      badge: "Intermediate",
      badgeType: "intermediate",
      description: "Merancang pengalaman digital dan wireframe yang berpusat pada pengguna, mudah diakses, dan menarik secara visual.",
      tags: [
        { name: "Figma", icon: "figma" },
        { name: "Adobe", icon: "adobe" },
        { name: "Design System", icon: "designsystem" },
        { name: "Token Studio", icon: "tokenstudio" },
        { name: "Style Dictionary", icon: "styledictionary" },
        { name: "Wireframing", icon: "wireframe" },
        { name: "Prototyping", icon: "prototype" }
      ]
    },
    /*
        {
          id: "pm",
          title: "Project Management",
          badge: "Intermediate",
          badgeType: "intermediate",
          description: "Merencanakan, mengorganisir, dan mengelola sumber daya untuk mencapai tujuan proyek secara efektif serta menghasilkan dampak yang nyata.",
          tags: [
            { name: "Scrum", icon: "scrum" },
            { name: "Jira", icon: "jira" },
            { name: "Confluence", icon: "confluence" },
            { name: "Trello", icon: "trello" },
            { name: "Miro", icon: "miro" }
          ]
        },
        {
          id: "devops",
          title: "DevOps & Cloud",
          badge: "Intermediate",
          badgeType: "intermediate",
          description: "Mengotomatisasi pipeline deployment, mengelola infrastruktur cloud, serta memastikan sistem yang andal dan skalabel.",
          tags: [
            { name: "Linux", icon: "linux" },
            { name: "Docker", icon: "docker" },
            { name: "Google Cloud", icon: "gcp" },
            { name: "AWS", icon: "aws" },
            { name: "Jenkins", icon: "jenkins" },
            { name: "Github Action", icon: "githubactions" },
            { name: "Nginx", icon: "nginx" }
          ]
        }
    */
  ]
};

export const skillsCategories = skillsData.categories;
