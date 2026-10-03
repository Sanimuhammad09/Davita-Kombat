const fs = require('fs');
const path = require('path');

function processDir(dir, relativeToSrc) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDir(fullPath, path.join(relativeToSrc, file));
        } else if (file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Skip if Footer is already imported
            if (content.includes('import { Footer }')) {
                continue;
            }

            // Figure out the correct relative path to components
            let importPath = '';
            if (relativeToSrc === '') {
                importPath = '../components/Footer';
            } else if (relativeToSrc.split(path.sep).length === 1) {
                importPath = '../../components/Footer';
            } else {
                // If deeper
                importPath = '../../../components/Footer';
            }

            // Add import after Header import
            if (content.includes('import { Header }')) {
                content = content.replace(/import \{ Header \} from '(.*)'/, `import { Header } from '$1'\nimport { Footer } from '${importPath}'`);
            } else {
                content = `import { Footer } from '${importPath}'\n` + content;
            }

            // Add <Footer /> after </main>
            if (content.includes('</main>')) {
                content = content.replace('</main>', '</main>\n      <Footer />');
            } else {
                // If it's a page that doesn't have </main> yet, just append it before closing fragment
                if (content.includes('</>')) {
                    content = content.replace('</>', '  <Footer />\n    </>');
                }
            }

            fs.writeFileSync(fullPath, content);
            console.log('Added footer to ' + fullPath);
        }
    }
}

const routesDir = path.join(__dirname, 'src', 'routes');
processDir(routesDir, '');

console.log("Done adding Footers.");
