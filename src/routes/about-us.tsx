import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/about-us')({
  component: AboutUsComponent,
})

function AboutUsComponent() {
  return (
    <>
<Header /><main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]"><div className="flex flex-col w-full">
{/*  Top Tactical Quick-Strip / Breadcrumb  */}
<section className="w-full bg-surface-container-low py-4 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-secondary flex items-center gap-1 transition-colors" data-path="home" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
<span>Home</span>
</a>
<span className="text-outline-variant">/</span>
<span className="text-primary font-bold">About Us</span>
<span className="text-outline-variant">/</span>
<span className="text-secondary font-label-tactical text-label-tactical">INSTITUTIONAL PROFILE</span>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container-highest text-primary font-label-tactical text-label-tactical uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
          OPERATIONAL STATE: ACTIVE / DEFCON 4 STABLE
        </span>
<span className="hidden md:inline-flex text-label-md font-label-md text-on-surface-variant">
          EST. 2008 • ABUJA
        </span>
</div>
</div>
</section>
{/*  Editorial Hero Section  */}
<section className="w-full bg-surface py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 flex flex-col space-y-6">
<div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface-container text-secondary font-label-tactical text-label-tactical tracking-widest uppercase">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
          Tier-1 Licensed Private Guard Company
        </div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight uppercase">
          Securing Nigeria's Future With Integrity, Discipline &amp; Precision.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Founded in Lagos to bridge the gap between traditional static guarding and international tactical doctrine, Davita Kombat deploys rigorously vetted, technology-assisted protective units to multinational corporations, diplomatic missions, and critical infrastructure across Nigeria.
        </p>
<div className="pt-4 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary hover:bg-primary-container text-on-primary font-label-tactical text-label-tactical uppercase tracking-wider shadow-sm transition-all" data-path="contact-quote" href="#">
<span>Review Capabilities &amp; Quote</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container hover:bg-surface-variant text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-all" data-path="tech-cctv" href="#">
<span className="material-symbols-outlined text-[18px]">videocam</span>
<span>View Technology Stack</span>
</a>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container">
<img className="w-full h-[520px] object-cover object-center" alt="Two professional Nigerian security officers" src="/images/security_hero_1.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent text-on-primary">
<div className="flex items-center justify-between pb-2">
<span className="font-label-tactical text-label-tactical uppercase tracking-wider text-primary-fixed">Guard Force Deployment Alpha</span>
<span className="px-2 py-0.5 rounded bg-secondary text-[11px] font-bold text-on-secondary uppercase">Active Watch</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-primary">Vetted. Uniformed. Disciplined.</p>
<p className="font-body-sm text-body-sm text-surface-container-high/80">Officers stationed at premier commercial tower, Ikoyi-Victoria Island corridor.</p>
</div>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:flex flex-col bg-surface-container-lowest p-5 rounded-lg shadow-lg max-w-xs">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div>
<p className="font-headline-sm text-headline-sm text-primary leading-tight font-bold">100%</p>
<p className="font-label-md text-label-md text-on-surface-variant">NSCDC &amp; NPF Vetting Rate</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Metric Badges Strip  */}
<section className="w-full bg-surface-container-lowest py-10 px-6 lg:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-display-lg text-display-lg text-primary font-extrabold tracking-tight">16+</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Years in Theater</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Continuous mission-readiness and protection delivery across 22 Nigerian states.</p>
</div>
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-display-lg text-display-lg text-secondary font-extrabold tracking-tight">1,850+</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Tactical Operatives</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Full-time trained static guards, K9 handlers, and mobile escort specialists.</p>
</div>
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-display-lg text-display-lg text-primary font-extrabold tracking-tight">24/7</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Dual Command Centers</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Redundant AI-monitored operations hubs in Victoria Island, Lagos and CBD, Abuja.</p>
</div>
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-display-lg text-display-lg text-secondary font-extrabold tracking-tight">&lt; 7m</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Dispatch Response</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Guaranteed urban rapid reaction force response within Lagos Island &amp; Abuja core.</p>
</div>
</div>
</section>
{/*  Corporate Story & Mission Split  */}
<section className="w-full bg-surface py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto space-y-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative">
<div className="rounded-xl overflow-hidden shadow-lg bg-surface-container">
<img className="w-full h-[440px] object-cover" alt="Modern high-tech security operations command center" src="/images/security_hero_2.jpg"/>
</div>
<div className="mt-4 p-4 rounded bg-surface-container-high flex items-center justify-between">
<span className="font-label-tactical text-label-tactical text-primary uppercase">C4I CONTROL ROOM • ABUJA HQ</span>
<span className="font-label-md text-label-md text-secondary font-semibold">ISO 9001:2015 AUDITED</span>
</div>
</div>
<div className="lg:col-span-7 flex flex-col space-y-6">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">THE GENESIS &amp; OPERATIONAL DOCTRINE</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            Engineering Security to International Defense Standards
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Davita Kombat was created by seasoned defense advisors, intelligence alumni, and corporate risk professionals who observed a critical deficit in the local private security apparatus: while demand for protection surged, field guard forces suffered from inadequate training, poor welfare, and primitive situational response protocols.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Taking cues from world-class protective services and pioneering Nigerian operators like Kingsguards, Davita Kombat transformed the model into an institution-first force. We treat private security not as casual gatekeeping, but as a proactive layer of civil defense, economic continuity, and human dignity.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="p-5 rounded-lg bg-surface-container-lowest shadow-sm">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm mb-2">
<span className="material-symbols-outlined text-secondary">track_changes</span>
<span>Our Mission</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                To preserve corporate continuity, protect human life, and fortify critical Nigerian assets through certified personnel, intelligent electronic countermeasures, and rapid-dispatch capability.
              </p>
</div>
<div className="p-5 rounded-lg bg-surface-container-lowest shadow-sm">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm mb-2">
<span className="material-symbols-outlined text-secondary">visibility</span>
<span>Our Vision</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                To be West Africa's gold standard in private security integration—acknowledged for unyielding integrity, exceptional officer welfare, and technological superiority.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Davita Kombat Academy & Training Doctrine  */}
<section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">THE FOUNDATION OF EXCELLENCE</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-2">
            The Davita Kombat Training Academy
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2">
            A guard is only as dependable as their training and character. Our proprietary 6-week residential curriculum in Epe, Lagos combines rigorous field doctrine with executive etiquette.
          </p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface-container-highest text-primary font-label-tactical text-label-tactical uppercase">
<span className="material-symbols-outlined text-secondary text-[18px]">school</span>
            CURRICULUM REV. 2025.2
          </span>
</div>
</div>
{/*  Training 4-Pillar Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Step 1  */}
<div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
<div>
<div className="flex items-center justify-between mb-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase tracking-widest">PHASE 01</span>
<span className="material-symbols-outlined text-[28px] text-primary">fingerprint</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Multi-Tier Vetting &amp; Biometrics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every candidate undergoes automated biometric fingerprinting, Nigerian Police Force (NPF) criminal record checks, continuous residence verification, and dual-guarantor judicial notarization before stepping foot on camp.
            </p>
</div>
<div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4">
<span className="font-label-tactical text-label-tactical text-primary uppercase">Zero Criminal Record Tolerance</span>
</div>
</div>
{/*  Step 2  */}
<div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
<div>
<div className="flex items-center justify-between mb-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase tracking-widest">PHASE 02</span>
<span className="material-symbols-outlined text-[28px] text-primary">fitness_center</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Physical &amp; Tactical Conditioning</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              6 weeks of rigorous endurance drills, unarmed combat defensiveness, baton and restraint techniques, crowd dispersal tactics, and defensive perimeter movement led by former military instructors.
            </p>
</div>
<div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4">
<span className="font-label-tactical text-label-tactical text-primary uppercase">Daily 10km • Hand-to-Hand CQB</span>
</div>
</div>
{/*  Step 3  */}
<div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
<div>
<div className="flex items-center justify-between mb-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase tracking-widest">PHASE 03</span>
<span className="material-symbols-outlined text-[28px] text-primary">local_fire_department</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Life Safety &amp; Fire Suppression</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Certified hands-on training with industrial fire extinguishers, hydrants, smoke containment, evacuation routing, BLS (Basic Life Support), AED operation, and emergency first aid stabilization.
            </p>
</div>
<div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4">
<span className="font-label-tactical text-label-tactical text-primary uppercase">Red Cross CPR Certified</span>
</div>
</div>
{/*  Step 4  */}
<div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
<div>
<div className="flex items-center justify-between mb-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase tracking-widest">PHASE 04</span>
<span className="material-symbols-outlined text-[28px] text-primary">record_voice_over</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Ethics, Human Rights &amp; Etiquette</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Mandatory modules on verbal de-escalation, conflict neutralisation, diplomatic protocol, customer service, human rights under the Nigerian Constitution, and digital report generation.
            </p>
</div>
<div className="mt-6 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4">
<span className="font-label-tactical text-label-tactical text-primary uppercase">Executive Presence Tested</span>
</div>
</div>
</div>
{/*  Training Gallery Visual Element  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
<div className="relative rounded-lg overflow-hidden shadow-sm h-64 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Outdoor physical drill formation at Davita Kombat security training facility in Nigeria. Security recruits in identical navy tactical uniforms performing synchronized morning physical conditioning and stance training on an athletic drill field under bright African sun." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEY-gANiKRMp_16hoP8n_SfIwncS7TaXZnFIcZM8oY43hXSoxd6NP7IGZl1MkMnZudWS9obkmKB8BykWI29jvLwSmHaxzRe_mDvjrC7hpcwzUiqbssywaYYcq2uQ43QTDDklZUGY22bRpVNXaILCFKqMWdX7wMiW8fer0LL99OfX2eCb9IXKyja_KD0lf1ASXTojcgIy7ED8bLUDDK58E-dzqaIDftaaJ9uDBPx5RaQ14C0WwhgxN-Qg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
<span className="text-on-primary font-headline-sm text-headline-sm text-[16px]">Formation &amp; Tactical Maneuvers</span>
</div>
</div>
<div className="relative rounded-lg overflow-hidden shadow-sm h-64 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Security instructors in high visibility instructor jackets demonstrating industrial dry-powder fire suppression techniques to uniformed male and female Nigerian security trainees outdoors with controlled demonstration fires and extinguisher units in daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuHclXGH6yFSGPi9iVyrF1Bj3DPtDBHYh19aG0C2zZTDpuJ2Q7sK_TP0-1GPnoPhaG0ZfOvPn4tF0f1G5WKvdf4Ge2uwh3ZIRksPcESvtPmlHENT3noqOeG5VNsi0s4D4vsT7tyG7KxANbOj95ssZ3tEdu0awSCIigOBGaDa_MWcbV0h7J__MITGz9LtMydyh02oxn6xJ2KoQRIaia3bUVYHYjx7psdTisggb7SddPjda-ngrBl43V0w"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
<span className="text-on-primary font-headline-sm text-headline-sm text-[16px]">Fire Response &amp; Evacuation Drills</span>
</div>
</div>
<div className="relative rounded-lg overflow-hidden shadow-sm h-64 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Classroom setting inside modern security academy in Lagos, female and male trainees in neat navy shirts seated at desks with laptops and manuals, learning digital incident logging and diplomatic reception security protocols from an instructor at an interactive smart board." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxbEUlKrHi-AY0jfz6ILTQdrAlKbbUfnFWD70L7Px2ERUA3EbN1lRIP_Cmey-vDT_5Crmi84E4nqdTCJClQ74o9XMZjp1-2lvked4pfgkr4xZf3xpdE_-1AfF-HC_3PYnKFcYWnYMq38tbQTY-xS0S07RfNUJJCj3yJLovqP-EY65H9Vg2YrhHs7IMfXDGYplJVagPk5gAtsrj3Ir4T1x53pDyKxWEYELgyQHu-zgZziCHE7haqsSlnQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
<span className="text-on-primary font-headline-sm text-headline-sm text-[16px]">Digital Incident Logging &amp; Concierge Etiquette</span>
</div>
</div>
</div>
</div>
</section>
{/*  Core Values Matrix  */}
<section className="w-full bg-surface py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto space-y-12">
<div className="text-center max-w-2xl mx-auto">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">THE KOMBAT CREED</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-2">
          Values That Govern Every Post &amp; Patrol
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
          Our core pillars differentiate Davita Kombat from legacy guard agencies. We uphold military-grade execution while treating every officer as our greatest strategic capital.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[28px]">shield</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Uncompromising Vigilance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Zero lapses at perimeter access points. Routine surprise inspections by Field Supervisors at 0200 and 0400 hours ensure guards remain alert, engaged, and ready for threat neutralisation.
            </p>
</div>
<div className="mt-6 flex items-center gap-1.5 text-secondary font-label-tactical text-label-tactical uppercase">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Continuous Perimeter Scans</span>
</div>
</div>
<div className="p-8 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[28px]">gavel</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Operational Integrity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every incident log, visitor manifest, and patrol timestamp is tamper-proof. We maintain an independent Whistleblower Channel and conduct mandatory random drug/alcohol screening.
            </p>
</div>
<div className="mt-6 flex items-center gap-1.5 text-secondary font-label-tactical text-label-tactical uppercase">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Immutable Reporting</span>
</div>
</div>
<div className="p-8 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[28px]">memory</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Technological Edge</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Guards are synced via GPS NFC patrol wands, facial recognition visitor terminals, body-worn cameras in critical areas, and automated panic links back to our Lagos C4I desk.
            </p>
</div>
<div className="mt-6 flex items-center gap-1.5 text-secondary font-label-tactical text-label-tactical uppercase">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>AI-Driven Patrol Tracking</span>
</div>
</div>
<div className="p-8 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Rapid Welfare Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              A content guard is a vigilant guard. We pay top-decile industry salaries on or before the 25th, provide comprehensive health HMO, life insurance, and subsidized operational meals.
            </p>
</div>
<div className="mt-6 flex items-center gap-1.5 text-secondary font-label-tactical text-label-tactical uppercase">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Industry-Leading Officer Pay</span>
</div>
</div>
</div>
</div>
</section>
{/*  Executive Leadership Team  */}
<section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">COMMAND STRUCTURE</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-2">
            Executive Leadership &amp; Board
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2">
            Led by veterans of the Nigerian Armed Forces, State Security Services, and Fortune 500 risk departments with over 90 years of combined operational command.
          </p>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1 bg-surface-container-highest rounded text-primary font-label-tactical text-label-tactical uppercase">
            HEADQUARTERS BOARD
          </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Leader 1  */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group">
<div className="h-72 w-full overflow-hidden relative bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Professional studio portrait of an authoritative Nigerian male executive in his early 50s, wearing an executive dark charcoal bespoke suit with a lapel badge, confident leadership expression, ex-military demeanor, warm office lighting with subtle navy background tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGEEYQ6zXZIavjdh12T0J2HPQR5OX2jndvQaIIRB6jVrIsrDocpjB8L7xdnq4yqMcUQpqF-iW8aV4XCryH87rCuGLnfJjXbr2j-iqr3F8No45gneECoBXy1bjJlZx_bj4LXxZGDvJ7s9s3fZxFll6yo13GFaCeYuzYSkFzHjMGjGqw-RL0UtehTVcazQ2veHLn29Oj_BJpGYgiBO6PpE7xifV7mksBl_dnwAcfsRHK4gfa02pPjbqAjg"/>
<div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-primary text-on-primary font-label-tactical text-label-tactical uppercase">
              EX-ARMY BRIG.
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Col. Babatunde Adeyemi (Rtd.)</h3>
<p className="font-label-md text-label-md text-secondary font-semibold mt-1">Managing Director &amp; CEO</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                Over 28 years commanding tactical divisions in the Nigerian Army followed by 10 years directing security for international energy consortia in the Niger Delta.
              </p>
</div>
<div className="mt-4 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">shield</span>DSS Fellow</span>
<span className="text-primary font-semibold">Victoria Island</span>
</div>
</div>
</div>
{/*  Leader 2  */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group">
<div className="h-72 w-full overflow-hidden relative bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Distinguished Nigerian female executive in her late 40s in professional dark navy blazer with folded arms, intelligent and determined expression, corporate boardroom backdrop in Lagos with subtle ambient light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiIOsaxEL92dTgEIP8kDcCj-Ij-msodDsAKzc5_lJMEoWTVinighAy_7azCOmb7zmvf3H0ffo1JrysnQW4TbcZnyzuZ7afLSeu34nHzffCqpSNTi0jzTXZJ3xer_o9c3hNH-9QxkQ0up-2cSzkjahfLRKDxiftv3UNo1TP84dyuADEwLUHEdt3noTg2k6MLJlKVra9pKJiOiLsZW-Oc82f1T5ykamwUkiiRAtUYj9cpNzsjeIcOSrV5g"/>
<div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-tactical text-label-tactical uppercase">
              EX-DOP POLICE
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Hajia Amina Sanusi, CPP</h3>
<p className="font-label-md text-label-md text-secondary font-semibold mt-1">Director of Field Operations</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                Former Commissioner of Police (Operations) with specialized counter-terrorism training from Bramshill Police College, UK. Oversees our 1,850+ active guarding division.
              </p>
</div>
<div className="mt-4 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">verified</span>ASIS Member</span>
<span className="text-primary font-semibold">Abuja Base</span>
</div>
</div>
</div>
{/*  Leader 3  */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group">
<div className="h-72 w-full overflow-hidden relative bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Portrait of a young tech-forward Nigerian male leader in late 30s wearing a modern navy shirt and glasses, smiling confidently against high-tech control center background with subtle blue server racks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtiFjSZHCtoVFHiqzM1YvZcff5sShRKD2pv2T3y3oiPOfs-ugOtCrDM9p9TcL8tB0aU8NbomRUbTaFf1Xsv1fgsGa5ClcmfPBPvGjke5Y8UKP5k_vR06JntgJbzRNimM20tMAZeuc2hBL-gt5sxOZEG0n2YkZgZE0lwpnh6PNHUJayEsjMhhZQdJraFc797xvrroQ3q_40Z71pNcheZAWvMR5nvkpAjegQIpz_mBpwNLRH3voUh9b8bw"/>
<div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-primary text-on-primary font-label-tactical text-label-tactical uppercase">
              CYBER &amp; IOT
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Dr. Chinedu Okafor</h3>
<p className="font-label-md text-label-md text-secondary font-semibold mt-1">Chief Technology Officer (CTO)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                Pioneered algorithmic crowd video surveillance and IoT remote perimeter tripwires. Holds patents in automated biometric access verification architectures.
              </p>
</div>
<div className="mt-4 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">memory</span>C4I Systems</span>
<span className="text-primary font-semibold">Lagos Tech Lab</span>
</div>
</div>
</div>
{/*  Leader 4  */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group">
<div className="h-72 w-full overflow-hidden relative bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Portrait of a sharp corporate Nigerian woman in early 40s in elegant charcoal professional attire, holding a leather folio, confident smile, clean corporate architectural background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRED9A2RcQh7O8b3wjG82dkZKjbkeZC8BSjwVRflk4jeBzrvdXuuL9BulrY6RoHg-wEljNpJDIvMF0lqg_pZMpIXpKK-RvPg44JT_Vm8DTGOYYNGbqzan79JXDUKgEyB7x564v9ksY2Vnl4rGC1XzMrTgiVVpw3MCd3SmXINY_4h7FqSeY3ruDC83gkNe47QLWj8BZ55Ez2LwYHqyskIPGXQa3imO0OsH1TJymkkIagukcwPMS0Jta6Q"/>
<div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-tactical text-label-tactical uppercase">
              LEGAL COUNSEL
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Barr. Folashade Adeleke, SAN</h3>
<p className="font-label-md text-label-md text-secondary font-semibold mt-1">General Counsel &amp; Regulatory Head</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                Expert in Nigerian private guard regulatory statutes, labor compliances, maritime cabotage, and liaison protocols with federal defense agencies.
              </p>
</div>
<div className="mt-4 pt-4 bg-surface-container-low -mx-6 -mb-6 p-4 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">policy</span>Bar Council</span>
<span className="text-primary font-semibold">Compliance Office</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Accreditations & Regulatory Matrix  */}
<section className="w-full bg-surface py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto space-y-12">
<div className="text-center max-w-2xl mx-auto">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">REGULATORY RIGOR</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-2">
          Licenses &amp; Institutional Accreditations
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
          Davita Kombat operates with 100% legal clarity under the Federal Ministry of Interior and all statutory Nigerian regulatory frameworks.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Lic 1  */}
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded bg-surface-container-highest text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<span className="font-label-tactical text-label-tactical text-secondary uppercase">FEDERAL REGISTRATION</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">NSCDC Class-A License</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Highest-tier certification issued by the Nigeria Security and Civil Defence Corps (Lic: 0092/PGC/FED), allowing nationwide tactical static and mobile deployment.
            </p>
</div>
<div className="mt-6 pt-3 flex items-center justify-between font-label-md text-label-md text-primary font-semibold">
<span>Renewed • 2025/2026</span>
<span className="material-symbols-outlined text-secondary text-[18px]">check</span>
</div>
</div>
{/*  Lic 2  */}
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded bg-surface-container-highest text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<span className="font-label-tactical text-label-tactical text-secondary uppercase">GLOBAL BENCHMARK</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">ASIS Corporate Member</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Active corporate membership in ASIS International (Chapter 206 Lagos), adhering strictly to global standards in security management and enterprise risk reduction.
            </p>
</div>
<div className="mt-6 pt-3 flex items-center justify-between font-label-md text-label-md text-primary font-semibold">
<span>Chapter 206 Accredited</span>
<span className="material-symbols-outlined text-secondary text-[18px]">check</span>
</div>
</div>
{/*  Lic 3  */}
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded bg-surface-container-highest text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<span className="font-label-tactical text-label-tactical text-secondary uppercase">STANDARDS ORGANIZATION</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">ISO 9001:2015 Quality</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Standardized, audited quality management across our control rooms, personnel intake, site risk appraisals, and guard dispatch protocols.
            </p>
</div>
<div className="mt-6 pt-3 flex items-center justify-between font-label-md text-label-md text-primary font-semibold">
<span>Cert No: QMS-NG-8891</span>
<span className="material-symbols-outlined text-secondary text-[18px]">check</span>
</div>
</div>
{/*  Lic 4  */}
<div className="p-6 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded bg-surface-container-highest text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[24px]">local_police</span>
</div>
<span className="font-label-tactical text-label-tactical text-secondary uppercase">STATE COOPERATION</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">NPF Spy Police Link</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Licensed integration framework with the Nigerian Police Force Supernumerary (SPY) unit for high-value logistics escorts and cash-in-transit protective operations.
            </p>
</div>
<div className="mt-6 pt-3 flex items-center justify-between font-label-md text-label-md text-primary font-semibold">
<span>MoU Active • Tier-1</span>
<span className="material-symbols-outlined text-secondary text-[18px]">check</span>
</div>
</div>
</div>
</div>
</section>
{/*  Corporate Social Responsibility (CSR)  */}
<section className="w-full bg-surface-container-lowest py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6 space-y-6">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">GIVING BACK TO NIGERIA</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">
          Protecting Our Communities: The Kombat Shield Initiative
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          True security cannot exist behind private high walls while the surrounding community is neglected. Through the Kombat Shield Initiative, Davita Kombat actively invests in grassroots public safety, education, and career paths for Nigerian veterans.
        </p>
<div className="space-y-4 pt-2">
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">school</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Safe Schools Perimeter Program</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Providing complimentary security audits, CCTV installations, and unarmed gate wardens to 18 public primary and secondary schools in vulnerable Lagos and Abuja suburbs.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">military_tech</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Veteran Career Reintegration</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Direct employment pipeline and civilian career retraining for honorably discharged personnel of the Nigerian Armed Services, with pension and healthcare support.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">nightlight_round</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Night-Owl Community Neighborhood Patrols</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Volunteer motorized night patrols supporting local community development associations (CDAs) across Eti-Osa and Ikeja local government areas.
              </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="rounded-xl overflow-hidden shadow-lg bg-surface-container">
<img className="w-full h-[480px] object-cover" alt="Uniformed Davita Kombat community outreach officers" src="/images/security_hero_3.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-lg bg-primary text-on-primary shadow-xl max-w-xs">
<p className="font-headline-lg text-headline-lg text-secondary-fixed font-extrabold leading-none">18+</p>
<p className="font-headline-sm text-headline-sm mt-1">Adopted Schools Protected</p>
<p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Free perimeter monitoring protecting over 12,000 pupils daily.</p>
</div>
</div>
</div>
</section>
{/*  Interactive Risk Advisory & Security Assessment CTA  */}
<section className="w-full bg-surface-container-high py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto rounded-2xl bg-surface-container-lowest p-8 lg:p-14 shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-8 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-tactical text-label-tactical uppercase">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            CONFIDENTIAL ENGAGEMENT
          </div>
<h2 className="font-headline-xl text-headline-xl text-primary font-extrabold">
            Ready to Upgrade Your Corporate Security Posture?
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Connect directly with our Victoria Island or Abuja command team. We deliver on-site risk audits, guard force transition plans, and unified CCTV coverage proposals within 48 hours.
          </p>
<div className="pt-4 flex flex-wrap items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Emergency Dispatch Direct</p>
<p className="font-headline-sm text-headline-sm text-primary font-bold">08031696371</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Corporate Client Inquiries</p>
<p className="font-headline-sm text-headline-sm text-primary font-bold">ops@davitakombat.com</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-4">
<a className="w-full py-4 px-6 rounded bg-primary hover:bg-primary-container text-on-primary font-label-tactical text-label-tactical text-center uppercase tracking-wider shadow-md transition-all" data-path="contact-quote" href="#">
            Schedule Site Threat Assessment
          </a>
<a className="w-full py-4 px-6 rounded bg-surface-container hover:bg-surface-variant text-primary font-label-tactical text-label-tactical text-center uppercase tracking-wider transition-all" data-path="guarding-patrol" href="#">
            Explore Guarding &amp; Patrol Services
          </a>
<p className="text-center font-label-md text-label-md text-outline">
            Class-A Certified • NDA Guaranteed • Fast Deployment
          </p>
</div>
</div>
</div>
</section>
</div></main>
      <Footer /><footer className="w-full bg-primary-container text-on-primary-fixed border-t border-primary"><div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-primary-fixed-dim/20"><div className="lg:col-span-2 space-y-4"><div className="flex items-center gap-3"><img alt="Davita Kombat Seal" className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-fixed-dim/40" src="https://lh3.googleusercontent.com/aida/AEtjO1UCled8xise8oMK6JHXylMu-2rot9O_eo5uMsCbHspn9lnHwuPStkDUQTn4vZZvsw3nqsQeC86hnXxIKbzuB73m2NbBlygp0A1k73p7VN0YV9XkfkBZ9RWJcH_Y6GyKxiU4xzU9EuzB5BRZCmbjJSj_88AsPXRduLxyQBlbIkHDGs0TTb4RkewN_lRQjiT2f1ZbN1RBvp7V5lUWiZ5KEMccdDYHA9LMvff_qZKNjc6wq7lDj3PD5j-Fv24yBAZv9UtzqEbvRfKom_Q"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-primary font-bold">Davita Kombat</span><span className="font-label-tactical text-label-tactical text-primary-fixed-dim uppercase tracking-wider">Guarding • Surveillance • Tactical Escort</span></div></div><p className="font-body-sm text-body-sm text-surface-container-high/80 pr-6">Federal Republic of Nigeria Private Guard Company (PGC) Tier-1 Certified Operator. Defending diplomatic missions, industrial facilities, maritime hubs, and corporate infrastructure across West Africa since 2008.</p><div className="flex flex-wrap gap-2 pt-2"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-primary-fixed font-label-tactical text-label-tactical uppercase"><span className="material-symbols-outlined text-[14px] text-secondary-fixed">verified</span>NSCDC LIC: 0092/PGC/FED</span><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-primary-fixed font-label-tactical text-label-tactical uppercase"><span className="material-symbols-outlined text-[14px] text-secondary-fixed">shield_with_heart</span>ISO 9001:2015 CERTIFIED</span></div></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Security Solutions</h4><ul className="space-y-2.5 font-body-sm text-body-sm"><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Static Guard Force</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Armed Escort &amp; VIP MPU</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>AI CCTV &amp; Control Rooms</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Access Control &amp; Biometrics</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Canine Unit (K9) Patrols</span></li></ul></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Command Centers</h4><div className="space-y-4 font-body-sm text-body-sm text-surface-container-high/80"><div><p className="font-bold text-on-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed">location_on</span>Head Office</p><p>KM 12 airport road giri village gwagwalada Abuja</p></div><div><p className="font-bold text-on-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed">business</span>Branch Office</p><p>KM 12 kachia road by TMD plaza new ungwan modern market Kaduna Nigeria</p></div></div></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Ops Intelligence Alert</h4><p className="font-body-sm text-body-sm text-surface-container-high/80 mb-3">Subscribe to monthly Nigerian security bulletins and threat matrix reports.</p><div className="flex flex-col gap-2"><input className="w-full px-3 py-2 text-body-sm bg-primary border border-outline/30 rounded text-on-primary placeholder:text-surface-dim focus:outline-none focus:border-secondary-container" placeholder="executive@company.com" type="email"/><button className="w-full py-2 px-3 rounded bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors" type="button">RECEIVE BRIEFINGS</button></div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-surface-container-high/60"><div>© 2025 Davita Kombat Security Services Ltd. RC: 489210. All Rights Reserved.</div><div className="flex items-center gap-6 font-label-md text-label-md"><a className="hover:text-on-primary transition-colors" data-path="regulatory-compliance" href="#">NSCDC Reg. Compliance</a><a className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="#">Terms of Engagement</a><a className="hover:text-on-primary transition-colors" data-path="whistleblower-hotline" href="#">Whistleblower Channel</a></div></div></div></footer>
    </>
  )
}
