import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* Container for Split Layout */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
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
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="/resume.pdf" 
              download="Kundanika_Resume.pdf"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md text-center"
            >
              Download Resume
            </a>
            <a 
              href="mailto:kundanikareddyb@gmail.com" 
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition font-medium text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center">
          {/* Note: Change profile.jpg to profile.png below if your image is a PNG */}
          <Image 
            src="/profile.jpeg" 
            alt="Kundanika Reddy Bommineni" 
            width={400} 
            height={400} 
            className="rounded-full shadow-2xl object-cover w-64 h-64 md:w-96 md:h-96 border-4 border-white dark:border-gray-800"
            priority
          />
        </div>

      </div>
    </main>
  );
}