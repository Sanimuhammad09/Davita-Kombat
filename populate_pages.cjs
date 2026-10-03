const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const routesDir = path.join(srcDir, 'routes');
const aboutDir = path.join(routesDir, 'about');
const servicesDir = path.join(routesDir, 'services');

const aboutContent = {
    "our-background": {
        title: "Our Background",
        content: "Davita Kombat was established with a singular focus: to redefine private security in Nigeria by integrating military-grade discipline with cutting-edge technology. Drawing inspiration from industry pioneers, we have evolved from a traditional guarding company into a comprehensive risk management institution. Our founders recognized the gap between standard security offerings and the complex, dynamic threats faced by modern businesses. Today, we stand as a bastion of safety, employing hundreds of vetted professionals and securing critical infrastructure across the nation."
    },
    "our-core-values": {
        title: "Our Core Values",
        content: "At the heart of Davita Kombat lies an unyielding commitment to Integrity, Vigilance, and Excellence. \n\n**Integrity**: We operate with absolute transparency and ethical rigor. Our personnel are vetted through a multi-tier system ensuring zero compromise.\n**Vigilance**: Security is not static; it is a continuous state of readiness. We train our guards to anticipate threats before they materialize.\n**Excellence**: From our executive leadership down to our field operatives, we accept nothing less than the highest international standards in protective services."
    },
    "our-mission": {
        title: "Our Mission",
        content: "To safeguard lives, protect assets, and ensure the uninterrupted operations of our clients through the deployment of highly trained personnel, state-of-the-art surveillance technology, and rapid-response tactical protocols. We aim to be the invisible shield that allows Nigerian businesses to thrive without fear."
    },
    "our-vision": {
        title: "Our Vision",
        content: "To be the undisputed leader in private security and risk management across West Africa, setting the benchmark for operational excellence, officer welfare, and technological integration. We envision a secure environment where corporate enterprises and private citizens can pursue their ambitions with absolute peace of mind."
    },
    "corporate-objectives": {
        title: "Corporate Objectives & Quality Policy",
        content: "Davita Kombat is committed to delivering flawless security solutions tailored to the unique risk profiles of our clients. Our objectives include maintaining a 100% incident-free record across all active deployments, achieving total compliance with ISO 9001:2015 quality standards, and continuously upgrading our technological infrastructure. We invest heavily in our human capital, ensuring our guards are the best compensated and most thoroughly trained in the industry."
    },
    "our-management": {
        title: "Our Management Team",
        content: "Our leadership comprises veterans from the Nigerian Armed Forces, State Security Services, and global corporate risk departments. This diverse blend of tactical military experience and corporate governance ensures that Davita Kombat operates with both lethal efficiency and strict legal compliance. Our management team personally oversees all major deployments, ensuring that strategic vision translates flawlessly into ground-level execution."
    },
    "testimonials": {
        title: "What Our Clients Say",
        content: "Davita Kombat has completely transformed our corporate security posture. Their guards are immaculate, highly disciplined, and their C4I command center provides us with unparalleled peace of mind. They don't just provide guards; they provide a comprehensive security ecosystem. — Director of Operations, Tier-1 Nigerian Bank.\n\nWe transitioned our entire facility security to Davita Kombat last year. The difference in professionalism and rapid response capability is staggering. — Facility Manager, Multinational Oil & Gas Corporation."
    },
    "affiliations": {
        title: "Affiliations & Awards",
        content: "Davita Kombat is fully licensed by the Nigeria Security and Civil Defence Corps (NSCDC) as a Class-A Private Guard Company. We are proud corporate members of ASIS International, strictly adhering to their global benchmarks for security management. Our commitment to excellence has been recognized with numerous industry awards for 'Best Guard Welfare' and 'Most Innovative Security Tech Integration'."
    }
};

const servicesContent = {
    "personal-protection": {
        title: "Personal Protection (VIP)",
        content: "Davita Kombat provides discreet, highly trained Close Protection Officers (CPOs) for executives, dignitaries, and high-net-worth individuals. Our VIP protection protocols involve advance threat assessments, secure route planning, and counter-surveillance techniques. Our operatives blend seamlessly into corporate environments while maintaining a lethal readiness to neutralize any threat."
    },
    "special-investigation": {
        title: "Special Investigation",
        content: "Corporate fraud, industrial espionage, and internal theft require specialized investigative capabilities. Our discreet investigation unit employs former law enforcement detectives and forensic accountants to uncover the truth. We provide actionable intelligence, comprehensive evidence gathering, and litigation support while maintaining absolute confidentiality."
    },
    "access-control": {
        title: "Access Control Systems",
        content: "Physical security begins at the perimeter. Davita Kombat designs, installs, and manages state-of-the-art access control architectures. From biometric fingerprint scanners and facial recognition terminals to automated boom barriers and RFID vehicular tags, we ensure that only authorized personnel enter your facilities."
    },
    "escort-services": {
        title: "Escort Services",
        content: "Navigating high-risk environments requires specialized logistical protection. Our armed escort services, conducted in strict collaboration with the Nigerian Police Force (NPF) SPY units, ensure the safe transit of personnel and high-value assets across all 36 states of the federation. We utilize armored vehicles and continuous GPS tracking from our central command."
    },
    "cash-in-transit": {
        title: "Cash In Transit (CIT)",
        content: "Moving currency and precious metals is one of the most critical security operations. Davita Kombat's CIT division utilizes heavily fortified, tamper-proof vehicles manned by elite tactical squads. Our CIT protocols include randomized routing, real-time telemetry, and automated distress signaling to guarantee the absolute security of your assets in transit."
    },
    "security-equipment": {
        title: "Security Equipment & Procurement",
        content: "Beyond manpower, we supply world-class security hardware. From walk-through metal detectors and X-ray baggage scanners to advanced tactical gear and perimeter intrusion detection systems (PIDS), Davita Kombat partners with leading global manufacturers to equip your facilities with the best defensive technologies available."
    },
    "reception-protocol": {
        title: "Reception Protocol & Concierge",
        content: "The front desk is your company's first impression and first line of defense. Our Concierge Security Officers are trained in both executive hospitality and threat profiling. They manage visitor logs, verify appointments, and handle mail screening while presenting a courteous, highly professional image that reflects your brand's prestige."
    },
    "maritime-security": {
        title: "Maritime Security",
        content: "Protecting assets in the Gulf of Guinea requires specialized naval expertise. Davita Kombat offers comprehensive maritime security solutions, including vessel hardening, armed security escort vessels (SEVs), and offshore platform protection. Our maritime operatives are trained to counter piracy, sabotage, and illegal boarding attempts with decisive force."
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
                        <a href="/services/personal-protection" className="px-5 py-3 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            VIP Protection <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </a>
                        <a href="/services/access-control" className="px-5 py-3 hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between">
                            Access Control <span className="material-symbols-outlined text-[16px]">chevron_right</span>
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
                        DAVITA KOMBAT
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-primary font-bold mb-6">${title}</h1>
                    
                    <div className="h-[350px] w-full bg-surface-container rounded-xl overflow-hidden shadow-md mb-8 relative">
                        <img className="w-full h-full object-cover" src="/images/security_hero_1.jpg" alt="${title}" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-6 text-on-primary font-bold text-lg drop-shadow-md">
                            Excellence in Security Services
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-on-surface-variant">
                        ${content.split('\n').map(p => {
                            if (p.trim() === '') return '';
                            if (p.startsWith('**')) {
                                const boldEnd = p.indexOf('**:');
                                if(boldEnd !== -1) {
                                     return `<p className="mb-4 leading-relaxed"><strong className="text-primary">${p.substring(2, boldEnd)}</strong>: ${p.substring(boldEnd + 3)}</p>`;
                                }
                            }
                            return `<p className="mb-4 leading-relaxed">${p}</p>`;
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

Object.keys(servicesContent).forEach(key => {
    const data = servicesContent[key];
    const compName = data.title.replace(/[^a-zA-Z0-9]/g, '');
    const outPath = path.join(servicesDir, key + '.tsx');
    fs.writeFileSync(outPath, generatePage(data.title, data.content, `/services/${key}`, compName));
});

console.log("Populated all pages with full content!");
