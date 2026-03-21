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
  content = content.replace(/from\s+['"](?:\.\.\/)+dictionaries['"]/g, "from '@/dictionaries'");

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated paths in ${filepath}`);
  }
});
