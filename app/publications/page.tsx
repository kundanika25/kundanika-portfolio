// export default function Publications() {
//   return (
//     <main className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
//       <div className="max-w-4xl mx-auto space-y-8">
        
//         {/* Page Title */}
//         <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Publications</h1>
//         </div>

//         {/* Publication List / Cards */}
//         <div className="pt-4">
          
//           {/* Paper Card */}
//           <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border-l-4 border-blue-600 border-y border-r border-gray-200 dark:border-gray-800">
            
//             {/* Title */}
//             <h2 className="text-2xl font-bold leading-snug mb-3">
//               A Lightweight Ensemble Approach for Classification of DDoS Attacks in IoE Environments
//             </h2>
            
//             {/* Metadata (Author info & Venue) */}
//             <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
//               <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm font-bold rounded">
//                 First Author
//               </span>
//               <span className="text-gray-600 dark:text-gray-400 font-medium">
//                 📍 Accepted for presentation at SENNET 2025 (Official IEEE conference proceedings)
//               </span>
//             </div>

//             {/* Key Highlight / Abstract snippet */}
//             <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
//               <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
//                 Key Highlight
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Developed and evaluated four ensemble machine learning models to detect DDoS attacks on IoT devices. Identified a Bagging-Decision Tree model as the optimal solution, achieving <strong className="text-blue-600 dark:text-blue-400">99.96% accuracy</strong> while remaining lightweight and efficient for real-world deployment.
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

export default function Publications() {
  // Store all publications in an array so it's easy to add more later!
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
    <main className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Page Title */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Publications</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A collection of my academic research spanning federated learning, quantum computing, and edge AI.
          </p>
        </div>

        {/* Publication List / Cards */}
        <div className="pt-4 space-y-8">
          {publicationsList.map((paper, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-blue-600 border-y border-r border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              
              {/* Title as a clickable link */}
              <h2 className="text-xl md:text-2xl font-bold leading-snug mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  "{paper.title}" ↗
                </a>
              </h2>
              
              {/* Metadata (Author info & Venue) */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`inline-block px-3 py-1 text-sm font-bold rounded ${
                  paper.authorRole === "First Author" 
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" 
                    : "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400"
                }`}>
                  {paper.authorRole}
                </span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  📍 {paper.venue}
                </span>
              </div>

              {/* Key Highlights */}
              <div className="bg-gray-50 dark:bg-gray-950 p-4 md:p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Key Contributions
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {paper.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="pl-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}