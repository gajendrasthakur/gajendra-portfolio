// // export default function Navbar() {
// //   return (
// //     <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

// //       <div className="w-full px-8 lg:px-20">

// //         <div className="h-24 flex justify-end items-center">

// //           <div className="hidden md:flex items-center gap-10">

// //             <a
// //               href="#about"
// //               className="text-slate-300 hover:text-white transition"
// //             >
// //               About
// //             </a>

// //             <a
// //               href="#skills"
// //               className="text-slate-300 hover:text-white transition"
// //             >
// //               Skills
// //             </a>

// //             <a
// //               href="#experience"
// //               className="text-slate-300 hover:text-white transition"
// //             >
// //               Experience
// //             </a>

// //             <a
// //               href="#projects"
// //               className="text-slate-300 hover:text-white transition"
// //             >
// //               Projects
// //             </a>

// //             <a
// //               href="#contact"
// //               className="text-slate-300 hover:text-white transition"
// //             >
// //               Contact
// //             </a>

// //             <a
// //               href="/resume.pdf"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition"
// //             >
// //               Resume
// //             </a>

// //           </div>

// //         </div>

// //       </div>

// //     </nav>
// //   );
// // }
// "use client";

// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     // <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
//     <nav className="fixed top-0 left-0 w-full z-[9999] bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
//       <div className="w-full px-6 lg:px-20">
//         <div className="h-20 flex items-center justify-end">
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-10">
//             <a
//               href="#about"
//               className="text-slate-300 hover:text-white transition"
//             >
//               About
//             </a>

//             <a
//               href="#skills"
//               className="text-slate-300 hover:text-white transition"
//             >
//               Skills
//             </a>

//             <a
//               href="#experience"
//               className="text-slate-300 hover:text-white transition"
//             >
//               Experience
//             </a>

//             <a
//               href="#projects"
//               className="text-slate-300 hover:text-white transition"
//             >
//               Projects
//             </a>

//             <a
//               href="#contact"
//               className="text-slate-300 hover:text-white transition"
//             >
//               Contact
//             </a>

//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition"
//             >
//               Resume
//             </a>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             // className="md:hidden flex flex-col justify-center items-center gap-1"
//             className="relative z-[9999] md:hidden flex flex-col justify-center items-center gap-1 p-2"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span className="w-6 h-0.5 bg-white rounded"></span>
//             <span className="w-6 h-0.5 bg-white rounded"></span>
//             <span className="w-6 h-0.5 bg-white rounded"></span>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
        
         
//           <div className="md:hidden pb-6 flex flex-col items-end gap-5 text-right">
//             <a
//               href="#about"
//               onClick={() => setMenuOpen(false)}
//               className="text-slate-300 hover:text-white"
//             >
//               About
//             </a>

//             <a
//               href="#skills"
//               onClick={() => setMenuOpen(false)}
//               className="text-slate-300 hover:text-white"
//             >
//               Skills
//             </a>

//             <a
//               href="#experience"
//               onClick={() => setMenuOpen(false)}
//               className="text-slate-300 hover:text-white"
//             >
//               Experience
//             </a>

//             <a
//               href="#projects"
//               onClick={() => setMenuOpen(false)}
//               className="text-slate-300 hover:text-white"
//             >
//               Projects
//             </a>

//             <a
//               href="#contact"
//               onClick={() => setMenuOpen(false)}
//               className="text-slate-300 hover:text-white"
//             >
//               Contact
//             </a>

//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setMenuOpen(false)}
//               className="px-5 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition"
//             >
//               Resume
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
export default function Navbar() {
  return (
    <nav className="hidden md:block fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="w-full px-8 lg:px-20">
        <div className="h-24 flex justify-end items-center">
          <div className="flex items-center gap-10">
            <a href="#about" className="text-slate-300 hover:text-white transition">
              About
            </a>

            <a href="#skills" className="text-slate-300 hover:text-white transition">
              Skills
            </a>

            <a href="#experience" className="text-slate-300 hover:text-white transition">
              Experience
            </a>

            <a href="#projects" className="text-slate-300 hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}