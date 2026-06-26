export default function Experience() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Page Title */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Work Experience</h1>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 ml-3 md:ml-4 mt-8">
          
          {/* Wells Fargo Timeline Item */}
          <div className="mb-10 relative pl-8 md:pl-10">
            {/* Timeline Dot */}
            <div className="absolute w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full -left-[11px] top-1.5 border-4 border-gray-50 dark:border-gray-950"></div>
            
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Technology Intern</h2>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Wells Fargo — Hyderabad</h3>
              <span className="inline-block mt-1 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm font-medium rounded-full">
                May 2025 – July 2025
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-lg marker:text-blue-500">
              <li>
                Developing a Python methodology for integrating the scoring of H2O MOJO models, resulting in a pure-Python service that simplifies the tech stack.
              </li>
              <li>
                Designing and building a proof-of-concept for an AI agent using <strong>Pydantic AI</strong> and <strong>Gemini-1.5-pro</strong> to autonomously guide users through end-to-end model deployment.
              </li>
              <li>
                Collaborating with a team of engineers to debug, resolve issues, and optimize the existing framework.
              </li>
            </ul>
          </div>

          {/* You can add more timeline items here in the future by copy-pasting the div above */}

        </div>
      </div>
    </main>
  );
}