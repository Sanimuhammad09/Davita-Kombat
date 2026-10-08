import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/guarding-patrol')({
  component: GuardingPatrolComponent,
})

function GuardingPatrolComponent() {
  return (
    <>
<Header /><main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]"><div className="flex flex-col w-full">
<section className="w-full bg-surface-container-low py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-highest text-primary">
<span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
<span className="font-label-tactical text-label-tactical tracking-widest uppercase">NSCDC TIER-1 PROTOCOL • FORMATION ACTIVE</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-tactical text-label-tactical uppercase text-on-surface-variant">Live Guard Force: <strong className="text-primary font-bold">1,840+ ON DUTY</strong></span>
</div>
<div className="hidden sm:flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-secondary">satellite_alt</span>
<span className="font-label-tactical text-label-tactical uppercase">GPS Sentinel Telemetry: 100% PING</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="space-y-3">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">Division: Static, Mobile &amp; VIP Protective Details</span>
<h1 className="font-headline-xl text-headline-xl text-primary font-extrabold uppercase tracking-tight">Elite Manned Guarding &amp; Physical Protection Services</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Disciplined, certified Nigerian security personnel equipped with state-of-the-art telemetry, biometric identity verification, and uncompromising paramilitary uniform standards.</p>
</div>
<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary-container hover:bg-primary text-on-primary font-label-tactical text-label-tactical uppercase tracking-wider shadow-sm transition-all" href="#quote-calculator">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
<span>Deploy Guard Detail</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors" href="#sop-matrix">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Inspect Operational SOP</span>
</a>
</div>
<div className="grid grid-cols-3 gap-4 pt-4">
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="block font-headline-lg text-headline-lg font-bold text-primary">99.8%</span>
<span className="font-label-tactical text-label-tactical uppercase text-on-surface-variant">Post Punctuality</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="block font-headline-lg text-headline-lg font-bold text-secondary">24-48h</span>
<span className="font-label-tactical text-label-tactical uppercase text-on-surface-variant">Mobilization SLA</span>
</div>
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="block font-headline-lg text-headline-lg font-bold text-primary">0%</span>
<span className="font-label-tactical text-label-tactical uppercase text-on-surface-variant">Unscreened Personnel</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high">
<img alt="Davita Kombat Security Officers inspecting corporate entry credentials at Lagos Headquarters" className="w-full h-[460px] object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVmyANPQv8lRI80y6C7bBzWgnGBFoHOpjhSs8Z_kkL6_pTDoqwLlF96Z_-8AB2VolK3vf7OBVMzmhNMOJ_5Pl01_0TRsvmFbXcDs4RpPcT8utixGMi0wNUPVkGAQRGBB10P1Vu2CsOI_yBHhbxc0vn5PMS1dQH0tAMkZJuRyGyJ65Vb9mV3K94njvPqTMyzvOEOWPVvGwMmnppmkVcTpUMvZoWthBk6TSWmKXdXV6q8FBYYthEx6Jqg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<div>
<p className="font-headline-sm text-headline-sm text-primary text-[15px] font-bold">POST DELTA-04 // CORPORATE ACCESS CONTROL</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Victoria Island Financial Tower • Biometric Badge Scan Verified</p>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-low text-secondary font-label-tactical text-label-tactical">ACTIVE SHIFT</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-16 bg-surface">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
<div className="space-y-2">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">Deployment Matrix</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold uppercase">Certified Guarding Service Tiers</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Every detail is vetted by the Department of State Services (DSS) and certified under NSCDC Category-A requirements.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="h-1.5 w-full bg-secondary"></div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6">
<div className="space-y-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">corporate_fare</span>
</div>
<span className="inline-block px-2.5 py-0.5 rounded bg-surface-container-low text-secondary font-label-tactical text-label-tactical uppercase">TIER 1 • COMMERCIAL</span>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Corporate &amp; Concierge Security</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Front-of-house customer diplomacy combined with ironclad access verification. Tailored for blue-chip headquarters, diplomatic consulates, and financial institutions in Victoria Island and Abuja CBD.</p>
</div>
<ul className="space-y-2 pt-4 font-body-sm text-body-sm text-on-surface border-t border-surface-container-high/60">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Visitor management kiosk management</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Executive turnstile &amp; baggage X-ray screen</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Bilingual concierge personnel available</li>
</ul>
</div>
</div>
<div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="h-1.5 w-full bg-error"></div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6">
<div className="space-y-3">
<div className="w-12 h-12 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[28px]">shield</span>
</div>
<span className="inline-block px-2.5 py-0.5 rounded bg-error-container/50 text-on-error-container font-label-tactical text-label-tactical uppercase">TIER 2 • HIGH THREAT</span>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Armed Tactical Escort &amp; VIP MPU</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Close Protection Officers (PPO) and bullet-resistant convoy escorts for C-suite executives, foreign delegations, and interstate transit across high-friction corridors.</p>
</div>
<ul className="space-y-2 pt-4 font-body-sm text-body-sm text-on-surface border-t border-surface-container-high/60">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-error">check_circle</span>Liaison with Nigerian Mobile Police (MOPOL)</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-error">check_circle</span>Armored B6/B7 convoy lead &amp; sweep chase cars</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-error">check_circle</span>Evasive driving &amp; anti-ambush doctrine</li>
</ul>
</div>
</div>
<div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="h-1.5 w-full bg-primary-container"></div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6">
<div className="space-y-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">factory</span>
</div>
<span className="inline-block px-2.5 py-0.5 rounded bg-surface-container-low text-primary font-label-tactical text-label-tactical uppercase">TIER 3 • INFRASTRUCTURE</span>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Industrial &amp; Critical Infrastructure</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Static defense and perimeter surveillance for oil &amp; gas tank farms, seaports, telecom backbone infrastructure, and mega-warehouses throughout Apapa, Lekki FTZ, and Port Harcourt.</p>
</div>
<ul className="space-y-2 pt-4 font-body-sm text-body-sm text-on-surface border-t border-surface-container-high/60">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Solar-assisted guard tower deployments</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Truck weight bridge &amp; anti-theft cargo tallies</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>Perimeter fence intrusion deterrence wands</li>
</ul>
</div>
</div>
<div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="h-1.5 w-full bg-secondary"></div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6">
<div className="space-y-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">pets</span>
</div>
<span className="inline-block px-2.5 py-0.5 rounded bg-surface-container-low text-secondary font-label-tactical text-label-tactical uppercase">TACTICAL K9 • DETECTION</span>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Mobile Patrol &amp; K9 Unit</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Certified handlers with pedigreed Belgian Malinois and German Shepherds. Specialized in vehicle underside checks, narcotics, IED scent sweep, and rapid night perimeter patrol.</p>
</div>
<ul className="space-y-2 pt-4 font-body-sm text-body-sm text-on-surface border-t border-surface-container-high/60">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Scent detection: explosives, munitions &amp; contraband</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Canine bite apprehension &amp; deterrence display</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Scheduled canine mobile roving units</li>
</ul>
</div>
</div>
<div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="h-1.5 w-full bg-secondary-container"></div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6">
<div className="space-y-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary-container">
<span className="material-symbols-outlined text-[28px]">groups</span>
</div>
<span className="inline-block px-2.5 py-0.5 rounded bg-surface-container-low text-secondary font-label-tactical text-label-tactical uppercase">CIVILIAN • ASSEMBLIES</span>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Event Security &amp; Crowd Management</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Full-spectrum management for high-capacity corporate AGMs, concerts, trade expos at Eko Hotel / Landmark, and private diplomatic functions with zero disruption tolerance.</p>
</div>
<ul className="space-y-2 pt-4 font-body-sm text-body-sm text-on-surface border-t border-surface-container-high/60">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Metal detector gate screening &amp; wanding</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>VIP backstage cordons &amp; ticket verification</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>Rapid medical extraction &amp; crowd de-escalation</li>
</ul>
</div>
</div>
<div className="flex flex-col rounded-xl bg-primary-container text-on-primary shadow-sm hover:shadow-md transition-shadow p-6 justify-between space-y-6">
<div className="space-y-3">
<span className="inline-block px-2.5 py-0.5 rounded bg-secondary text-on-secondary font-label-tactical text-label-tactical uppercase">SPECIALTY POST</span>
<h3 className="font-headline-md text-headline-md font-bold">Custom Enterprise Security SLA</h3>
<p className="font-body-md text-body-md text-surface-container-high/80">Need custom deployment blending static guards, K9 units, drone patrols, and control room dispatchers across multi-state Nigerian operations?</p>
</div>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-primary flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">headset_mic</span>
<div className="text-left">
<p className="font-label-tactical text-label-tactical uppercase text-surface-container-high/70">DIRECT OPS DESK</p>
<p className="font-headline-sm text-headline-sm text-[16px] font-bold text-on-primary">08031696371</p>
</div>
</div>
<a className="w-full py-3 rounded bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-label-tactical uppercase text-center block transition-colors" href="#quote-calculator">Request Bespoke Audit</a>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-16 bg-surface-container-low" id="sop-matrix">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">The Kombat Operational Doctrine</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold uppercase">Standard Operating Procedure (SOP)</h2>
<p className="font-body-md text-body-md text-on-surface-variant">We eliminate guard abandonment, collusion, and lapses through an unyielding 4-stage systematic lifecycle backed by automated electronic logging.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-4">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">01</span>
<span className="material-symbols-outlined text-secondary text-[28px]">search_insights</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Threat Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Site survey examining entry/exit vectors, neighborhood crime telemetry, blind spots, perimeter fence integrity, and lighting coverage.</p>
<div className="pt-2">
<span className="font-label-tactical text-label-tactical uppercase text-outline">TIMELINE: 24 HOURS</span>
</div>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-4">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">02</span>
<span className="material-symbols-outlined text-secondary text-[28px]">rule_folder</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Post Orders Blueprint</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Binding operational manual developed for your specific facility covering access rules, emergency evacuation trees, and communication protocols.</p>
<div className="pt-2">
<span className="font-label-tactical text-label-tactical uppercase text-outline">STAKEHOLDER SIGN-OFF</span>
</div>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-4">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">03</span>
<span className="material-symbols-outlined text-secondary text-[28px]">badge</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Hand-Selection &amp; Induction</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guards matched based on physical profile and communication skill. Undergo site-specific briefings, mock fire drills, and supervisor orientation.</p>
<div className="pt-2">
<span className="font-label-tactical text-label-tactical uppercase text-outline">DSS &amp; BIOMETRIC CLEARANCE</span>
</div>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-4">
<div className="flex items-center justify-between">
<span className="w-10 h-10 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">04</span>
<span className="material-symbols-outlined text-secondary text-[28px]">fmd_good</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">24/7 Digital GPS Logging</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Officers tap RFID checkpoints every 30 minutes with patrol wands. Automated alerts flash to our Central Command if any point is missed.</p>
<div className="pt-2">
<span className="font-label-tactical text-label-tactical uppercase text-secondary font-bold">LIVE TELEMETRY BACKED</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-16 bg-surface">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-6">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">Guard Gear &amp; Uniform Standards</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold uppercase">Engineered Tactical Presentation</h2>
<p className="font-body-md text-body-md text-on-surface-variant">A slovenly guard invites breaches. Davita Kombat officers exhibit razor-sharp discipline in tailored ripstop uniforms, standardized identification badges, and enterprise telemetry gear.</p>
<div className="space-y-4 pt-2">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">qr_code_2</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">Tamper-Proof Holographic Badge</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Includes encrypted QR code matching NSCDC biometric registry and company database to prevent imposter infiltration.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">videocam</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">Encrypted 1080p Body Cams</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous rolling buffer with real-time video upload for dispute resolution, guard audit, and tamper-resistant evidence logging.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">cell_tower</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">Motorola VHF/UHF Encrypted Radios</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Direct frequency link connecting post guards instantly to our central command room in VI and regional base stations.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">nfc</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">RFID Electronic Patrol Wand</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Indestructible solar-charged datalogger that verifies patrol checkpoint visits at the perimeter and records exact time-stamps.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm p-4 space-y-3">
<div className="h-48 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Close up photograph of a professional Nigerian private security uniform with embroidered Davita Kombat emblem, crisp navy blue fabric, high-visibility brass buttons, and tactical lapels." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByTsRJwqHWtZZAzFYKpZsEerTZrgFD4QMjOhq242B96qNRqIE-d9PkWAS9nCXyP3ohmPrRzXVlim53O1IqrYCzjZFsHpf18wU29OZn3U-GzdEKxxeqkUapQ7v19euRZ3rMyN33Lp2PiISupKCAero7u1EhvZS9IO1cXEPe1od53XpARGvJyT9TLuxEgfuB3VPz1YnijPX1mZE3cAjTuxZ-A1jqW5-BOnVpjMmrCUlahqjz7VxGTjaAZQ"/>
</div>
<div>
<span className="font-label-tactical text-label-tactical uppercase text-secondary">SPECS • APPAREL</span>
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">Navy Heavy Ripstop Uniform</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Double-stitched reinforced seams with breathable moisture-wicking weave suitable for tropical West African climate.</p>
</div>
</div>
<div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm p-4 space-y-3">
<div className="h-48 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Tactical gear equipment array on a clean table: heavy duty Motorola two way walkie talkie, RFID patrol scanning wand, high lumen LED tactical flashlight, and professional metal security badge." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXrlle5JZ1ju6rxfzXCgfLzqeOKXNAdZM0ea-i36N12sb0BHqO7jHF9BSMTzlCUHsQszUhCWYi3YfQk8pHORxoDCOt0Qc1tkJ70tNw0mrsj3rcd6vBZ3cfC11HzqRj0tnOAlruSjeUpANocjUpYFgmte4KB2hxydFEQMkSPWZVxTIk0v_uVuIU_dRTK2Yh1Nd4zsphAjAJ94qyVnLWDfn6bfPTYQADihCQvH-1d3n-pNSf3i-Ekm1ybA"/>
</div>
<div>
<span className="font-label-tactical text-label-tactical uppercase text-secondary">SPECS • TELEMETRY</span>
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">Command Link Telemetry Pack</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Equipped with 2000-lumen strobe torches, non-lethal deterrent baton, tactical duty belts, and redundant emergency call buttons.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-16 bg-surface-container-low" id="quote-calculator">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-5 space-y-6">
<span className="font-label-tactical text-label-tactical text-secondary tracking-widest uppercase">Fast-Track Deployment</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold uppercase">Guard Deployment Inquiry</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Submit your facility requirements for immediate dispatch analysis. Our operational commanders provide quotes and site surveys within 24 hours.</p>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm space-y-4">
<h4 className="font-headline-sm text-headline-sm text-[16px] text-primary font-bold">Deployment Guarantees</h4>
<div className="space-y-3 font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
<span>Rapid relief guards within 60 mins if an officer is indisposed</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">fact_check</span>
<span>All personnel covered by ₦100,000,000 Public Liability Insurance</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">support_agent</span>
<span>Assigned Sector Commander with 24/7 direct phone line</span>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-primary text-on-primary flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error text-[24px]">call</span>
<div>
<p className="font-label-tactical text-label-tactical uppercase text-surface-container-high/70">EMERGENCY HOTLINE</p>
<p className="font-headline-sm text-headline-sm text-[16px] font-bold">0700-DAVITA-OPS</p>
</div>
</div>
<span className="px-2 py-1 rounded bg-error text-on-error font-label-tactical text-label-tactical uppercase">DIRECT</span>
</div>
</div>
<div className="lg:col-span-7">
<div className="p-8 rounded-xl bg-surface-container-lowest shadow-md">
<form className="space-y-6" id="guard-inquiry-form" onSubmit={(e) => e.preventDefault()}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Full Name • Rank</label>
<input className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none" placeholder="Col. Emeka Okonjo (Rtd) / Director" required={true} type="text"/>
</div>
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Company / Organization</label>
<input className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none" placeholder="Apex Logistics PLC" required={true} type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Work Email</label>
<input className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none" placeholder="director@company.com.ng" required={true} type="email"/>
</div>
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Phone Number (WhatsApp Active)</label>
<input className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none" placeholder="+234 803 000 0000" required={true} type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Guarding Tier Required</label>
<select className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none">
<option>Corporate &amp; Concierge Static Guards</option>
<option>Industrial Facility &amp; Warehouse Security</option>
<option>Armed Close Protection &amp; VIP Escort</option>
<option>Tactical K9 Detection Units</option>
<option>Event Crowd Management &amp; Access Gates</option>
</select>
</div>
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Operational Location (State / City)</label>
<select className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none">
<option>Lagos (Island - Ikoyi, VI, Lekki)</option>
<option>Lagos (Mainland - Ikeja, Apapa, Surulere)</option>
<option>Abuja FCT (CBD, Maitama, Asokoro)</option>
<option>Rivers State (Port Harcourt, Onne)</option>
<option>Ogun State (Sagamu, Agbara Industrial Zone)</option>
<option>Delta / Edo Oil Corridors</option>
<option>Other Nigerian States</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Number of Guards Needed</label>
<select className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none">
<option>1 - 4 Guards (Small Office / Residence)</option>
<option>5 - 12 Guards (Medium Commercial Facility)</option>
<option>13 - 30 Guards (Industrial Plant / School Campus)</option>
<option>30+ Guards (Large Infrastructure / FTZ)</option>
</select>
</div>
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Shift Structure</label>
<select className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none">
<option>24/7 Continuous (12-hour rotating shifts)</option>
<option>Day Only (07:00 - 19:00)</option>
<option>Night Only (19:00 - 07:00)</option>
<option>Special Event (Short-term 1 - 7 Days)</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold block">Special Directives &amp; Facility Notes</label>
<textarea className="w-full px-3 py-2.5 rounded bg-surface border border-outline-variant text-on-surface text-body-md focus:border-secondary focus:outline-none" placeholder="Provide any special instructions regarding firearms escort, gate visitor logs, perimeter size, or target start date..." rows={Number("3")}></textarea>
</div>
<div className="hidden p-4 rounded bg-surface-container text-secondary text-body-sm font-semibold flex items-center gap-2" id="form-success-banner">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<span>Inquiry logged with Command Dispatch. Sector Commander will contact you within 2 business hours.</span>
</div>
<button className="w-full py-4 rounded bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors shadow-sm" type="submit">
                Request Deployment Assessment &amp; Tariff
              </button>
</form>
</div>
</div>
</div>
</div>
</section>
</div></main>
      <Footer /><footer className="w-full bg-primary-container text-on-primary-fixed border-t border-primary"><div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-primary-fixed-dim/20"><div className="lg:col-span-2 space-y-4"><div className="flex items-center gap-3"><img alt="Davita Kombat Seal" className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-fixed-dim/40" src="https://lh3.googleusercontent.com/aida/AEtjO1UCled8xise8oMK6JHXylMu-2rot9O_eo5uMsCbHspn9lnHwuPStkDUQTn4vZZvsw3nqsQeC86hnXxIKbzuB73m2NbBlygp0A1k73p7VN0YV9XkfkBZ9RWJcH_Y6GyKxiU4xzU9EuzB5BRZCmbjJSj_88AsPXRduLxyQBlbIkHDGs0TTb4RkewN_lRQjiT2f1ZbN1RBvp7V5lUWiZ5KEMccdDYHA9LMvff_qZKNjc6wq7lDj3PD5j-Fv24yBAZv9UtzqEbvRfKom_Q"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-primary font-bold">Davita Kombat</span><span className="font-label-tactical text-label-tactical text-primary-fixed-dim uppercase tracking-wider">Guarding • Surveillance • Tactical Escort</span></div></div><p className="font-body-sm text-body-sm text-surface-container-high/80 pr-6">Federal Republic of Nigeria Private Guard Company (PGC) Tier-1 Certified Operator. Defending diplomatic missions, industrial facilities, maritime hubs, and corporate infrastructure across West Africa since 2008.</p><div className="flex flex-wrap gap-2 pt-2"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-primary-fixed font-label-tactical text-label-tactical uppercase"><span className="material-symbols-outlined text-[14px] text-secondary-fixed">verified</span>NSCDC LIC: 0092/PGC/FED</span><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-primary-fixed font-label-tactical text-label-tactical uppercase"><span className="material-symbols-outlined text-[14px] text-secondary-fixed">shield_with_heart</span>ISO 9001:2015 CERTIFIED</span></div></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Security Solutions</h4><ul className="space-y-2.5 font-body-sm text-body-sm"><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Static Guard Force</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Armed Escort &amp; VIP MPU</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>AI CCTV &amp; Control Rooms</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Access Control &amp; Biometrics</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Canine Unit (K9) Patrols</span></li></ul></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Command Centers</h4><div className="space-y-4 font-body-sm text-body-sm text-surface-container-high/80"><div><p className="font-bold text-on-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed">location_on</span>Head Office</p><p>KM 12 airport road giri village gwagwalada Abuja</p></div><div><p className="font-bold text-on-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed">business</span>Branch Office</p><p>KM 12 kachia road by TMD plaza new ungwan modern market Kaduna Nigeria</p></div></div></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Ops Intelligence Alert</h4><p className="font-body-sm text-body-sm text-surface-container-high/80 mb-3">Subscribe to monthly Nigerian security bulletins and threat matrix reports.</p><div className="flex flex-col gap-2"><input className="w-full px-3 py-2 text-body-sm bg-primary border border-outline/30 rounded text-on-primary placeholder:text-surface-dim focus:outline-none focus:border-secondary-container" placeholder="executive@company.com" type="email"/><button className="w-full py-2 px-3 rounded bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors" type="button">RECEIVE BRIEFINGS</button></div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-surface-container-high/60"><div>© 2025 Davita Kombat Security Services Ltd. RC: 489210. All Rights Reserved.</div><div className="flex items-center gap-6 font-label-md text-label-md"><a className="hover:text-on-primary transition-colors" data-path="regulatory-compliance" href="#">NSCDC Reg. Compliance</a><a className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="#">Terms of Engagement</a><a className="hover:text-on-primary transition-colors" data-path="whistleblower-hotline" href="#">Whistleblower Channel</a></div></div></div></footer>
    </>
  )
}
