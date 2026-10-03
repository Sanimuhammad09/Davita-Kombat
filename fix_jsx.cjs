const fs = require('fs');

let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Fix HTML attributes for JSX
code = code.replace(/onsubmit=/g, 'onSubmit=');
code = code.replace(/ for=/g, ' htmlFor=');
code = code.replace(/required="[^"]*"/g, 'required');
code = code.replace(/rows="(\d+)"/g, 'rows={$1}');

fs.writeFileSync('src/routes/index.tsx', code);
console.log('Fixed JSX attributes');
