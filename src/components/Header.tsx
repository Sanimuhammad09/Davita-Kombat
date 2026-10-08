import { Link } from '@tanstack/react-router';
import { useState } from 'react';

const aboutLinks = [
  { name: "Our Background", path: "/about/our-background" },
  { name: "Our Core Values", path: "/about/our-core-values" },
  { name: "Our Mission", path: "/about/our-mission" },
  { name: "Our Vision", path: "/about/our-vision" },
  { name: "Corporate Objectives & Quality", path: "/about/corporate-objectives" },
  { name: "Our Management", path: "/about/our-management" },
  { name: "What Our Clients Says", path: "/about/testimonials" },
  { name: "Affiliations & Awards", path: "/about/affiliations" }
];

const serviceLinks = [
  { name: "Personal Protection", path: "/services/personal-protection" },
  { name: "Special Investigation", path: "/services/special-investigation" },
  { name: "Access Control Systems", path: "/services/access-control" },
  { name: "Escort Services", path: "/services/escort-services" },
  { name: "Cash In Transit", path: "/services/cash-in-transit" },
  { name: "Security Equipment", path: "/services/security-equipment" },
  { name: "Reception Protocol", path: "/services/reception-protocol" },
  { name: "Maritime Security", path: "/services/maritime-security" }
];

const exploreLinks = [
  { name: "Careers", path: "/explore/careers", icon: "work", desc: "Job openings & opportunities" },
  { name: "Guards Recruitment", path: "/explore/guards-recruitment", icon: "shield_person", desc: "Dedicated security guard applications" },
  { name: "Articles & Blog", path: "/explore/blog", icon: "article", desc: "Security insights & industry news" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(11,37,69,0.06)] bg-surface-container-lowest">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4 sm:gap-6">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative flex items-center justify-center">
                <img
                  alt="Davita Kombat Security"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                  src="/images/logo.jpg"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full ring-2 ring-surface-container-lowest"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg sm:text-headline-sm uppercase tracking-tight text-primary leading-none font-bold whitespace-nowrap">
                  Davita Kombat
                </span>
                <span className="font-label-tactical text-[8px] sm:text-label-tactical text-outline uppercase tracking-wider whitespace-nowrap">
                  Security Services Nigeria
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav
              className="hidden xl:flex items-center gap-7 h-full"
            >
              <div className="h-full flex items-center border-b-2 border-primary">
                <Link
                  className="transition-colors text-primary font-bold"
                  to="/"
                >
                  Home
                </Link>
              </div>

              {/* About Us */}
              <div className="h-full flex items-center group relative">
                <a
                  className="font-label-lg text-label-lg text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  About Us <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </a>
                <div className="absolute top-full left-0 w-72 bg-surface-container-lowest shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#1a1a1a] text-secondary font-bold px-5 py-3 uppercase text-sm rounded-t-md">
                    About Us
                  </div>
                  <ul className="py-2 flex flex-col">
                    {aboutLinks.map(item => (
                      <li key={item.name}>
                        <Link to={item.path} className="flex items-center gap-3 px-5 py-2.5 hover:bg-surface-container-low transition-colors text-on-surface-variant font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="h-full flex items-center group relative">
                <a
                  className="font-label-lg text-label-lg text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Services <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </a>
                <div className="absolute top-full left-0 w-72 bg-surface-container-lowest shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#1a1a1a] text-secondary font-bold px-5 py-3 uppercase text-sm rounded-t-md">
                    Our Services
                  </div>
                  <ul className="py-2 flex flex-col">
                    {serviceLinks.map(item => (
                      <li key={item.name}>
                        <Link to={item.path} className="flex items-center gap-3 px-5 py-2.5 hover:bg-surface-container-low transition-colors text-on-surface-variant font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Explore */}
              <div className="h-full flex items-center group relative">
                <a
                  className="font-label-lg text-label-lg text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Explore <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </a>
                <div className="absolute top-full left-0 w-80 bg-surface-container-lowest shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[#1a1a1a] text-secondary font-bold px-5 py-3 uppercase text-sm rounded-t-md">
                    Explore
                  </div>
                  <ul className="py-2 flex flex-col">
                    {exploreLinks.map(item => (
                      <li key={item.name}>
                        <Link to={item.path} className="flex items-start gap-4 px-5 py-3 hover:bg-surface-container-low transition-colors group/item">
                          <span className="material-symbols-outlined text-secondary mt-0.5">{item.icon}</span>
                          <div className="flex flex-col">
                            <span className="font-bold text-on-surface group-hover/item:text-primary">{item.name}</span>
                            <span className="text-sm text-on-surface-variant">{item.desc}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-full flex items-center">
                <Link
                  className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </nav>

            <div className="flex items-center gap-3 sm:gap-6">
              <a href="tel:08031696371" className="hidden lg:flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-medium">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>08031696371</span>
              </a>
              <a
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded bg-primary hover:bg-primary/90 text-on-primary font-bold tracking-wide transition-colors shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                <span>Book an Appointment</span>
              </a>
              
              {/* Mobile Menu Toggle Button */}
              <button 
                className="xl:hidden flex items-center justify-center p-2 text-on-surface hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-[28px]">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="xl:hidden absolute top-full left-0 right-0 bg-surface-container-lowest border-t border-surface-container-high shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
              <nav className="flex flex-col p-6 gap-6">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="font-bold text-primary text-xl border-b border-surface-container-high pb-4"
                >
                  Home
                </Link>
                
                <div className="flex flex-col">
                  <div className="font-bold text-on-surface text-lg mb-3">About Us</div>
                  <div className="flex flex-col pl-4 gap-4 border-l-2 border-surface-container-high">
                    {aboutLinks.map(item => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-on-surface-variant font-medium text-base hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="font-bold text-on-surface text-lg mb-3">Services</div>
                  <div className="flex flex-col pl-4 gap-4 border-l-2 border-surface-container-high">
                    {serviceLinks.map(item => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-on-surface-variant font-medium text-base hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="font-bold text-on-surface text-lg mb-3">Explore</div>
                  <div className="flex flex-col pl-4 gap-4 border-l-2 border-surface-container-high">
                    {exploreLinks.map(item => (
                      <Link 
                        key={item.name} 
                        to={item.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-on-surface-variant font-medium text-base hover:text-primary flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px] text-secondary">{item.icon}</span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="font-bold text-on-surface text-xl border-t border-surface-container-high pt-4 mt-2"
                >
                  Contact
                </Link>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 px-6 py-4 mt-4 rounded bg-primary text-on-primary font-bold tracking-wide text-center"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>Book an Appointment</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
  );
}
