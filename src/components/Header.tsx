import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(11,37,69,0.06)]">
        <div className="bg-surface-container-low text-on-surface-variant text-label-md font-label-md border-b border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-error">
                  emergency
                </span>
                <span className="font-semibold">DISPATCH:</span>
                <span className="text-error font-bold tracking-wide">
                  +234 1 800-KOMBAT
                </span>
                <span className="text-outline-variant">|</span>
                <span>0700-DAVITA-OPS</span>
              </div>
              <div className="hidden lg:flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  hub
                </span>
                <span>24/7 Command: Victoria Island Lagos &amp; CBD Abuja</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-tactical text-label-tactical uppercase tracking-wider">
                NSCDC CLASS-A LICENSED
              </span>
              <a
                className="inline-flex items-center gap-1 text-primary hover:text-secondary font-semibold transition-colors"
                data-path="client-portal"
                href="#"
              >
                <span className="material-symbols-outlined text-[16px]">
                  lock
                </span>
                <span>Client Portal</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest h-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <img
                  alt="Davita Kombat Security"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
                  src="/images/logo.jpg"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full ring-2 ring-surface-container-lowest"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-primary leading-none font-bold">
                  Davita Kombat
                </span>
                <span className="font-label-tactical text-label-tactical text-outline uppercase tracking-wider">
                  Security Services Nigeria
                </span>
              </div>
            </Link>
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
                    {[
                      { name: "Our Background", path: "/about/our-background" },
                      { name: "Our Core Values", path: "/about/our-core-values" },
                      { name: "Our Mission", path: "/about/our-mission" },
                      { name: "Our Vision", path: "/about/our-vision" },
                      { name: "Corporate Objectives & Quality", path: "/about/corporate-objectives" },
                      { name: "Our Management", path: "/about/our-management" },
                      { name: "What Our Clients Says", path: "/about/testimonials" },
                      { name: "Affiliations & Awards", path: "/about/affiliations" }
                    ].map(item => (
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
                    {[
                      { name: "Personal Protection", path: "/services/personal-protection" },
                      { name: "Special Investigation", path: "/services/special-investigation" },
                      { name: "Access Control Systems", path: "/services/access-control" },
                      { name: "Escort Services", path: "/services/escort-services" },
                      { name: "Cash In Transit", path: "/services/cash-in-transit" },
                      { name: "Security Equipment", path: "/services/security-equipment" },
                      { name: "Reception Protocol", path: "/services/reception-protocol" },
                      { name: "Maritime Security", path: "/services/maritime-security" }
                    ].map(item => (
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
                    <li>
                      <Link to="/explore/careers" className="flex items-start gap-4 px-5 py-3 hover:bg-surface-container-low transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mt-0.5">work</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-on-surface group-hover/item:text-primary">Careers</span>
                          <span className="text-sm text-on-surface-variant">Job openings & opportunities</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/explore/guards-recruitment" className="flex items-start gap-4 px-5 py-3 hover:bg-surface-container-low transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mt-0.5">shield_person</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-on-surface group-hover/item:text-primary">Guards Recruitment</span>
                          <span className="text-sm text-on-surface-variant">Dedicated security guard applications</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/explore/blog" className="flex items-start gap-4 px-5 py-3 hover:bg-surface-container-low transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mt-0.5">article</span>
                        <div className="flex flex-col">
                          <span className="font-bold text-on-surface group-hover/item:text-primary">Articles & Blog</span>
                          <span className="text-sm text-on-surface-variant">Security insights & industry news</span>
                        </div>
                      </Link>
                    </li>

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
            <div className="flex items-center gap-6">
              <a href="tel:02013426900" className="hidden lg:flex items-center gap-2 text-on-surface hover:text-primary transition-colors font-medium">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>02-013426900</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary hover:bg-primary/90 text-on-primary font-bold tracking-wide transition-colors shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </header>
  );
}
