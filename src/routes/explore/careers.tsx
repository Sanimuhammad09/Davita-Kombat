import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/explore/careers')({
  component: CareersPage,
})

function CareersPage() {
  const environments = [
    {
      title: "Control room coordination",
      desc: "Support field teams, track updates, and keep clients informed through structured reporting.",
      image: "/images/security_hero_1.jpg" // fallback image
    },
    {
      title: "Escort operations",
      desc: "Join operational teams that plan movement, route discipline, and visible protective support.",
      image: "/images/security_hero_2.jpg"
    },
    {
      title: "Maritime security",
      desc: "Support specialist security services for port, vessel, and waterfront environments.",
      image: "/images/security_hero_3.jpg"
    },
    {
      title: "Access control",
      desc: "Help maintain safe entry points through verification, records, and professional escalation.",
      image: "/images/security_hero_1.jpg"
    }
  ];

  const jobs = [
    {
      id: 1,
      category: "OPERATIONS",
      title: "Security Operations Supervisor",
      status: "Open",
      tags: ["Full-time", "Lagos, Nigeria", "On-site"],
      desc: "Lead field officers, coordinate deployments, review incident reports, and support daily service quality across assigned client sites.",
      posted: "20 Apr 2026",
      deadline: "16 Jul 2026",
      image: "/images/security_hero_2.jpg"
    },
    {
      id: 2,
      category: "CONTROL ROOM AND CLIENT SERVICE",
      title: "Client Service and Control Room Officer",
      status: "Open",
      tags: ["Full-time", "Abuja, Nigeria", "On-site"],
      desc: "Monitor reports, support client communication, track field updates, and keep control room records organized and responsive.",
      posted: "21 Apr 2026",
      deadline: "31 Jul 2026",
      image: "/images/security_hero_1.jpg"
    }
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#faf8f5] min-h-screen font-sans">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative py-20 lg:py-32 bg-black overflow-hidden border-b-[8px] border-[#faf8f5]">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img src="/images/security_hero_3.jpg" alt="Security careers" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left Side: Text */}
                <div className="flex-1">
                    <h3 className="font-extrabold tracking-widest uppercase text-sm text-[#2563eb] mb-4">
                        CAREERS AT DAVITA KOMBAT
                    </h3>
                    <h1 className="text-[48px] lg:text-[64px] font-black text-white leading-[1.1] mb-6">
                        Build a disciplined,<br/>trusted security career.
                    </h1>
                    <p className="text-lg text-white/90 font-medium max-w-xl leading-relaxed">
                        Explore active openings, review each role clearly, and apply through a secure form created by our recruitment team.
                    </p>
                </div>

                {/* Right Side: Stat Cards */}
                <div className="w-full lg:w-[400px] flex flex-col gap-4">
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors flex flex-col justify-center min-h-[100px]">
                        <div className="text-3xl font-black text-[#2563eb] mb-1 leading-none">2</div>
                        <div className="text-xs font-bold tracking-widest uppercase text-white/70">OPEN ROLES</div>
                    </div>
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors flex flex-col justify-center min-h-[100px]">
                        <div className="text-3xl font-black text-[#2563eb] mb-1 leading-none">2</div>
                        <div className="text-xs font-bold tracking-widest uppercase text-white/70">DEPARTMENTS</div>
                    </div>
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors flex flex-col justify-center min-h-[100px]">
                        <div className="text-3xl font-black text-[#2563eb] mb-1 leading-none">Online</div>
                        <div className="text-xs font-bold tracking-widest uppercase text-white/70">APPLICATION</div>
                    </div>
                </div>

            </div>
        </section>

        {/* Section 2: Career Environments */}
        <section className="w-full py-20 px-6 lg:px-12 bg-[#faf8f5]">
            <div className="max-w-7xl mx-auto">
                
                <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb] mb-4">
                    CAREER ENVIRONMENTS
                </h3>
                <h2 className="text-4xl lg:text-5xl font-black text-on-surface mb-6">
                    Work across real security operations
                </h2>
                <p className="text-on-surface-variant font-medium text-lg max-w-3xl mb-12 leading-relaxed">
                    Davita Kombat roles support field deployments, client response, access control, escort movement, maritime protection, and control room coordination.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {environments.map((env, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow">
                            <div className="h-48 overflow-hidden bg-surface-container">
                                <img src={env.image} alt={env.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="font-extrabold text-lg text-on-surface mb-3">{env.title}</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                                    {env.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

        {/* Section 3: Job Listings */}
        <section className="w-full pb-24 px-6 lg:px-12 bg-[#faf8f5]">
            <div className="max-w-7xl mx-auto">
                
                {/* Search / Filter Bar */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-4 mb-16">
                    <div className="relative flex-1 flex items-center">
                        <svg className="w-5 h-5 text-outline-variant absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input 
                            type="text" 
                            placeholder="Search by title, location, type, or department" 
                            className="w-full pl-12 pr-4 py-3 bg-transparent outline-none text-on-surface placeholder:text-outline-variant font-medium"
                        />
                    </div>
                    <div className="w-px h-10 bg-outline-variant/30 hidden md:block self-center"></div>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <select className="px-4 py-3 bg-transparent outline-none text-on-surface font-medium min-w-[200px] border-b md:border-b-0 border-outline-variant/30 cursor-pointer">
                            <option>All departments</option>
                            <option>Operations</option>
                            <option>Control Room</option>
                        </select>
                        <div className="w-px h-10 bg-outline-variant/30 hidden md:block self-center"></div>
                        <select className="px-4 py-3 bg-transparent outline-none text-on-surface font-medium min-w-[150px] cursor-pointer">
                            <option>All types</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                </div>

                {/* Listings Header */}
                <div className="mb-8">
                    <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb] mb-1">
                        CURRENT OPENINGS
                    </h3>
                    <h2 className="text-3xl font-black text-on-surface">
                        2 roles available
                    </h2>
                </div>

                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col">
                            {/* Image Header */}
                            <div className="h-64 overflow-hidden relative bg-surface-container">
                                <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.8L18.2 19H5.8L12 5.8z"/></svg>
                                        <span className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb]">
                                            {job.category}
                                        </span>
                                    </div>
                                    <span className="bg-[#e6f4ea] text-[#137333] font-bold text-xs px-3 py-1 rounded-full border border-[#ceead6]">
                                        {job.status}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-black text-on-surface mb-4">
                                    {job.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {job.tags.map((tag, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 bg-[#f8f9fa] border border-outline-variant/30 text-on-surface-variant font-bold text-xs px-3 py-1.5 rounded">
                                            {idx === 0 && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                                            {idx === 1 && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                                            {idx === 2 && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>}
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <p className="text-on-surface-variant font-medium leading-relaxed mb-8 flex-1">
                                    {job.desc}
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-outline-variant font-medium mb-6">
                                    <div className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        Posted {job.posted}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Deadline {job.deadline}
                                    </div>
                                </div>

                                <Link to="/explore/careers" className="w-full bg-black text-[#2563eb] font-extrabold py-4 rounded-md flex items-center justify-center gap-2 hover:bg-black/90 transition-colors">
                                    View Details 
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
