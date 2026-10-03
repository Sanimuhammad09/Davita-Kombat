const fs = require('fs');
let html = fs.readFileSync('davita_kombat_home_light_theme/code.html', 'utf8');

let start = html.indexOf('<header');
let end = html.lastIndexOf('</footer>') + 9;
let jsx = html.substring(start, end);

jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1/>');
jsx = jsx.replace(/<br([^>]*[^/])>/g, '<br$1/>');
jsx = jsx.replace(/<hr([^>]*[^/])>/g, '<hr$1/>');
jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1/>');
jsx = jsx.replace(/<path([^>]*[^/])>/g, '<path$1/>');
jsx = jsx.replace(/<circle([^>]*[^/])>/g, '<circle$1/>');

// React needs self closing tags for void elements exactly matching standard
// Actually, regex replacement for img, br, hr is enough for this specific html.

let tsxContent = `import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <>
      ${jsx}
    </>
  )
}
`;

fs.writeFileSync('src/routes/index.tsx', tsxContent);
console.log('Converted code.html to index.tsx');
