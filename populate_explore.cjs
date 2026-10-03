const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const exploreDir = path.join(srcDir, 'routes', 'explore');

// Create directory if it doesn't exist
if (!fs.existsSync(exploreDir)) {
    fs.mkdirSync(exploreDir, { recursive: true });
}

const exploreContent = {
    "careers": {
        title: "Careers",
        content: `Join the ranks of Nigeria's most elite private security organization. Davita Kombat is not just a place to work; it is an institution where character is forged, and excellence is rewarded.

We are constantly seeking dynamic, disciplined, and highly motivated individuals to join our corporate and administrative teams.

**Why Build Your Career at Davita Kombat?**

- **Unmatched Professional Development:** We invest heavily in our corporate staff, offering continuous training in security management, risk analysis, and corporate governance.
- **Competitive Compensation:** We offer industry-leading salaries, comprehensive health insurance (HMO), and performance-based bonuses.
- **Career Mobility:** Many of our senior executives began their journey in junior administrative roles. We believe in promoting from within.

**Current Openings**
- Senior Risk Analyst (Lagos HQ)
- Corporate Communications Manager (Abuja)
- Head of Electronic Security Installations
- Operations Control Room Supervisor

*To apply for a corporate position, please send your resume and a cover letter detailing your specific expertise to careers@davitakombat.com.*`
    },
    "guards-recruitment": {
        title: "Guards Recruitment",
        content: `Are you disciplined, vigilant, and ready to protect? Davita Kombat is currently recruiting able-bodied men and women to join our tactical field operations. 

We set the standard for guard welfare in Nigeria. When you wear the Davita Kombat uniform, you command respect.

**Basic Requirements for Enlistment:**
- Must be a Nigerian citizen between the ages of 21 and 45.
- Minimum educational qualification of O'Level (WAEC/NECO) with at least 4 credits.
- Minimum height: 5ft 8in (Male) / 5ft 6in (Female).
- Must be physically and mentally fit with no criminal record.
- Excellent communication skills in spoken and written English.

**The Davita Kombat Advantage:**
- **Guaranteed Prompt Payment:** Our guards are paid on time, every time, without fail.
- **Premium Welfare Packages:** Pension remittance, health coverage, and hazard pay for specialized deployments.
- **World-Class Training:** You will receive training in martial arts, access control, first aid, and emergency evacuation protocols.

**How to Apply:**
Walk-in interviews are conducted every Tuesday and Thursday at our Regional Command Centers. Please bring your CV, 4 passport photographs, birth certificate, and two verifiable guarantors.`
    },
    "blog": {
        title: "Articles & Blog",
        content: `Stay informed with the latest insights, threat advisories, and industry analyses from the Davita Kombat intelligence desk.

**Recent Publications**

**"The Future of AI in African Perimeter Security"**
*Published: October 1st, 2026*
As threat vectors evolve, traditional fencing is no longer sufficient. This article explores how machine learning algorithms are being integrated into CCTV networks to distinguish between animals and human intruders, drastically reducing false alarms in remote industrial estates.

**"Executive Travel Security in the Gulf of Guinea"**
*Published: September 15th, 2026*
A comprehensive guide for expatriates and corporate executives navigating the logistical complexities of West Africa. We detail essential protocols, from armored transit to counter-surveillance techniques during hotel stays.

**"Cyber-Physical Threats: When Hackers Open Doors"**
*Published: August 28th, 2026*
Access control systems are only as secure as the networks they run on. Our IT security analysts break down recent case studies where sophisticated cyber attacks were used to physically bypass electronic turnstiles, and how Davita Kombat mitigates these hybrid threats.

*Subscribe to our newsletter to receive monthly threat briefings directly to your inbox.*`
    },
    "media": {
        title: "Media & Events",
        content: `Davita Kombat is an active participant in shaping the global and regional security discourse. Browse our recent media appearances, community outreach programs, and upcoming industry events.

**Upcoming Events**

**West African Security Expo (WASE) 2026**
*November 12-14 | Eko Convention Centre, Lagos*
Davita Kombat will be the headline sponsor for this year's WASE. Visit Pavilion A to experience live demonstrations of our new drone-assisted perimeter patrol systems and C4I command interface.

**Recent Highlights**

**Davita Kombat CEO Interviewed on Channels TV**
Our Chief Executive Officer recently appeared on "Business Morning" to discuss the role of private security firms in stabilizing the macro-economic environment and attracting foreign direct investment into Nigeria.

**Community Outreach: "Safe Schools Initiative"**
Last month, our corporate social responsibility (CSR) team conducted free security audits and emergency response training for 15 public schools in the Federal Capital Territory, equipping teachers with basic trauma care kits and evacuation protocols.

**Press Contact**
For all media inquiries, press releases, or expert commentary requests, please contact: media@davitakombat.com`
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
                    <span className="text-on-surface">Explore</span>
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
                        Explore
                    </div>
                    <div className="bg-surface-container-lowest shadow-sm rounded-b-md flex flex-col border border-surface-container-low">
                        <a href="/explore/careers" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Careers <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/explore/guards-recruitment" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Guards Recruitment <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/explore/blog" className="px-5 py-3.5 hover:bg-surface-container-low border-b border-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Articles & Blog <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                        <a href="/explore/media" className="px-5 py-3.5 hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors font-medium flex items-center justify-between text-sm">
                            Media & Events <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </a>
                    </div>
                    
                    {/* Newsletter Widget */}
                    <div className="mt-8 bg-surface-container-low p-6 rounded-lg border-t-4 border-primary shadow-sm">
                        <div className="w-12 h-12 bg-surface text-primary rounded-full flex items-center justify-center mb-4 shadow-sm border border-surface-container-high">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <h4 className="font-bold text-primary mb-2 text-lg">Stay Updated</h4>
                        <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">Subscribe to our newsletter for the latest security advisories and company news.</p>
                        <div className="flex flex-col gap-2">
                            <input type="email" placeholder="Your email address" className="w-full px-3 py-2 border border-surface-container-high rounded text-sm focus:outline-none focus:border-primary" />
                            <button className="w-full py-2 bg-primary text-on-primary font-bold rounded text-sm hover:bg-primary/90 transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9 flex flex-col">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container-highest text-secondary font-label-tactical text-label-tactical uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined text-[16px]">public</span>
                        DAVITA KOMBAT NETWORK
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-primary font-extrabold mb-8">${title}</h1>
                    
                    <div className="h-[450px] w-full bg-surface-container rounded-xl overflow-hidden shadow-lg mb-10 relative">
                        <img className="w-full h-full object-cover" src="/images/security_hero_3.jpg" alt="${title}" />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent">
                            <h2 className="text-on-primary font-bold text-2xl mb-2 drop-shadow-md">${title}</h2>
                            <p className="text-surface-container-lowest font-medium drop-shadow-sm">Building the future of African security infrastructure.</p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-on-surface-variant">
                        ${content.split('\n').map(p => {
                            if (p.trim() === '') return '';
                            if (p.startsWith('- ')) {
                                return `<li className="mb-3 ml-6 list-disc marker:text-secondary">${p.substring(2)}</li>`;
                            }
                            if (p.startsWith('*Published:')) {
                                return `<p className="text-sm text-on-surface-variant/80 italic mb-3 font-medium">${p.replace(/\*/g, '')}</p>`;
                            }
                            if (p.startsWith('*')) {
                                return `<p className="mt-8 p-4 bg-surface-container-lowest border-l-4 border-primary text-primary italic font-medium">${p.replace(/\*/g, '')}</p>`;
                            }
                            if (p.startsWith('**')) {
                                const boldEnd = p.indexOf('**:');
                                if(boldEnd !== -1) {
                                     return `<p className="mb-5 leading-relaxed"><strong className="text-primary font-bold text-lg">${p.substring(2, boldEnd)}</strong>: ${p.substring(boldEnd + 3)}</p>`;
                                }
                                const normalBoldEnd = p.lastIndexOf('**');
                                if (normalBoldEnd !== -1 && normalBoldEnd > 1) {
                                    return `<h3 className="text-primary font-bold text-2xl mt-10 mb-2 border-b border-surface-container-high pb-2">${p.replace(/\*\*/g, '')}</h3>`;
                                }
                            }
                            return `<p className="mb-6 leading-relaxed">${p}</p>`;
                        }).join('\n                        ')}
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}
`;

Object.keys(exploreContent).forEach(key => {
    const data = exploreContent[key];
    const compName = data.title.replace(/[^a-zA-Z0-9]/g, '');
    const outPath = path.join(exploreDir, key + '.tsx');
    fs.writeFileSync(outPath, generatePage(data.title, data.content, `/explore/${key}`, compName));
});

console.log("Populated Explore pages with extended content!");
