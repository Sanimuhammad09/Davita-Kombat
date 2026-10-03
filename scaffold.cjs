const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const routesDir = path.join(srcDir, 'routes');
const aboutDir = path.join(routesDir, 'about');
const servicesDir = path.join(routesDir, 'services');

if (!fs.existsSync(aboutDir)) fs.mkdirSync(aboutDir, { recursive: true });
if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });

const aboutPages = [
    { name: "Our Background", path: "our-background" },
    { name: "Our Core Values", path: "our-core-values" },
    { name: "Our Mission", path: "our-mission" },
    { name: "Our Vision", path: "our-vision" },
    { name: "Corporate Objectives & Quality", path: "corporate-objectives" },
    { name: "Our Management", path: "our-management" },
    { name: "What Our Clients Says", path: "testimonials" },
    { name: "Affiliations & Awards", path: "affiliations" }
];

const servicesPages = [
    { name: "Personal Protection", path: "personal-protection" },
    { name: "Special Investigation", path: "special-investigation" },
    { name: "Access Control Systems", path: "access-control" },
    { name: "Escort Services", path: "escort-services" },
    { name: "Cash In Transit", path: "cash-in-transit" },
    { name: "Security Equipment", path: "security-equipment" },
    { name: "Reception Protocol", path: "reception-protocol" },
    { name: "Maritime Security", path: "maritime-security" }
];

const generateTemplate = (title, routePath, componentName) => `import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'

export const Route = createFileRoute('${routePath}')({
  component: ${componentName},
})

function ${componentName}() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        <section className="w-full bg-surface-container-low py-4 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">home</span>
                    <span>Home</span>
                    <span className="text-outline-variant">/</span>
                    <span className="text-primary font-bold">${title}</span>
                </div>
            </div>
        </section>
        
        <section className="w-full bg-surface py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-12 text-center">
                <h1 className="font-headline-xl text-headline-xl text-primary font-bold">${title}</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                    Information regarding ${title} will be populated here, matching the Kings Guards structure.
                </p>
                <div className="h-[400px] w-full max-w-4xl mx-auto bg-surface-container rounded-xl overflow-hidden shadow-lg mt-8">
                    <img className="w-full h-full object-cover" src="/images/security_hero_1.jpg" alt="${title}" />
                </div>
            </div>
        </section>
      </main>
    </>
  )
}
`;

aboutPages.forEach(p => {
    const pPath = path.join(aboutDir, p.path + '.tsx');
    const compName = p.name.replace(/[^a-zA-Z0-9]/g, '');
    fs.writeFileSync(pPath, generateTemplate(p.name, `/about/${p.path}`, compName));
});

servicesPages.forEach(p => {
    const pPath = path.join(servicesDir, p.path + '.tsx');
    const compName = p.name.replace(/[^a-zA-Z0-9]/g, '');
    fs.writeFileSync(pPath, generateTemplate(p.name, `/services/${p.path}`, compName));
});

console.log("Scaffolded all files.");
