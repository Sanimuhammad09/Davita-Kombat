const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const aboutDir = path.join(srcDir, 'routes', 'about');

const aboutContent = {
    "our-background": {
        title: "Our Background",
        content: `Davita Kombat was established with a singular focus: to redefine private security in Nigeria by integrating military-grade discipline with cutting-edge technology. Drawing inspiration from industry pioneers like Kingsguards, we have evolved from a traditional guarding company into a comprehensive risk management institution.

Our founders, a coalition of retired military intelligence officers and corporate risk management experts, recognized a critical gap in the Nigerian security sector. While demand for physical security surged, the quality of field personnel, their training, and their technological support lagged severely behind international standards.

Today, Davita Kombat stands as a bastion of safety and a Tier-1 licensed Private Guard Company. We employ hundreds of rigorously vetted professionals, securing multinational corporate headquarters, diplomatic missions, and critical national infrastructure across the federation. We do not just provide guards; we provide peace of mind through a holistic, intelligence-led security doctrine.`
    },
    "our-core-values": {
        title: "Our Core Values",
        content: `At the heart of Davita Kombat lies an unyielding commitment to principles that dictate every action we take, from the boardroom to the perimeter gate. Our core values are the DNA of our operational success.

**Integrity and Transparency**: We operate with absolute transparency and ethical rigor. Our personnel are vetted through a multi-tier system involving the Nigerian Police Force (NPF) and biometric data capture, ensuring zero compromise in character.

**Vigilance and Proactivity**: Security is not static; it is a continuous state of readiness. We train our guards to anticipate threats before they materialize. Our command centers monitor intelligence feeds 24/7 to preemptively neutralize risks.

**Excellence and Discipline**: From our executive leadership down to our field operatives, we accept nothing less than the highest international standards in protective services. Military-style discipline is maintained across all ranks.

**Continuous Innovation**: We believe that manpower must be augmented by technology. We continuously invest in advanced CCTV analytics, biometric access controls, and AI-driven threat detection systems.`
    },
    "our-mission": {
        title: "Our Mission",
        content: `To safeguard lives, protect corporate and private assets, and ensure the uninterrupted operations of our clients through the deployment of highly trained personnel, state-of-the-art surveillance technology, and rapid-response tactical protocols. 

We aim to be the invisible shield that allows Nigerian businesses to thrive without fear of disruption. 

Our mission goes beyond mere physical presence. We aim to:
- Deliver customized, intelligence-led risk management solutions.
- Foster a secure environment that attracts foreign direct investment to Nigeria.
- Elevate the standard of the private security industry through rigorous training and superior officer welfare.`
    },
    "our-vision": {
        title: "Our Vision",
        content: `To be the undisputed leader in private security and risk management across West Africa, setting the benchmark for operational excellence, officer welfare, and technological integration. 

We envision a secure environment where corporate enterprises and private citizens can pursue their ambitions with absolute peace of mind, knowing they are protected by the most elite private force on the continent.

By 2030, Davita Kombat aims to:
- Expand our C4I (Command, Control, Communications, Computers, and Intelligence) network across all 36 states.
- Become the employer of choice for retiring armed forces personnel transitioning to the private sector.
- Achieve a 100% digitized incident reporting and response framework.`
    },
    "corporate-objectives": {
        title: "Corporate Objectives & Quality Policy",
        content: `Davita Kombat is committed to delivering flawless security solutions tailored to the unique risk profiles of our clients. Our corporate objectives are intrinsically linked to our ISO 9001:2015 Quality Management System.

**Operational Zero-Defect Policy**: We strive for a 100% incident-free record across all active deployments. Any breach is immediately analyzed through a stringent root-cause analysis protocol.

**Client Retention and Satisfaction**: We aim to maintain a 98% client retention rate by consistently exceeding Service Level Agreements (SLAs) and conducting quarterly strategic risk reviews with all stakeholders.

**Human Capital Investment**: We ensure our guards are the best compensated, best equipped, and most thoroughly trained in the industry. Our objective is to reduce guard turnover to less than 5% annually.

**Technological Superiority**: We allocate 15% of our annual revenue directly to R&D and the upgrading of our electronic countermeasures and command center infrastructure.`
    },
    "our-management": {
        title: "Our Management Team",
        content: `Our leadership comprises highly decorated veterans from the Nigerian Armed Forces, the Department of State Services (DSS), and global corporate risk departments. 

This diverse blend of tactical military experience and corporate governance ensures that Davita Kombat operates with both lethal efficiency and strict legal compliance. 

Our management team personally oversees all major deployments. They do not lead from behind a desk; they conduct unannounced midnight field inspections, design bespoke tactical protocols for new clients, and maintain direct liaisons with federal law enforcement agencies to ensure a seamless escalation matrix during critical incidents.`
    },
    "testimonials": {
        title: "What Our Clients Say",
        content: `Over the past decade, Davita Kombat has earned the trust of Nigeria's most prominent institutions. 

**"Transformational Security Posture"**
"Davita Kombat has completely transformed our corporate security posture. Their guards are immaculate, highly disciplined, and their C4I command center provides us with unparalleled peace of mind. They don't just provide guards; they provide a comprehensive security ecosystem." — *Director of Operations, Tier-1 Nigerian Bank.*

**"Rapid and Decisive Response"**
"We transitioned our entire facility security to Davita Kombat last year. The difference in professionalism and rapid response capability is staggering. During a recent civil disturbance, their emergency dispatch team secured our perimeter within 7 minutes." — *Facility Manager, Multinational Oil & Gas Corporation.*

**"Elite Executive Protection"**
"Their VIP protection detail is the most professional I have encountered in West Africa. Discreet, highly observant, and impeccably trained." — *CEO, International Logistics Firm.*`
    },
    "affiliations": {
        title: "Affiliations & Awards",
        content: `Davita Kombat's commitment to uncompromising standards is reflected in our regulatory standing and industry recognition.

**Statutory Licensing**
We are fully licensed by the Federal Ministry of Interior and the Nigeria Security and Civil Defence Corps (NSCDC) as a Class-A Private Guard Company, authorizing us to deploy nationwide.

**Global Standards**
We are proud corporate members of ASIS International, strictly adhering to their global benchmarks for security management and enterprise risk reduction. We also hold full ISO 9001:2015 Quality Management certification.

**Industry Awards**
- 2024: Best Corporate Security Integration (West African Security Expo)
- 2023: Excellence in Guard Welfare & Training (Nigerian Private Security Regulators)
- 2022: Most Innovative Use of CCTV & IoT in Private Security`
    }
};

const generatePage = (title, content, routePath, componentName) => `import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'

export const Route = createFileRoute('${routePath}')({
  component: ${componentName},
})

function ${componentName}() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)] pb-24">
        {/* Breadcrumb */}
        <section className="w-full bg-surface-container-low py-4 px-6 lg:px-12 border-b border-surface-container-high/60">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">home</span>
                    <span>Home</span>
                    <span className="text-outline-variant">/</span>
                    <span className="text-primary font-bold">${title}</span>
                </div>
            </div>
        </section>
        
        {/* Main Content Area */}
        <section className="w-full bg-surface py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Sidebar Menu (Kings Guards Style) */}
                <div className="lg:col-span-3 hidden lg:flex flex-col space-y-2">
                    <div className="bg-primary text-on-primary font-bold px-5 py-4 uppercase tracking-wider rounded-t-md">
                        Quick Links
                    </div>
                    <div className="bg-surface-container-lowest shadow-sm rounded-b-md flex flex-col border border-surface-container-low">
                        <a href="/about/our-background" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Our Background <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                        <a href="/about/our-mission" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Our Mission <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                        <a href="/about/our-core-values" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Our Core Values <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                        <a href="/about/our-vision" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Our Vision <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                        <a href="/about/corporate-objectives" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Corporate Objectives <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                        <a href="/about/our-management" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Our Management <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                    </div>
                    
                    {/* Contact Widget */}
                    <div className="mt-8 bg-surface-container-low p-5 rounded-lg border-l-4 border-secondary">
                        <h4 className="font-bold text-primary mb-2">Need Immediate Support?</h4>
                        <p className="text-sm text-on-surface-variant mb-4">Our 24/7 command center is ready to deploy tactical response.</p>
                        <a href="tel:02013426900" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                            <span className="material-symbols-outlined">call</span> 02-013426900
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9 flex flex-col">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container-highest text-secondary font-label-tactical text-label-tactical uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        DAVITA KOMBAT PROFILE
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-primary font-bold mb-6">${title}</h1>
                    
                    <div className="h-[400px] w-full bg-surface-container rounded-xl overflow-hidden shadow-md mb-8 relative">
                        <img className="w-full h-full object-cover" src="/images/security_hero_1.jpg" alt="${title}" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-8 text-on-primary font-bold text-2xl drop-shadow-md">
                            Excellence in Security Services
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-on-surface-variant">
                        ${content.split('\n').map(p => {
                            if (p.trim() === '') return '';
                            if (p.startsWith('- ')) {
                                return `<li className="mb-2 ml-6 list-disc">${p.substring(2)}</li>`;
                            }
                            if (p.startsWith('**')) {
                                const boldEnd = p.indexOf('**:');
                                if(boldEnd !== -1) {
                                     return `<p className="mb-4 leading-relaxed"><strong className="text-primary font-bold">${p.substring(2, boldEnd)}</strong>: ${p.substring(boldEnd + 3)}</p>`;
                                }
                                const boldQuoteEnd = p.indexOf('**"');
                                if (boldQuoteEnd !== -1) {
                                    return `<h3 className="text-primary font-bold text-xl mt-6 mb-2">${p.replace(/\*\*/g, '')}</h3>`;
                                }
                                const normalBoldEnd = p.lastIndexOf('**');
                                if (normalBoldEnd !== -1 && normalBoldEnd > 1) {
                                    return `<h3 className="text-primary font-bold text-xl mt-6 mb-2">${p.replace(/\*\*/g, '')}</h3>`;
                                }
                            }
                            return `<p className="mb-5 leading-relaxed">${p}</p>`;
                        }).join('\n                        ')}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-surface-container-high flex gap-4">
                        <button className="px-6 py-3 bg-primary text-on-primary font-bold rounded shadow-sm hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm">
                            Request a Quote
                        </button>
                        <button className="px-6 py-3 bg-surface-container text-primary font-bold rounded hover:bg-surface-container-high transition-colors uppercase tracking-wide text-sm">
                            View All Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}
`;

Object.keys(aboutContent).forEach(key => {
    const data = aboutContent[key];
    const compName = data.title.replace(/[^a-zA-Z0-9]/g, '');
    const outPath = path.join(aboutDir, key + '.tsx');
    fs.writeFileSync(outPath, generatePage(data.title, data.content, `/about/${key}`, compName));
});

console.log("Populated About Us pages with extended content!");
