const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const servicesDir = path.join(srcDir, 'routes', 'services');

const servicesContent = {
    "personal-protection": {
        title: "Personal Protection (VIP)",
        content: `Davita Kombat provides discreet, highly trained Close Protection Officers (CPOs) designed specifically for executives, diplomats, and high-net-worth individuals facing elevated threat profiles.

Our VIP protection protocols do not rely merely on a physical presence; they are rooted in intelligence, advance planning, and counter-surveillance.

**Advance Threat Assessment**
Before any movement, our intelligence unit conducts comprehensive route reconnaissance, identifying potential choke points, alternative extraction routes, and nearest medical facilities.

**Discreet Yet Lethal Readiness**
Our operatives blend seamlessly into corporate or social environments. Dressed impeccably to match the client's setting, they maintain a low profile while possessing the tactical capability to neutralize any kinetic threat instantly.

**Our VIP Protection Capabilities Include:**
- Armed and Unarmed Close Protection Details
- Counter-Surveillance and Sweep Teams
- Defensive and Evasive Driving Specialists
- Emergency Extraction and Medical First-Response`
    },
    "special-investigation": {
        title: "Special Investigation",
        content: `Corporate fraud, industrial espionage, internal theft, and complex compliance breaches require specialized, highly discreet investigative capabilities. 

The Davita Kombat Special Investigation Unit employs former law enforcement detectives, intelligence analysts, and forensic accountants to uncover the truth without disrupting your business operations.

**Corporate & Industrial Espionage**
We deploy counter-measures to detect electronic bugging, unauthorized data exfiltration, and physical breaches of confidential R&D spaces.

**Internal Fraud & Embezzlement**
Our forensic team conducts deep-dive audits into supply chain discrepancies, phantom payrolls, and procurement fraud, delivering legally admissible evidence.

**Investigation Services Include:**
- Due Diligence and Executive Background Checks
- Covert Surveillance and Undercover Placement
- Digital Forensics and Cyber-Breach Tracing
- Litigation Support and Expert Witness Testimony`
    },
    "access-control": {
        title: "Access Control Systems",
        content: `Physical security begins at the perimeter. Davita Kombat designs, installs, and manages state-of-the-art access control architectures that ensure only authorized personnel enter your facilities, while maintaining a frictionless experience for your employees.

We move beyond traditional lock-and-key methodologies, integrating intelligent, data-driven systems that communicate directly with our centralized C4I command centers.

**Biometric & Facial Recognition**
We deploy high-speed, anti-spoofing facial recognition terminals and fingerprint scanners that log entry and exit times down to the millisecond.

**Vehicular Access & ANPR**
For corporate campuses and industrial estates, we utilize Automatic Number Plate Recognition (ANPR) cameras linked to automated boom barriers and RFID tags.

**Key Features of Our Systems:**
- Cloud-Based Visitor Management System (VMS)
- Anti-Passback and Tailgating Detection
- Integration with Fire Alarms for Emergency Muster Reporting
- Remote Door Lockdowns via Central Command`
    },
    "escort-services": {
        title: "Escort Services",
        content: `Navigating high-risk environments and interstate routes requires specialized logistical protection. Davita Kombat provides elite armed escort services designed to ensure the absolute safety of personnel and high-value assets across all 36 states of the federation.

**Police Supernumerary (SPY) Integration**
Our escort services are conducted in strict, legal collaboration with the Nigerian Police Force (NPF). Our tactical commanders lead convoys accompanied by armed mobile police (MOPOL) detachments.

**Armored Mobility & Telemetry**
We utilize B6-level armored vehicles for critical VIP transit. Every vehicle in our escort fleet is equipped with real-time GPS telemetry, panic buttons, and direct satellite links to our 24/7 command center.

**Escort Deployments Include:**
- Interstate Highway VIP Transfers
- High-Value Cargo and Logistics Protection
- Expatriate Airport Meet-and-Greet & Transfer
- Convoy Management for Mining and Oil & Gas Sectors`
    },
    "cash-in-transit": {
        title: "Cash In Transit (CIT)",
        content: `Moving currency, precious metals, and sensitive financial instruments is one of the most critical security operations a business can undertake. Davita Kombat's Cash In Transit (CIT) division operates with zero tolerance for risk.

**Fortified Tactical Fleet**
We utilize heavily fortified, tamper-proof bullion vans manned by elite tactical squads trained specifically in ambush-countermeasures and high-speed evasive maneuvers.

**Real-Time Command Oversight**
Our CIT protocols include randomized algorithmic routing, continuous GPS tracking, remote vehicle immobilization, and automated distress signaling to guarantee absolute security.

**Our CIT Services Support:**
- Commercial Banks and Microfinance Institutions
- Large-Scale Retail Supermarkets and Malls
- Precious Metal Mining Operators
- Secure Vault Storage and Processing Facilities`
    },
    "security-equipment": {
        title: "Security Equipment & Procurement",
        content: `Manning a post with a highly trained guard is only half the equation; the other half is equipping that post with world-class defensive hardware. Davita Kombat partners with leading global manufacturers to supply, install, and maintain elite security equipment.

**Perimeter Intrusion Detection**
We deploy advanced Perimeter Intrusion Detection Systems (PIDS), including fiber-optic fence sensors and microwave barriers that instantly alert our command center of any breach attempt.

**Screening and Scanning**
For high-traffic corporate and government facilities, we supply aviation-grade X-ray baggage scanners and multi-zone walk-through metal detectors.

**Equipment Portfolio Includes:**
- High-Definition PTZ and Thermal CCTV Cameras
- Walk-Through Metal Detectors and Handheld Scanners
- Hydraulic Road Blockers and Tyre Killers
- Tactical Gear, Body Armor, and Communication Radios`
    },
    "reception-protocol": {
        title: "Reception Protocol & Concierge",
        content: `The front desk is your company's first impression and your facility's first line of defense. Davita Kombat provides Concierge Security Officers who masterfully blend executive hospitality with rigorous threat profiling.

**The Hybrid Officer**
Our concierge guards are trained differently from our tactical field operatives. They undergo specialized modules in corporate etiquette, verbal de-escalation, and diplomatic protocol, all while dressed in premium corporate attire rather than tactical uniforms.

**Intelligent Access Management**
They seamlessly manage digital visitor logs, verify appointments with internal staff, and handle mail and package screening (including X-ray operation) without causing delays.

**Concierge Duties Include:**
- Executive Visitor Meet-and-Greet
- Mailroom and Package Security Screening
- Access Badge Issuance and Retrieval
- After-Hours Telephone Switchboard Management`
    },
    "maritime-security": {
        title: "Maritime Security",
        content: `Protecting assets in the Gulf of Guinea and Nigeria's inland waterways requires highly specialized naval expertise. Davita Kombat offers comprehensive maritime security solutions designed to protect offshore platforms, vessels, and coastal infrastructure.

**Offshore Protection & Hardening**
We conduct extensive vessel hardening and deploy highly trained maritime operatives trained to counter piracy, sabotage, and illegal boarding attempts with decisive force.

**Armed Security Escort Vessels (SEV)**
In collaboration with the Nigerian Navy, we coordinate the deployment of Security Escort Vessels equipped with naval-grade radar and armed personnel for deep-water transit.

**Maritime Services Include:**
- On-board Armed Security Teams
- Port and Terminal Facility Security Assessments (PFSA)
- Offshore Platform Access Control
- Anti-Piracy Drills and Crew Hostage-Survival Training`
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
        {/* Tactical Breadcrumb */}
        <section className="w-full bg-surface-container-low py-4 px-6 lg:px-12 border-b border-surface-container-high/60">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                    <a href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">home</span>
                        <span>Home</span>
                    </a>
                    <span className="text-outline-variant">/</span>
                    <span className="text-on-surface">Services</span>
                    <span className="text-outline-variant">/</span>
                    <span className="text-primary font-bold">${title}</span>
                </div>
            </div>
        </section>
        
        {/* Main Content Area */}
        <section className="w-full bg-surface py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Sidebar Menu */}
                <div className="lg:col-span-3 hidden lg:flex flex-col space-y-2">
                    <div className="bg-primary text-on-primary font-bold px-5 py-4 uppercase tracking-wider rounded-t-md text-sm">
                        Our Services
                    </div>
                    <div className="bg-surface-container-lowest shadow-sm rounded-b-md flex flex-col border border-surface-container-low">
                        <a href="/services/personal-protection" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Personal Protection (VIP) <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/special-investigation" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Special Investigation <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/access-control" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Access Control Systems <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/escort-services" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Escort Services <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/cash-in-transit" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Cash In Transit <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/security-equipment" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Security Equipment <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/reception-protocol" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Reception Protocol <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/services/maritime-security" className="px-5 py-3.5 hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Maritime Security <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                    </div>
                    
                    {/* Contact Widget */}
                    <div className="mt-8 bg-surface-container-low p-6 rounded-lg border-t-4 border-secondary shadow-sm">
                        <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined">support_agent</span>
                        </div>
                        <h4 className="font-bold text-primary mb-2 text-lg">Request a Consultation</h4>
                        <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">Speak with our deployment strategists to design a custom security protocol for your facility.</p>
                        <a href="tel:02013426900" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-lg">
                            <span className="material-symbols-outlined">call</span> 02-013426900
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9 flex flex-col">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container-highest text-secondary font-label-tactical text-label-tactical uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined text-[16px]">verified_user</span>
                        TACTICAL SERVICE DIVISION
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-primary font-extrabold mb-8">${title}</h1>
                    
                    <div className="h-[450px] w-full bg-surface-container rounded-xl overflow-hidden shadow-lg mb-10 relative">
                        <img className="w-full h-full object-cover" src="/images/security_hero_2.jpg" alt="${title}" />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent">
                            <h2 className="text-on-primary font-bold text-2xl mb-2 drop-shadow-md">${title}</h2>
                            <p className="text-surface-container-lowest font-medium drop-shadow-sm">Deployed with precision. Executed with integrity.</p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-on-surface-variant">
                        ${content.split('\n').map(p => {
                            if (p.trim() === '') return '';
                            if (p.startsWith('- ')) {
                                return `<li className="mb-3 ml-6 list-disc marker:text-secondary">${p.substring(2)}</li>`;
                            }
                            if (p.startsWith('**')) {
                                const boldEnd = p.indexOf('**:');
                                if(boldEnd !== -1) {
                                     return `<p className="mb-5 leading-relaxed"><strong className="text-primary font-bold text-lg">${p.substring(2, boldEnd)}</strong>: ${p.substring(boldEnd + 3)}</p>`;
                                }
                                const normalBoldEnd = p.lastIndexOf('**');
                                if (normalBoldEnd !== -1 && normalBoldEnd > 1) {
                                    return `<h3 className="text-primary font-bold text-2xl mt-10 mb-4 border-b border-surface-container-high pb-2">${p.replace(/\*\*/g, '')}</h3>`;
                                }
                            }
                            return `<p className="mb-6 leading-relaxed">${p}</p>`;
                        }).join('\n                        ')}
                    </div>
                    
                    <div className="mt-14 p-8 bg-surface-container-lowest border border-surface-container-high rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-primary font-bold text-xl mb-1">Ready to deploy ${title}?</h4>
                            <p className="text-on-surface-variant">Contact our operations center for immediate dispatch and risk assessment.</p>
                        </div>
                        <button className="whitespace-nowrap px-8 py-3.5 bg-secondary text-on-secondary font-bold rounded shadow-sm hover:bg-secondary/90 transition-colors uppercase tracking-widest text-sm">
                            Get a Quote
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

Object.keys(servicesContent).forEach(key => {
    const data = servicesContent[key];
    const compName = data.title.replace(/[^a-zA-Z0-9]/g, '');
    const outPath = path.join(servicesDir, key + '.tsx');
    fs.writeFileSync(outPath, generatePage(data.title, data.content, `/services/${key}`, compName));
});

console.log("Populated Services pages with extended content!");
