import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/sectors')({
  component: SectorsComponent,
})

function SectorsComponent() {
  return (
    <>
<Header /><main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]"><div className="flex flex-col w-full">
{/*  Top Tactical Status Bar  */}
<section className="w-full bg-surface-container-high py-2.5 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-label-tactical text-label-tactical uppercase">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary text-on-secondary font-semibold">
<span className="w-2 h-2 rounded-full bg-on-secondary animate-pulse"></span>
          SECTOR READINESS: ALPHA 1
        </span>
<span className="text-on-surface-variant font-medium">TERRAIN OPS: 36 STATES + FCT DEPLOYED</span>
</div>
<div className="flex items-center gap-6 text-on-surface-variant font-medium">
<span className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>NSCDC CLASS-A LICENSED</span>
<span className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary">local_police</span>NIPEX CODE: 8841-KBT</span>
<span className="inline-flex items-center gap-1.5 text-error font-bold"><span className="material-symbols-outlined text-[16px]">support_agent</span>DIRECT CONTROL: 0700-DAVITA</span>
</div>
</div>
</section>
{/*  Hero Section  */}
<section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 flex flex-col space-y-6">
<div className="flex items-center gap-3">
<span className="h-0.5 w-10 bg-secondary"></span>
<span className="font-label-tactical text-label-tactical uppercase tracking-wider text-secondary">INDUSTRY-SPECIFIC DEFENSE MATRIX</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary uppercase leading-tight font-extrabold">
            Tailored Security Architecture for <span className="text-secondary">Vital Nigerian Sectors</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            From the financial arteries of Lagos Island to remote critical infrastructure in the Niger Delta and fortified diplomatic enclaves in Abuja, Davita Kombat deploys institutional rigor, intelligence-led protocols, and elite human capital.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary hover:bg-primary-container text-on-primary font-label-tactical text-label-tactical uppercase tracking-wider shadow-sm transition-all" href="#sector-assessment">
<span className="material-symbols-outlined text-[18px]">engineering</span>
<span>REQUEST SECTOR BLUEPRINT</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container-high hover:bg-surface-variant text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-all" href="#sector-matrix">
<span>EXPLORE DEPLOYMENT PROFILES</span>
<span className="material-symbols-outlined text-[18px]">arrow_downward</span>
</a>
</div>
</div>
<div className="lg:col-span-4 relative">
<div className="relative bg-surface-container p-6 rounded-lg shadow-md">
<div className="absolute -top-3 -right-3 bg-error text-on-error font-label-tactical text-label-tactical uppercase px-3 py-1 rounded shadow-sm">
              LIVE NATIONWIDE SPREAD
            </div>
<div className="aspect-4/3 rounded overflow-hidden mb-5">
<img className="w-full h-full object-cover" data-alt="Nigerian private tactical patrol commander inspecting armored vehicles and communication command equipment at a high-tech corporate campus in Victoria Island Lagos under bright daylight with crisp corporate atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYvYwjajCtB6Ee5wxBaIDf7oDZB6Uw332BIgCCTodOV--CCg5h-BauP4jtlow9ILI5jSQKjwqWigfEJpcI1MuIJLiyd7xNb7tuINUB4hCQXHwK_ROCtsZvzKw5Ka_g-UVlx-CSTHv97tNUXjgA1Wm6Jrk_Cj3-gMaB5tE6GSNLyRQdJa3LOihPrrBL01xTWQw2dXo3rA1nh0YPaE6v9ZwT4Kn5lv-4370GOiy1yg-yQZgou3V8vgULTA"/>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant">
<span>Critical Asset Coverage</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">99.98%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{}}></div>
</div>
<p className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider pt-1">Audited by NSCDC Inspectorate • Q1 2025</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Empirical Track Record Highlight Bar  */}
<section className="w-full bg-primary text-on-primary py-12 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-primary-container p-8 rounded-lg flex flex-col justify-between space-y-4">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary-fixed text-[36px]">verified</span>
<span className="font-label-tactical text-label-tactical text-primary-fixed uppercase tracking-wider">DEFENSE STANDARD</span>
</div>
<div>
<div className="font-display-lg text-display-lg font-extrabold text-on-primary leading-none">0%</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary-fixed mt-2">Breach Rate</h3>
<p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Across fortified Tier-1 financial vaults, embassy quarters, and bullion transit operations.</p>
</div>
<div className="pt-2 text-label-tactical font-label-tactical text-secondary-fixed-dim uppercase">Zero Perimeter Compromise Since 2011</div>
</div>
<div className="bg-primary-container p-8 rounded-lg flex flex-col justify-between space-y-4">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary-fixed text-[36px]">trending_down</span>
<span className="font-label-tactical text-label-tactical text-primary-fixed uppercase tracking-wider">LOSS MITIGATION</span>
</div>
<div>
<div className="font-display-lg text-display-lg font-extrabold text-on-primary leading-none">85%</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary-fixed mt-2">Shrinkage Reduction</h3>
<p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Measured across FMCG warehouses, industrial distribution hubs, and dockside yards.</p>
</div>
<div className="pt-2 text-label-tactical font-label-tactical text-secondary-fixed-dim uppercase">Anti-Pilferage &amp; Gate Telematics</div>
</div>
<div className="bg-primary-container p-8 rounded-lg flex flex-col justify-between space-y-4">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary-fixed text-[36px]">domain</span>
<span className="font-label-tactical text-label-tactical text-primary-fixed uppercase tracking-wider">EXPANSIVE FOOTPRINT</span>
</div>
<div>
<div className="font-display-lg text-display-lg font-extrabold text-on-primary leading-none">450+</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary-fixed mt-2">Protected Sites</h3>
<p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Active industrial installations, telecom towers, gated estates, and data compounds nationwide.</p>
</div>
<div className="pt-2 text-label-tactical font-label-tactical text-secondary-fixed-dim uppercase">Operational in 36 States + FCT</div>
</div>
</div>
</div>
</section>
{/*  Interactive Sector Directory Grid  */}
<section className="w-full py-20 px-6 lg:px-12 bg-surface" id="sector-matrix">
<div className="max-w-7xl mx-auto flex flex-col space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label-tactical text-label-tactical uppercase tracking-wider text-secondary">ENTERPRISE SPECIALIZATION</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold uppercase mt-2">Operational Sector Matrices</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Each vertical receives a bespoke threat vulnerability assessment (TVA), dedicated SOP drills, and specialized rapid deployment squads.
        </p>
</div>
{/*  Sector Cards 6-Pack Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Sector 1: Banking & Financial  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="h-1.5 w-full bg-secondary absolute top-0 left-0"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">account_balance</span>
</div>
<span className="font-label-tactical text-label-tactical px-2.5 py-1 rounded bg-surface-container text-primary uppercase">CBN COMPLIANT</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Banking &amp; Financial</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">High-lethal deterrence, hardened vault infrastructure, and secure physical asset transport across Nigeria’s commercial networks.</p>
<div className="space-y-4 pt-4 border-t-0">
<div>
<span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider block mb-1">Core Operational Protocols</span>
<ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Vault sentry &amp; dual-custody access controls</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Armored bullion escort &amp; transit corridors</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Cash Management Center (CMC) tactical perimeters</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-4 rounded mt-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase font-bold block mb-1">Case Study Highlight</span>
<p className="font-body-sm text-body-sm text-on-surface">Safeguarded 24 branch vaults and inter-state bullion dispatch operations across South-West Nigeria with zero loss incidents over 48 consecutive months.</p>
</div>
</div>
</div>
<div className="mt-8 pt-4">
<button className="w-full py-2.5 px-4 rounded bg-surface-container hover:bg-secondary hover:text-on-secondary text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors flex items-center justify-center gap-2" onClick={() => {}}>
<span>DEPLOY FOR FINANCIAL ASSETS</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/*  Sector 2: Oil, Gas & Energy  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="h-1.5 w-full bg-primary absolute top-0 left-0"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">oil_barrel</span>
</div>
<span className="font-label-tactical text-label-tactical px-2.5 py-1 rounded bg-surface-container text-primary uppercase">NIPEX REGISTERED</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Oil, Gas &amp; Energy</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">Hostile terrain protection, maritime terminal surveillance, and upstream extraction assets in challenging operational zones.</p>
<div className="space-y-4 pt-4 border-t-0">
<div>
<span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider block mb-1">Core Operational Protocols</span>
<ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">shield</span>
<span>Offshore platform sentry &amp; riverine gunboat escort</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">shield</span>
<span>Right-of-Way (RoW) pipeline drone surveillance</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">shield</span>
<span>Host community intelligence &amp; stakeholder liaison</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-4 rounded mt-4">
<span className="font-label-tactical text-label-tactical text-primary font-bold block mb-1">Case Study Highlight</span>
<p className="font-body-sm text-body-sm text-on-surface">Protected 140km critical pipeline alignment in Rivers and Delta states, achieving an 89% reduction in illicit bunkering taps via continuous thermal drone patrols.</p>
</div>
</div>
</div>
<div className="mt-8 pt-4">
<button className="w-full py-2.5 px-4 rounded bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors flex items-center justify-center gap-2" onClick={() => {}}>
<span>DEPLOY FOR ENERGY SECTOR</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/*  Sector 3: Gated Residential Estates  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="h-1.5 w-full bg-secondary absolute top-0 left-0"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">holiday_village</span>
</div>
<span className="font-label-tactical text-label-tactical px-2.5 py-1 rounded bg-surface-container text-primary uppercase">PREMIUM ACCESS AI</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Gated Estates &amp; Enclaves</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">High-end residential zones in Lekki, Ikoyi, Banana Island, Maitama, and Asokoro requiring seamless hospitality mixed with ironclad access defense.</p>
<div className="space-y-4 pt-4 border-t-0">
<div>
<span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider block mb-1">Core Operational Protocols</span>
<ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>ANPR (Automatic Number Plate Recognition) gates</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Electric motorcycle quiet perimeter sweep patrols</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Ground vibration sensors &amp; thermal infrared fence lines</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-4 rounded mt-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase font-bold block mb-1">Case Study Highlight</span>
<p className="font-body-sm text-body-sm text-on-surface">Integrated biometric ANPR access control across an 850-residence private peninsula community in Lagos, reducing unauthorized vehicle entries to zero.</p>
</div>
</div>
</div>
<div className="mt-8 pt-4">
<button className="w-full py-2.5 px-4 rounded bg-surface-container hover:bg-secondary hover:text-on-secondary text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors flex items-center justify-center gap-2" onClick={() => {}}>
<span>DEPLOY FOR ESTATE INFRASTRUCTURE</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/*  Sector 4: Telecommunications & Data Centers  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="h-1.5 w-full bg-primary absolute top-0 left-0"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">cell_tower</span>
</div>
<span className="font-label-tactical text-label-tactical px-2.5 py-1 rounded bg-surface-container text-primary uppercase">UPTIME SHIELD 99.9%</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Telecoms &amp; Data Centers</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">Safeguarding backbone cell towers, fiber repeaters, and Tier-III/IV data facilities across metropolitan hubs and remote rural regions.</p>
<div className="space-y-4 pt-4 border-t-0">
<div>
<span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider block mb-1">Core Operational Protocols</span>
<ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">shield</span>
<span>Battery, solar panel, and diesel generator theft interdiction</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">shield</span>
<span>Static guard force on BTS towers across 36 states</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">shield</span>
<span>Biometric mantrap chambers for server hall clearance</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-4 rounded mt-4">
<span className="font-label-tactical text-label-tactical text-primary font-bold block mb-1">Case Study Highlight</span>
<p className="font-body-sm text-body-sm text-on-surface">Defended 620 distributed cell towers across North-Central Nigeria, preventing 41 coordinated equipment theft attempts within a single operational calendar year.</p>
</div>
</div>
</div>
<div className="mt-8 pt-4">
<button className="w-full py-2.5 px-4 rounded bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors flex items-center justify-center gap-2" onClick={() => {}}>
<span>DEPLOY FOR TELECOM NETWORK</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/*  Sector 5: Manufacturing, FMCG & Logistics  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="h-1.5 w-full bg-secondary absolute top-0 left-0"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
</div>
<span className="font-label-tactical text-label-tactical px-2.5 py-1 rounded bg-surface-container text-primary uppercase">ANTI-PILFERAGE SYSTEM</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Manufacturing &amp; Logistics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">Protecting assembly lines, raw material storehouses, weighbridges, and multi-depot distribution fleets from internal collusive pilferage.</p>
<div className="space-y-4 pt-4 border-t-0">
<div>
<span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider block mb-1">Core Operational Protocols</span>
<ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Loading bay dispatch verification &amp; seal verification</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Staff physical scanning with random polygraph checks</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
<span>Real-time GPS seal sensors on inter-city logistics fleets</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-4 rounded mt-4">
<span className="font-label-tactical text-label-tactical text-secondary uppercase font-bold block mb-1">Case Study Highlight</span>
<p className="font-body-sm text-body-sm text-on-surface">Turned around a leading Ikeja beverage bottling plant experiencing $240K/quarter stock shrinkage, eliminating organized loading bay fraud completely within 60 days.</p>
</div>
</div>
</div>
<div className="mt-8 pt-4">
<button className="w-full py-2.5 px-4 rounded bg-surface-container hover:bg-secondary hover:text-on-secondary text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors flex items-center justify-center gap-2" onClick={() => {}}>
<span>DEPLOY FOR INDUSTRIAL HUB</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
{/*  Sector 6: Diplomatic Missions, Hotels & Aviation  */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="h-1.5 w-full bg-error absolute top-0 left-0"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[28px]">flight_takeoff</span>
</div>
<span className="font-label-tactical text-label-tactical px-2.5 py-1 rounded bg-error-container text-on-error-container uppercase">COUNTER-TERRORISM CLASS</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Diplomatic &amp; Aviation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">Embassies, international air crew escorts, and world-class 5-star hospitality properties with rigorous international VIP close protection standards.</p>
<div className="space-y-4 pt-4 border-t-0">
<div>
<span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider block mb-1">Core Operational Protocols</span>
<ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-error">shield</span>
<span>Canine (K9) explosive and contraband sweeps</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-error">shield</span>
<span>Tarmac-to-Hotel armored convoy protection</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-error">shield</span>
<span>Executive floor containment and surveillance rooms</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-4 rounded mt-4">
<span className="font-label-tactical text-label-tactical text-error uppercase font-bold block mb-1">Case Study Highlight</span>
<p className="font-body-sm text-body-sm text-on-surface">Contracted carrier security partner for 3 European commercial airlines flying into Murtala Muhammed International (LOS) and Nnamdi Azikiwe (ABV) airports.</p>
</div>
</div>
</div>
<div className="mt-8 pt-4">
<button className="w-full py-2.5 px-4 rounded bg-surface-container hover:bg-error hover:text-on-error text-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors flex items-center justify-center gap-2" onClick={() => {}}>
<span>DEPLOY FOR VIP &amp; DIPLOMACY</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Tactical Threat Architecture Breakdown  */}
<section className="w-full py-16 px-6 lg:px-12 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="bg-surface-container-lowest p-8 lg:p-12 rounded-lg shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 space-y-4">
<span className="font-label-tactical text-label-tactical uppercase tracking-wider text-secondary">NIGERIAN OPERATIONAL READINESS</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Standard Sector Deployment Protocol</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Every sector contract executes through a structured three-tier activation lifecycle to guarantee zero operational lapses from Hour Zero.</p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-label-tactical shrink-0">01</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">TVA (Threat Vulnerability Assessment)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Physical inspection of blindspots, access gates, perimeter fences, and local communal security dynamics.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-secondary text-on-secondary flex items-center justify-center font-bold text-label-tactical shrink-0">02</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Vetted Personnel Dispatch</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guards trained specifically for sector parameters (e.g. anti-robbery for banks, customer courtesy for enclaves).</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-error text-on-error flex items-center justify-center font-bold text-label-tactical shrink-0">03</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">C4i Command Room Tethering</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guards connected via GPS radios to Davita 24/7 central control rooms in Lagos &amp; Abuja for rapid mobile unit dispatch.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 bg-surface-container p-6 rounded-lg">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">analytics</span>
              Sector Risk Mitigation Performance
            </h4>
<div className="space-y-4">
<div>
<div className="flex justify-between text-body-sm font-body-sm mb-1">
<span className="font-medium text-on-surface">Vault &amp; Bullion Transit Reliability</span>
<span className="font-bold text-primary">100%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-sm font-body-sm mb-1">
<span className="font-medium text-on-surface">Perimeter Sensor Reaction Time (&lt;3 mins)</span>
<span className="font-bold text-primary">96.4%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-sm font-body-sm mb-1">
<span className="font-medium text-on-surface">BTS Mast Battery Recovery / Prevention</span>
<span className="font-bold text-primary">98.1%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-sm font-body-sm mb-1">
<span className="font-medium text-on-surface">FMCG Stock Discrepancy Prevention</span>
<span className="font-bold text-primary">92.7%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 bg-surface-container-lowest p-4 rounded text-body-sm font-body-sm text-on-surface-variant flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
<span>All metrics verified by independent corporate internal safety audits and quarterly NSCDC evaluations.</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Sector Assessment Interactive Questionnaire  */}
<section className="w-full py-20 px-6 lg:px-12 bg-surface" id="sector-assessment">
<div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 lg:p-12 rounded-lg shadow-md">
<div className="text-center max-w-2xl mx-auto mb-10">
<span className="font-label-tactical text-label-tactical uppercase tracking-wider text-secondary">24-HOUR STRATEGIC TURNAROUND</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold uppercase mt-2">Sector Assessment Questionnaire</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Select your operational domain and requirements. Our senior tactical risk assessors will produce an actionable defense blueprint and financial projection within 24 hours.
        </p>
</div>
<form className="space-y-6" id="assessmentForm" onSubmit={(e) => e.preventDefault()}>
{/*  Step 1: Industry Domain  */}
<div>
<label className="font-label-lg text-label-lg text-primary block mb-2 font-semibold">1. Select Industry Domain *</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="flex items-center gap-3 p-3.5 rounded bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="accent-primary" name="sector" required={true} type="radio" value="Banking &amp; Financial Institutions"/>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Banking &amp; Financial</span>
</label>
<label className="flex items-center gap-3 p-3.5 rounded bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="accent-primary" name="sector" type="radio" value="Oil, Gas &amp; Energy Infrastructure"/>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Oil, Gas &amp; Energy</span>
</label>
<label className="flex items-center gap-3 p-3.5 rounded bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="accent-primary" name="sector" type="radio" value="Gated Residential Estates"/>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Gated Estates / Enclaves</span>
</label>
<label className="flex items-center gap-3 p-3.5 rounded bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="accent-primary" name="sector" type="radio" value="Telecommunications &amp; Data Centers"/>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Telecoms &amp; BTS Sites</span>
</label>
<label className="flex items-center gap-3 p-3.5 rounded bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="accent-primary" name="sector" type="radio" value="Manufacturing, FMCG &amp; Logistics"/>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Manufacturing &amp; FMCG</span>
</label>
<label className="flex items-center gap-3 p-3.5 rounded bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="accent-primary" name="sector" type="radio" value="Diplomatic Missions, Hotels &amp; Aviation"/>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Diplomatic &amp; Aviation</span>
</label>
</div>
</div>
{/*  Step 2: Deployment Scope  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="font-label-lg text-label-lg text-primary block mb-2 font-semibold">2. Target Location / State *</label>
<select className="w-full px-4 py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" name="location" required={true}>
<option value="">Select Primary Operating State</option>
<option value="Lagos (Island/VI/Ikoyi/Lekki)">Lagos (Island / VI / Lekki Axis)</option>
<option value="Lagos (Mainland/Ikeja/Industrial)">Lagos (Mainland / Ikeja / Industrial)</option>
<option value="Abuja FCT &amp; Environs">Abuja FCT &amp; Environs</option>
<option value="Rivers (Port Harcourt / Offshore)">Rivers (Port Harcourt / Offshore)</option>
<option value="Delta (Warri / Asaba)">Delta (Warri / Asaba / Riverine)</option>
<option value="Kano / Kaduna / North-West">Kano / Kaduna / North-West</option>
<option value="Ogun (Sagamu / Agbara Industrial)">Ogun (Sagamu / Agbara Industrial)</option>
<option value="Nationwide Multi-Location">Nationwide Multi-Location Contract</option>
</select>
</div>
<div>
<label className="font-label-lg text-label-lg text-primary block mb-2 font-semibold">3. Estimated Guard Force Needed *</label>
<select className="w-full px-4 py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" name="forceSize" required={true}>
<option value="Small (4 - 10 Guards / Single Site)">4 - 10 Personnel (Single Facility)</option>
<option value="Medium (11 - 30 Guards / Multi-Entry)">11 - 30 Personnel (Large Facility)</option>
<option value="Battalion Scale (30+ Guards / Multi-Site)">30+ Personnel (Complex Multi-Site)</option>
<option value="Technology + Canine Focus (CCTV + K9)">Integrated Electronic + K9 Canine Unit</option>
<option value="Armed Escort / Close Protection Squad">Armed Escort / Mobile Protection Unit</option>
</select>
</div>
</div>
{/*  Step 3: Contact Details  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="font-label-lg text-label-lg text-primary block mb-2 font-semibold">Corporate Officer Name *</label>
<input className="w-full px-4 py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" name="officerName" placeholder="e.g. Chief Security Officer / Operations Director" required={true} type="text"/>
</div>
<div>
<label className="font-label-lg text-label-lg text-primary block mb-2 font-semibold">Corporate Email Address *</label>
<input className="w-full px-4 py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" name="corporateEmail" placeholder="security.lead@enterprise.com.ng" required={true} type="email"/>
</div>
</div>
<div>
<label className="font-label-lg text-label-lg text-primary block mb-2 font-semibold">Specific Threat Assessment or Site Notes</label>
<textarea className="w-full px-4 py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" name="threatNotes" placeholder="Specify any unique threats (e.g., perimeter vulnerability, recent neighborhood intrusions, specialized shift scheduling requirements)..." rows={Number("3")}></textarea>
</div>
<div className="flex items-center gap-3">
<input defaultChecked={true} className="accent-primary w-4 h-4" id="ndaCheck" type="checkbox"/>
<label className="text-body-sm font-body-sm text-on-surface-variant" htmlFor="ndaCheck">Execute Davita Kombat bilateral Non-Disclosure Agreement (NDA) prior to site blueprint transmission.</label>
</div>
<div className="pt-2">
<button className="w-full py-4 rounded bg-primary hover:bg-primary-container text-on-primary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>GENERATE SECURE BLUEPRINT (CONFIDENTIAL)</span>
</button>
</div>
<div className="hidden bg-surface-container p-4 rounded text-center" id="formSuccessMessage">
<p className="font-headline-sm text-headline-sm text-primary font-bold">Assessment Dispatched to Command</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Our Chief Operations Officer has received your telemetry. You will receive an encrypted brief via your corporate email within 24 hours.</p>
</div>
</form>
</div>
</section>
{/*  Immediate Response Dispatch Strip  */}
<section className="w-full bg-error text-on-error py-8 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-on-error/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[28px] text-on-error">crisis_alert</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm font-bold uppercase leading-tight">ACTIVE CRISIS OR IMMINENT THREAT?</h4>
<p className="font-body-sm text-body-sm opacity-90">Bypass the questionnaire. Directly summon the 24/7 Davita Rapid Tactical Deployment Escort.</p>
</div>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-on-error hover:bg-surface-container-lowest text-error font-label-tactical text-label-tactical uppercase tracking-wider font-extrabold shadow-sm transition-colors" href="tel:08031696371">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
<span>DISPATCH HOTLINE: 08031696371</span>
</a>
</div>
</div>
</section>
</div>
</main>
      <Footer /><footer className="w-full bg-primary-container text-on-primary-fixed border-t border-primary"><div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-primary-fixed-dim/20"><div className="lg:col-span-2 space-y-4"><div className="flex items-center gap-3"><img alt="Davita Kombat Seal" className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-fixed-dim/40" src="https://lh3.googleusercontent.com/aida/AEtjO1UCled8xise8oMK6JHXylMu-2rot9O_eo5uMsCbHspn9lnHwuPStkDUQTn4vZZvsw3nqsQeC86hnXxIKbzuB73m2NbBlygp0A1k73p7VN0YV9XkfkBZ9RWJcH_Y6GyKxiU4xzU9EuzB5BRZCmbjJSj_88AsPXRduLxyQBlbIkHDGs0TTb4RkewN_lRQjiT2f1ZbN1RBvp7V5lUWiZ5KEMccdDYHA9LMvff_qZKNjc6wq7lDj3PD5j-Fv24yBAZv9UtzqEbvRfKom_Q"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-primary font-bold">Davita Kombat</span><span className="font-label-tactical text-label-tactical text-primary-fixed-dim uppercase tracking-wider">Guarding • Surveillance • Tactical Escort</span></div></div><p className="font-body-sm text-body-sm text-surface-container-high/80 pr-6">Federal Republic of Nigeria Private Guard Company (PGC) Tier-1 Certified Operator. Defending diplomatic missions, industrial facilities, maritime hubs, and corporate infrastructure across West Africa since 2008.</p><div className="flex flex-wrap gap-2 pt-2"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-primary-fixed font-label-tactical text-label-tactical uppercase"><span className="material-symbols-outlined text-[14px] text-secondary-fixed">verified</span>NSCDC LIC: 0092/PGC/FED</span><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-primary-fixed font-label-tactical text-label-tactical uppercase"><span className="material-symbols-outlined text-[14px] text-secondary-fixed">shield_with_heart</span>ISO 9001:2015 CERTIFIED</span></div></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Security Solutions</h4><ul className="space-y-2.5 font-body-sm text-body-sm"><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Static Guard Force</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Armed Escort &amp; VIP MPU</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>AI CCTV &amp; Control Rooms</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Access Control &amp; Biometrics</span></li><li className="flex items-center gap-2 text-surface-container-high/80 hover:text-on-primary"><span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chevron_right</span><span>Canine Unit (K9) Patrols</span></li></ul></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Command Centers</h4><div className="space-y-4 font-body-sm text-body-sm text-surface-container-high/80"><div><p className="font-bold text-on-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed">location_on</span>Head Office</p><p>KM 12 airport road giri village gwagwalada Abuja</p></div><div><p className="font-bold text-on-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed">business</span>Branch Office</p><p>KM 12 kachia road by TMD plaza new ungwan modern market Kaduna Nigeria</p></div></div></div><div><h4 className="font-headline-sm text-headline-sm text-on-primary font-semibold mb-4 text-[16px]">Ops Intelligence Alert</h4><p className="font-body-sm text-body-sm text-surface-container-high/80 mb-3">Subscribe to monthly Nigerian security bulletins and threat matrix reports.</p><div className="flex flex-col gap-2"><input className="w-full px-3 py-2 text-body-sm bg-primary border border-outline/30 rounded text-on-primary placeholder:text-surface-dim focus:outline-none focus:border-secondary-container" placeholder="executive@company.com" type="email"/><button className="w-full py-2 px-3 rounded bg-secondary hover:bg-secondary-container text-on-secondary font-label-tactical text-label-tactical uppercase tracking-wider transition-colors" type="button">RECEIVE BRIEFINGS</button></div></div></div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-surface-container-high/60"><div>© 2025 Davita Kombat Security Services Ltd. RC: 489210. All Rights Reserved.</div><div className="flex items-center gap-6 font-label-md text-label-md"><a className="hover:text-on-primary transition-colors" data-path="regulatory-compliance" href="#">NSCDC Reg. Compliance</a><a className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="#">Terms of Engagement</a><a className="hover:text-on-primary transition-colors" data-path="whistleblower-hotline" href="#">Whistleblower Channel</a></div></div></div></footer>
    </>
  )
}
