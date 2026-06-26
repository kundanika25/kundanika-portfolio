export default function Projects() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Page Title */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Projects</h1>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          
          {/* RoamEase Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-2">RoamEase - Travel Planner</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              A full-stack travel planning platform to streamline trip organization. Features user and admin dashboards, secure authentication, dynamic destination loading, and customizable itineraries.
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {['React', 'Node.js', 'MongoDB', 'Express.js', 'AngularJS', 'jQuery'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* If you ever want to add more projects later, you just copy the RoamEase card div and paste it here! */}

        </div>
      </div>
    </main>
  );
}