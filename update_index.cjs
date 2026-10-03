const fs = require('fs');
let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

let headerStart = code.indexOf('<header');
let endHero = code.indexOf('{/* Quick Stats Tactical Banner */}');
if (endHero === -1) endHero = code.indexOf('{/*  Quick Stats Tactical Banner  */}');

const newHeaderAndHero = `
<header className="bg-surface-container-lowest sticky top-0 z-50 shadow-sm border-b border-surface-container-high">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
    <div className="flex items-center gap-3">
      {/* Davita Kombat Logo */}
      <div className="relative flex items-center justify-center">
        <img alt="Davita Kombat Security" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida/AEtjO1UCled8xise8oMK6JHXylMu-2rot9O_eo5uMsCbHspn9lnHwuPStkDUQTn4vZZvsw3nqsQeC86hnXxIKbzuB73m2NbBlygp0A1k73p7VN0YV9XkfkBZ9RWJcH_Y6GyKxiU4xzU9EuzB5BRZCmbjJSj_88AsPXRduLxyQBlbIkHDGs0TTb4RkewN_lRQjiT2f1ZbN1RBvp7V5lUWiZ5KEMccdDYHA9LMvff_qZKNjc6wq7lDj3PD5j-Fv24yBAZv9UtzqEbvRfKom_Q"/>
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-secondary rounded-full ring-2 ring-surface-container-lowest"></span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-headline-sm text-[22px] font-bold text-primary leading-none tracking-tight uppercase">Davita Kombat</span>
        <span className="font-label-tactical text-[12px] font-bold text-on-surface-variant leading-tight uppercase tracking-wider">Security Services Nigeria</span>
      </div>
    </div>

    <nav className="hidden xl:flex items-center gap-8 h-full">
      <a href="#" className="text-secondary border-b-2 border-secondary h-full flex items-center font-bold text-label-lg">Home</a>
      <a href="#" className="text-on-surface hover:text-secondary h-full flex items-center font-semibold text-label-lg gap-1 transition-colors">About Us <span className="material-symbols-outlined text-[18px]">expand_more</span></a>
      <a href="#" className="text-on-surface hover:text-secondary h-full flex items-center font-semibold text-label-lg gap-1 transition-colors">Services <span className="material-symbols-outlined text-[18px]">expand_more</span></a>
      <a href="#" className="text-on-surface hover:text-secondary h-full flex items-center font-semibold text-label-lg gap-1 transition-colors">Explore <span className="material-symbols-outlined text-[18px]">expand_more</span></a>
      <a href="#" className="text-on-surface hover:text-secondary h-full flex items-center font-semibold text-label-lg transition-colors">Contact</a>
    </nav>

    <div className="hidden lg:flex items-center gap-6">
      <div className="flex items-center gap-2 text-on-surface font-semibold text-label-lg">
        <span className="material-symbols-outlined text-[20px] text-secondary">call</span>
        +234 1 800-KOMBAT
      </div>
      <button className="bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-label-tactical px-6 py-3.5 rounded-lg flex items-center gap-2 transition-colors uppercase tracking-wider shadow-md">
        <span className="material-symbols-outlined text-[18px]">event</span>
        Book an Appointment
      </button>
    </div>
  </div>
</header>
<main className="w-full bg-surface min-h-screen">
<div className="flex flex-col w-full">
<section className="relative w-full h-[calc(100vh-6rem)] min-h-[600px] max-h-[800px] bg-primary overflow-hidden">
  {/* Background Image Overlay */}
  <div className="absolute inset-0 z-0">
    <img alt="Marine Security Guards" className="w-full h-full object-cover object-center opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqjTdUJgGK4kHSTHMu6Tv62NDpZi-Afs9iAjO_h88uIIS8mh_pkTI3psksQLHC8W10CwB3LNo-zheVJLLww1u3_KeTVZK_p33rrcNRtfajJRLqaF21GijkpArPTHZOdwvNJZ6KCss_BpZ_-JfxcRSe2EWx238fxl2vjNLBKeSMrkrUcYVoU8DLDowNzLXRARL5AL1xfWdyYNDb_LMD24wF4V_Z498bylPG6K8NmV_Dux_6HvdW0sTjbQ"/>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
  </div>

  <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center">
    <div className="max-w-2xl text-left">
      <h1 className="font-headline-xl text-5xl lg:text-[64px] font-extrabold text-on-primary mb-6 tracking-tight uppercase leading-tight">Marine Security</h1>
      <p className="font-body-lg text-lg lg:text-xl text-surface-container-high mb-8 max-w-[500px] leading-relaxed">
        Our marine security division safeguards Nigeria's waterways, ports, and offshore installations.
      </p>
      <button className="bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-[14px] uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-colors">
        Read More
      </button>
    </div>
  </div>
  
  <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
    <button className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/50 hover:bg-surface-container-highest transition-colors"></button>
    <button className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/50 hover:bg-surface-container-highest transition-colors"></button>
    <button className="w-3 h-3 rounded-full bg-secondary transition-colors"></button>
    <button className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/50 hover:bg-surface-container-highest transition-colors"></button>
  </div>
</section>
`;

let newCode = code.substring(0, headerStart) + newHeaderAndHero + '\n' + code.substring(endHero);
fs.writeFileSync('src/routes/index.tsx', newCode);
console.log('Successfully updated index.tsx');
