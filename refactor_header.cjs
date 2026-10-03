const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const routesDir = path.join(srcDir, 'routes');
const componentsDir = path.join(srcDir, 'components');

const indexRoutePath = path.join(routesDir, 'index.tsx');
let indexContent = fs.readFileSync(indexRoutePath, 'utf8');

// Extract the header from index.tsx
const headerStartIndex = indexContent.indexOf('<header');
const headerEndIndex = indexContent.indexOf('</header>') + '</header>'.length;

if (headerStartIndex === -1 || headerEndIndex === -1) {
    console.error("Could not find <header> in index.tsx");
    process.exit(1);
}

const headerCode = indexContent.substring(headerStartIndex, headerEndIndex);

const headerComponentCode = `export function Header() {
  return (
    ${headerCode}
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Header.tsx'), headerComponentCode);
console.log('Created src/components/Header.tsx');

// Replace header in all route files
const files = fs.readdirSync(routesDir);
for (const file of files) {
    if (file.endsWith('.tsx') && file !== '__root.tsx') {
        const filePath = path.join(routesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if header exists in the file
        const fileHeaderStart = content.indexOf('<header');
        const fileHeaderEnd = content.indexOf('</header>') + '</header>'.length;
        
        if (fileHeaderStart !== -1 && fileHeaderEnd !== -1) {
            // Replace header with <Header />
            let newContent = content.substring(0, fileHeaderStart) + '<Header />' + content.substring(fileHeaderEnd);
            
            // Add import if not present
            if (!newContent.includes('import { Header }')) {
                // Find where to insert import (after other imports)
                const lastImportIndex = newContent.lastIndexOf('import ');
                if (lastImportIndex !== -1) {
                    const lineEnd = newContent.indexOf('\n', lastImportIndex);
                    newContent = newContent.substring(0, lineEnd + 1) + "import { Header } from '../components/Header'\n" + newContent.substring(lineEnd + 1);
                } else {
                    newContent = "import { Header } from '../components/Header'\n" + newContent;
                }
            }
            
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated ${file}`);
        }
    }
}
