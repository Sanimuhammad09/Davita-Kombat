const fs = require('fs');

let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

// 1. Fix style tags
code = code.replace(/style="width: 98\.4%"/g, 'style={{ width: "98.4%" }}');
code = code.replace(/style="width: 100%"/g, 'style={{ width: "100%" }}');
code = code.replace(/style="font-variation-settings: 'FILL' 1;"/g, 'style={{ fontVariationSettings: "\\'FILL\\' 1" }}');
code = code.replace(/<script>.*?<\/script>/gs, '{/* Smooth scrolling is handled via CSS */}');

// 2. Add imports & state
code = code.replace(
  "import { createFileRoute } from '@tanstack/react-router'",
  "import { createFileRoute } from '@tanstack/react-router'\\nimport { useState, useEffect } from 'react'"
);

code = code.replace(
  "function IndexComponent() {\\n  return (\\n    <>",
  `function IndexComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Marine Security", desc: "Safeguarding Nigeria's waterways, ports, and offshore installations.", img: "https://images.unsplash.com/photo-1544377193-33dce4ea9a87?auto=format&fit=crop&q=80" },
    { title: "Corporate Guarding", desc: "Premium security solutions for corporate environments and luxury facilities.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
    { title: "Armed Escort", desc: "Elite VIP protection and secure transit across all Nigerian territories.", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80" },
    { title: "Command & Control", desc: "24/7 advanced technological surveillance and rapid response coordination.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>`
);

// 3. Replace Hero Section
// The original hero section starts with `<section className="relative bg-surface py-12` and ends right before `<section className="py-20 bg-surface-container-lowest">`
const heroStartStr = '<section className="relative bg-surface py-12';
const nextSectionStr = '<section className="py-20 bg-surface-container-lowest">';

const heroStart = code.indexOf(heroStartStr);
const nextSection = code.indexOf(nextSectionStr);

if (heroStart !== -1 && nextSection !== -1) {
  const newHero = `
<section className="relative w-full h-[calc(100vh-6rem)] min-h-[600px] max-h-[800px] overflow-hidden bg-[#0A192F]">
  {slides.map((slide, index) => (
    <div 
      key={index} 
      className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}\`}
    >
      <div className="absolute inset-0 z-0">
        <img alt={slide.title} className="w-full h-full object-cover object-center opacity-60" src={slide.img} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f5c]/90 via-[#001f5c]/50 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-2xl text-left transform transition-all duration-700 translate-y-0">
          <h1 className="font-headline-xl text-5xl lg:text-[64px] font-extrabold text-white mb-6 tracking-tight uppercase leading-tight drop-shadow-xl">{slide.title}</h1>
          <p className="font-body-lg text-lg lg:text-xl text-gray-200 mb-8 max-w-[500px] leading-relaxed drop-shadow-md">
            {slide.desc}
          </p>
          <button className="bg-[#cc0000] hover:bg-[#ff1a1a] text-white font-label-tactical text-[14px] uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-colors ring-2 ring-[#cc0000] ring-offset-2 ring-offset-transparent">
            Read More
          </button>
        </div>
      </div>
    </div>
  ))}
  
  <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
    {slides.map((_, index) => (
      <button 
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={\`transition-all duration-300 rounded-full \${currentSlide === index ? 'w-8 h-2.5 bg-[#cc0000]' : 'w-2.5 h-2.5 bg-gray-400/60 hover:bg-white'}\`}
        aria-label={\`Go to slide \${index + 1}\`}
      ></button>
    ))}
  </div>
</section>
`;

  code = code.substring(0, heroStart) + newHero + code.substring(nextSection);
}

fs.writeFileSync('src/routes/index.tsx', code);
console.log('Successfully updated index.tsx');
