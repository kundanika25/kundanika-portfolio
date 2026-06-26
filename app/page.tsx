// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
//       {/* Container for Split Layout */}
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
//         {/* Left Side: Text Content */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kundanika Reddy Bommineni.</span>
//           </h1>
          
//           <h2 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
//             Information Technology Undergrad @ VIT | Incoming Technology Intern @ Wells Fargo | AWS Certified Cloud Practitioner
//           </h2>
          
//           <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
//             I'm a developer skilled in Python, Java, and modern web technologies, passionate about building impactful software and improving AI frameworks.
//           </p>
          
//           {/* Call to Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
//             <a 
//               href="/resume.pdf" 
//               download="Kundanika_Resume.pdf"
//               className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md text-center"
//             >
//               Download Resume
//             </a>
//             <a 
//               href="mailto:kundanikareddyb@gmail.com" 
//               className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition font-medium text-center"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="flex-1 flex justify-center">
//           {/* Note: Change profile.jpg to profile.png below if your image is a PNG */}
//           <Image 
//             src="/profile.jpeg" 
//             alt="Kundanika Reddy Bommineni" 
//             width={400} 
//             height={400} 
//             className="rounded-full shadow-2xl object-cover w-64 h-64 md:w-96 md:h-96 border-4 border-white dark:border-gray-800"
//             priority
//           />
//         </div>

//       </div>
//     </main>
//   );
// }

import Image from "next/image";

export default function Home() {
  const publicationsList = [
    {
      title: "CocoSyn: A Deployment-Ready Federated Framework for Coconut Disease Detection Validated by the SAFE Protocol",
      link: "https://doi.org/10.1109/ACCESS.2026.3659709",
      authorRole: "First Author",
      venue: "IEEE Access",
      highlights: [
        "Developed CocoSyn, a lightweight federated learning framework for agricultural disease diagnosis, achieving 96.17% accuracy on resource-constrained edge devices while preserving farmer data privacy.",
        "Designed the Stability Assurance for Federated Edge (SAFE) protocol for rigorous multi-seed evaluation, demonstrating the Adam optimizer's superior resilience and 0% catastrophic failure rate in highly unbalanced, non-IID data environments.",
      ],
    },
    {
      title: "A Lightweight Ensemble Approach for Classification of DDoS Attacks in IoE Environments",
      link: "https://ieeexplore.ieee.org/document/11136075",
      authorRole: "First Author",
      venue: "SENNET 2025 (Official IEEE conference proceedings)",
      highlights: [
        "Developed and evaluated four ensemble machine learning models to detect DDoS attacks on IoT devices, identifying a Bagging-Decision Tree model as the optimal solution with 99.96% accuracy while remaining lightweight and efficient for real-world deployment.",
      ],
    },
    {
      title: "Adaptive quantum kernel selection via leakage-free stacking for clinical diagnostics on NISQ hardware",
      link: "https://www.nature.com/articles/s41598-026-56928-1",
      authorRole: "Co-Author",
      venue: "Nature Scientific Reports",
      highlights: [
        "Developed an adaptive hybrid quantum-classical stacking ensemble that routes clinical data through distinct quantum feature maps (Angle, Amplitude, ZZ-entanglement) using a leakage-free nested cross-validation protocol.",
        "Significantly improved diagnostic metrics across multiple datasets (e.g., increasing Parkinson's Specificity from 58.5% to 81.3%) and utilized XAI methods (SHAP, LIME) with PCA backtracking to trace quantum predictions back to raw clinical biomarkers.",
      ],
    },
    {
      title: "Quantifying the Safety Versus Speed Trade-Off of the DeepSeqCoco Framework for Dermatological Classification via a Two-Stage Stability Evaluation Protocol",
      link: "https://ieeexplore.ieee.org/document/11553297",
      authorRole: "Co-Author",
      venue: "IEEE Access",
      highlights: [
        "Adapted the DeepSeqCoco framework for mobile-centric skin disease classification, introducing a novel Two-Stage Stability (TSS) protocol to rigorously evaluate edge deployment feasibility and quantify clinical safety penalties.",
        "Analyzed the safety-speed trade-off of lightweight models, demonstrating that a MobileNetV3-Small architecture enables real-time edge screening at ~114 FPS (91.03% accuracy), and proposed a Two-Tier Triage Strategy to minimize life-threatening misclassifications.",
      ],
    },
    {
      title: "Efficiency at Parity: Why LLMs Offer No Performance Advantage over Metadata Analysis in Low-Resource Misinformation Detection",
      link: "https://ieeexplore.ieee.org/document/11465628",
      authorRole: "Co-Author",
      venue: "IEEE",
      highlights: [
        "Conducted a comparative study between classical machine learning models and deep learning architectures (DistilBERT) for detecting AI-generated misinformation in low-resource (\"Day-Zero\") environments.",
        "Demonstrated that a lightweight, metadata-driven Linear SVM achieved statistical parity with DistilBERT (F1-score of 0.7027 vs. 0.7013) at a fraction of the computational cost, utilizing SHAP analysis to prove behavioral heuristics are stronger predictors than semantic content.",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 pb-20">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center p-6 md:p-12 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kundanika Reddy Bommineni.</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Information Technology Undergrad @ VIT | Incoming Technology Intern @ Wells Fargo | AWS Certified Cloud Practitioner
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a developer skilled in Python, Java, and modern web technologies, passionate about building impactful software and improving AI frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="/resume.pdf" download="Kundanika_Resume.pdf" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md text-center">
                Download Resume
              </a>
              <a href="mailto:kundanikareddyb@gmail.com" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition font-medium text-center">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/profile.jpeg" alt="Kundanika Reddy Bommineni" width={400} height={400} className="rounded-full shadow-2xl object-cover w-64 h-64 md:w-96 md:h-96 border-4 border-white dark:border-gray-800" priority />
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-6 md:px-12 pt-24 scroll-mt-20">
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">About Me</h1>
        </div>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🎓 Academic & Tech Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am currently pursuing my Bachelor of Technology in Information Technology at the <strong>Vellore Institute of Technology (VIT)</strong>, where I maintain a strong academic record with a <strong>CGPA of 9.44</strong>. Throughout my studies, I have developed a deep, foundational understanding of Data Structures, Algorithms, and Machine Learning. I am proficient in languages like <strong>Python, C, and Java</strong>, and I enjoy leveraging modern web technologies (React, Node.js, MongoDB) to build full-stack applications.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">💼 Experience & Career Goals</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am thrilled to be joining <strong>Wells Fargo</strong> as an incoming <strong>Technology Intern</strong>. In this role, I will be applying my expertise to improve AI frameworks, developing Python-based methodologies for model integration, and engineering autonomous AI agents to streamline deployment pipelines. My ultimate career goal is to continue building impactful, intelligent software that solves complex real-world problems.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">☁️ Cloud & Architecture</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond traditional development, I have a strong focus on cloud infrastructure. I am an <strong>AWS Certified Cloud Practitioner</strong>, with demonstrated knowledge of core services like EC2, S3, Lambda, and DynamoDB. I am highly passionate about engineering scalable, highly-available, and fully serverless architectures that prioritize security best practices and cost-optimization.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="max-w-5xl mx-auto px-6 md:px-12 pt-24 scroll-mt-20">
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Work Experience</h1>
        </div>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 ml-3 md:ml-4">
          <div className="mb-10 relative pl-8 md:pl-10">
            <div className="absolute w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full -left-[11px] top-1.5 border-4 border-gray-50 dark:border-gray-950"></div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Technology Intern</h2>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Wells Fargo — Hyderabad</h3>
              <span className="inline-block mt-1 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm font-medium rounded-full">May 2025 – July 2025</span>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-lg marker:text-blue-500">
              <li>Developing a Python methodology for integrating the scoring of H2O MOJO models, resulting in a pure-Python service that simplifies the tech stack.</li>
              <li>Designing and building a proof-of-concept for an AI agent using <strong>Pydantic AI</strong> and <strong>Gemini-1.5-pro</strong> to autonomously guide users through end-to-end model deployment.</li>
              <li>Collaborating with a team of engineers to debug, resolve issues, and optimize the existing framework.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-6 md:px-12 pt-24 scroll-mt-20">
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-2">RoamEase - Travel Planner</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              A full-stack travel planning platform to streamline trip organization. Features user and admin dashboards, secure authentication, dynamic destination loading, and customizable itineraries.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['React', 'Node.js', 'MongoDB', 'Express.js', 'AngularJS', 'jQuery'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PUBLICATIONS SECTION */}
      <section id="publications" className="max-w-5xl mx-auto px-6 md:px-12 pt-24 scroll-mt-20">
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Publications</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A collection of my academic research spanning federated learning, quantum computing, and edge AI.</p>
        </div>
        <div className="space-y-8">
          {publicationsList.map((paper, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-blue-600 border-y border-r border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
              <h2 className="text-xl md:text-2xl font-bold leading-snug mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href={paper.link} target="_blank" rel="noopener noreferrer">"{paper.title}" ↗</a>
              </h2>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`inline-block px-3 py-1 text-sm font-bold rounded ${paper.authorRole === "First Author" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" : "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400"}`}>
                  {paper.authorRole}
                </span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">📍 {paper.venue}</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-950 p-4 md:p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Key Contributions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {paper.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="pl-1">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ACHIEVEMENTS SECTION */}
      <section id="achievements" className="max-w-5xl mx-auto px-6 md:px-12 pt-24 scroll-mt-20">
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Achievements</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 flex items-center gap-6 hover:shadow-md transition">
            <div className="flex-shrink-0">
              <img src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="AWS Cloud Practitioner Badge" className="w-24 h-24 object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">AWS Certified Cloud Practitioner</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">Valid: 2024 - 2027</p>
              <a href="https://www.credly.com/badges/661f5232-8b6a-4be6-80bb-b1e934b6ed38/public_url" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
                Verify Credential ↗
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col justify-center hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">Academic Excellence</h2>
            <p className="text-gray-600 dark:text-gray-400">Vellore Institute of Technology (VIT)</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">9.44</span>
              <span className="text-lg font-medium text-gray-500">CGPA</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}