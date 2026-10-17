// Edit your content here. Everything on the site comes from this file.
export const me = {
  name: "Yaseen Siddiqui",
  role: "Aspiring MERN Stack Web Developer",
  location: "Mumbai, India",
  email: "siddiquiyaseen641@gmail.com",
  resume: "/Yaseen_Siddiqui_Resume.pdf",
  github: null,   // e.g. "https://github.com/Hadi782387"
  linkedin: null, // e.g. "https://linkedin.com/in/your-id"
  instagram: "stoichonour",
  intro: "Trust & Safety Associate at Accenture, building and shipping full-stack MERN projects on the side.",
  about: [
    "I am a Trust & Safety Associate at Accenture with a Diploma in Computer Engineering (2026) and hands-on experience building full-stack MERN applications.",
    "I am transitioning into web development on my own, and have built and shipped React and Node.js projects covering authentication, real-time attendance systems and backend data persistence.",
  ],
  facts: [["Based in", "Mumbai, India"], ["Education", "Diploma in Computer Engineering, 2026"], ["Languages", "English, Hindi, Urdu"], ["Now", "Trust & Safety Associate, Accenture"]],
};

export const experience = [
  { tag: "Work", when: "May 2025 to present", title: "Trust & Safety Associate", org: "Accenture, Mumbai", text: "Applying analytical rigor and process discipline in a high-volume operational role, which strengthens the problem-solving I use in debugging and QA." },
  { tag: "Internship", when: "Internship", title: "Intern", org: "Atoconn System Labs", text: "Gained early technical and industry exposure through internship work." },
  { tag: "Internship", when: "Internship", title: "Intern", org: "Cisco Metal & Alloys", text: "Gained early technical and industry exposure through internship work." },
  { tag: "Education", when: "2026", title: "Diploma in Computer Engineering", org: "Government Polytechnic, Mumbai", text: "" },
];

// link: add a live/GitHub URL to show a button, or leave null
export const projects = [
  { code: "OT", tone: "lilac", title: "OTP Attend", sub: "OTP-based attendance", text: "Attendance verification with a React and Vite frontend for secure, real-time student check-ins.", tags: ["React", "Vite", "JavaScript"], link: null },
  { code: "AT", tone: "mint", title: "Attendify", sub: "Class-code attendance", text: "Time-limited class-code app: instructors generate short-lived codes to verify a session.", tags: ["React", "JavaScript"], link: null },
  { code: "IN", tone: "peach", title: "Inventory Management System", sub: "Express.js backend", text: "An inventory backend rebuilt with Express.js and JSON-based persistence, replacing localStorage with reliable server-side data handling.", tags: ["Node.js", "Express.js"], link: null },
  { code: "GB", tone: "lilac", title: "Gallery & Blog Site", sub: "For @stoichonour", text: "A gallery and blog platform that supports content publishing for the @stoichonour Instagram brand.", tags: ["React", "CSS"], link: null },
  { code: "MW", tone: "mint", title: "MemoryWorld Gallery", sub: "Unity 3D Android app", text: "A Unity 3D Android gallery application.", tags: ["Unity 3D"], link: null },
  { code: "SC", tone: "peach", title: "Stick-Catching Game", sub: "Flutter mobile game", text: "A Flutter-based stick-catching game exploring cross-platform mobile development.", tags: ["Flutter"], link: null },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["MongoDB"] },
  { group: "Mobile & Game", items: ["Flutter", "Unity 3D"] },
  { group: "Tools", items: ["Git / GitHub"] },
];
