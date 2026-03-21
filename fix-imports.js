const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, callback);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      callback(p);
    }
  });
}

walk(appDir, (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;

  // Fix relative imports for dictionaries
  content = content.replace(/from\s+['"]\.\.\/+(dictionaries)['"]/g, "from '@/dictionaries'");
  
  // Fix layout params
  content = content.replace(/\{ children, params,?\s*\}\s*:\s*\{\s*children\s*:\s*React\.ReactNode;?\s*params\s*:\s*Promise<\{[^}]+\}>\s*\}\s*/g, '{ children }: { children: React.ReactNode }');

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated paths in ${filepath}`);
  }
});
