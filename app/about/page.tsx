export default function About() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Page Title */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">About Me</h1>
        </div>

        {/* Tech Journey Section */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🎓 Academic & Tech Journey
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am currently pursuing my Bachelor of Technology in Information Technology at the <strong>Vellore Institute of Technology (VIT)</strong>, where I maintain a strong academic record with a <strong>CGPA of 9.37</strong>. Throughout my studies, I have developed a deep, foundational understanding of Data Structures, Algorithms, and Machine Learning. I am proficient in languages like <strong>Python, C, and Java</strong>, and I enjoy leveraging modern web technologies (React, Node.js, MongoDB) to build full-stack applications.
          </p>
        </section>

        {/* Internship / Career Goals Section */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            💼 Experience & Career Goals
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am thrilled to be joining <strong>Wells Fargo</strong> as an incoming <strong>Technology Intern</strong>. In this role, I will be applying my expertise to improve AI frameworks, developing Python-based methodologies for model integration, and engineering autonomous AI agents to streamline deployment pipelines. My ultimate career goal is to continue building impactful, intelligent software that solves complex real-world problems.
          </p>
        </section>

        {/* Cloud & Certifications Section */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            ☁️ Cloud & Architecture
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond traditional development, I have a strong focus on cloud infrastructure. I am an <strong>AWS Certified Cloud Practitioner</strong>, with demonstrated knowledge of core services like EC2, S3, Lambda, and DynamoDB. I am highly passionate about engineering scalable, highly-available, and fully serverless architectures that prioritize security best practices and cost-optimization.
          </p>
        </section>

      </div>
    </main>
  );
}