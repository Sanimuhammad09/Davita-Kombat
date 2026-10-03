import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/explore/blog')({
  component: BlogPage,
})

function BlogPage() {
  const articles = [
    {
      id: 1,
      image: "/images/security_hero_1.jpg",
      category: "SECURITY INSIGHTS",
      tags: ["#Event Security", "#Risk Management"],
      title: "How Professional Event Security...",
      excerpt: "Strong event security is not only about guards at the gate. It is about risk planning, guest movement, access control, emergency...",
      inside: [
        "Start With The Risk Picture",
        "Map guest arrival, registration, holding areas..."
      ],
      author: "Davita Kombat Security Desk",
      date: "22 Apr 2026",
      readTime: "2 min read"
    },
    {
      id: 2,
      image: "/images/security_hero_3.jpg",
      category: "OPERATIONS AND RISK",
      tags: ["#Access Control", "#Risk Management"],
      title: "Access Control Checks Every Facilit...",
      excerpt: "Access control works best when policy, people, and technology are reviewed together. These checks help facility managers identify weak...",
      inside: [
        "Review Who Has Access",
        "Audit active staff, vendor, visitor, and..."
      ],
      author: "Davita Kombat Operations Team",
      date: "18 Apr 2026",
      readTime: "2 min read"
    }
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#fafafa] min-h-screen font-sans text-on-surface">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative py-20 lg:py-32 bg-black overflow-hidden border-b-[8px] border-[#fafafa]">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img src="/images/security_hero_1.jpg" alt="Security Control Room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left Side: Text */}
                <div className="flex-1">
                    <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb] mb-4">
                        DAVITA KOMBAT ARTICLES
                    </h3>
                    <h1 className="text-[48px] lg:text-[64px] font-black text-white leading-[1.1] mb-6">
                        Security insight<br/>with a field-ready<br/>point of view.
                    </h1>
                    <p className="text-lg text-white/90 font-medium max-w-xl leading-relaxed">
                        Practical guidance, company updates, safety thinking, and technology notes from the Davita Kombat team.
                    </p>
                </div>

                {/* Right Side: Featured Article */}
                <div className="w-full lg:w-[450px]">
                    <Link to="/explore/blog" className="block bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors group">
                        <div className="h-48 overflow-hidden bg-surface-container">
                            <img src="/images/security_hero_1.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold tracking-widest uppercase text-[10px] text-[#2563eb] mb-3">
                                FEATURED
                            </h3>
                            <h2 className="text-white font-extrabold text-xl leading-snug mb-4">
                                How Professional Event Security Protects People, Assets, and...
                            </h2>
                            <div className="flex items-center text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                                Read feature 
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </section>

        {/* Section 2: Main Content (Search & Articles) */}
        <section className="w-full py-12 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto">
                
                {/* Search Bar (Top) */}
                <div className="bg-white rounded border border-outline-variant/30 flex flex-col md:flex-row shadow-sm mb-12">
                    <div className="relative flex-1 flex items-center border-b md:border-b-0 md:border-r border-outline-variant/30">
                        <svg className="w-5 h-5 text-outline-variant absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input 
                            type="text" 
                            placeholder="Search title, topic, category, or author" 
                            className="w-full pl-12 pr-4 py-4 bg-transparent outline-none text-on-surface placeholder:text-outline-variant font-medium text-sm"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row w-full md:w-auto divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/30">
                        <select className="px-6 py-4 bg-transparent outline-none text-on-surface font-extrabold text-sm cursor-pointer appearance-none">
                            <option>All categories</option>
                        </select>
                        <select className="px-6 py-4 bg-transparent outline-none text-on-surface font-extrabold text-sm cursor-pointer appearance-none">
                            <option>All tags</option>
                        </select>
                        <select className="px-6 py-4 bg-transparent outline-none text-on-surface font-extrabold text-sm cursor-pointer appearance-none">
                            <option>Newest first</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
                    
                    {/* Left: Articles List */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <h3 className="font-extrabold tracking-widest uppercase text-[10px] text-[#2563eb] mb-1">
                                LATEST READING
                            </h3>
                            <h2 className="text-3xl font-black text-on-surface">
                                2 articles
                            </h2>
                        </div>

                        <div className="flex flex-col gap-8">
                            {articles.map((article) => (
                                <div key={article.id} className="bg-white rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm flex flex-col md:flex-row">
                                    
                                    {/* Image Container */}
                                    <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-surface-container shrink-0">
                                        <div className="absolute top-4 left-4 z-10 bg-[#2563eb] text-black font-black text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                            {article.category}
                                        </div>
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                    </div>
                                    
                                    {/* Content Container */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-4">
                                            <span className="text-[#2563eb] font-extrabold text-[10px] uppercase tracking-widest">
                                                {article.category}
                                            </span>
                                            {article.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-surface-container-low text-on-surface-variant text-xs font-bold px-3 py-1 rounded-full border border-outline-variant/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <h3 className="text-3xl font-black text-on-surface mb-4 leading-tight">
                                            {article.title}
                                        </h3>
                                        
                                        <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-6">
                                            {article.excerpt}
                                        </p>

                                        <div className="bg-[#fafafa] rounded border border-outline-variant/10 p-4 mb-6">
                                            <h4 className="font-black text-[10px] uppercase tracking-widest text-outline-variant mb-3">
                                                INSIDE
                                            </h4>
                                            <ul className="flex flex-col gap-2">
                                                {article.inside.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-on-surface font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-1.5 shrink-0"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between mt-auto gap-4 pt-4 border-t border-outline-variant/10">
                                            <div className="flex items-center gap-6 text-xs text-outline-variant font-bold">
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                                    {article.author}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                    {article.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    {article.readTime}
                                                </div>
                                            </div>
                                            
                                            <Link to="/explore/blog" className="bg-black text-[#2563eb] font-extrabold px-6 py-3 rounded flex items-center gap-2 hover:bg-black/90 transition-colors text-sm w-full sm:w-auto justify-center">
                                                Read Article
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="flex flex-col gap-6">
                        
                        {/* Browse Desk Box */}
                        <div className="bg-white rounded-xl border border-outline-variant/20 p-6 shadow-sm">
                            <h3 className="font-extrabold tracking-widest uppercase text-[10px] text-[#2563eb] mb-4">
                                BROWSE DESK
                            </h3>
                            <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-6">
                                Use categories and tags to move through published security insights without losing the visual feed.
                            </p>
                            <div className="flex flex-col gap-3">
                                <select className="w-full border border-outline-variant/30 rounded p-3 text-sm font-bold text-on-surface bg-transparent appearance-none">
                                    <option>All categories</option>
                                </select>
                                <select className="w-full border border-outline-variant/30 rounded p-3 text-sm font-bold text-on-surface bg-transparent appearance-none">
                                    <option>All tags</option>
                                </select>
                                <select className="w-full border border-outline-variant/30 rounded p-3 text-sm font-bold text-on-surface bg-transparent appearance-none">
                                    <option>Newest first</option>
                                </select>
                            </div>
                        </div>

                        {/* Recent Articles Box */}
                        <div className="bg-black rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-2 mb-6">
                                <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                <h3 className="font-black text-white text-lg">Recent Articles</h3>
                            </div>
                            
                            <div className="flex flex-col gap-6">
                                {/* Small Article 1 */}
                                <Link to="/explore/blog" className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded overflow-hidden bg-surface-container shrink-0 border border-white/10">
                                        <img src="/images/security_hero_1.jpg" alt="Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-[#2563eb] transition-colors line-clamp-2">
                                            How Professional Event Security Protects People,...
                                        </h4>
                                        <span className="text-white/50 text-[10px] font-bold">22 Apr 2026</span>
                                    </div>
                                </Link>

                                {/* Small Article 2 */}
                                <Link to="/explore/blog" className="flex gap-4 group">
                                    <div className="w-16 h-16 rounded overflow-hidden bg-surface-container shrink-0 border border-white/10">
                                        <img src="/images/security_hero_3.jpg" alt="Article" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-[#2563eb] transition-colors line-clamp-2">
                                            Access Control Checks Every Facility Should...
                                        </h4>
                                        <span className="text-white/50 text-[10px] font-bold">18 Apr 2026</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
