const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'app');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walk(filepath, callback);
    } else if (stats.isFile() && filepath.endsWith('.tsx')) {
      callback(filepath);
    }
  });
}

const map = [
  // Typography
  [/\btext-white\b/g, 'text-zinc-900'],
  [/\btext-zinc-300\b/g, 'text-zinc-700'],
  [/\btext-zinc-400\b/g, 'text-zinc-500'],
  [/\btext-zinc-500\b/g, 'text-zinc-400'],
  [/\btext-zinc-600\b/g, 'text-zinc-400'], // Some inversion required carefully, but ok.
  [/\btext-zinc-800\b/g, 'text-zinc-200'],
  
  // Backgrounds & Surfaces
  [/\bbg-black\b/g, 'bg-[#fafafa]'],
  [/\bbg-zinc-900\b/g, 'bg-white'],
  [/\bbg-zinc-800\b/g, 'bg-zinc-100'],
  [/\bbg-white\/5\b/g, 'bg-black/5'],
  [/\bbg-white\/10\b/g, 'bg-black/10'],
  [/\bbg-white\/20\b/g, 'bg-black/20'],
  
  // Borders
  [/\bborder-zinc-800\b/g, 'border-zinc-200'],
  [/\bborder-zinc-700\b/g, 'border-zinc-300'],
  [/\bborder-white\/5\b/g, 'border-black/5'],
  [/\bborder-white\/10\b/g, 'border-black/10'],

  // Gradients & Accents (increase contrast on light BG)
  [/\bfrom-emerald-400\b/g, 'from-emerald-500'],
  [/\bto-cyan-500\b/g, 'to-cyan-600'],
  [/\btext-emerald-400\b/g, 'text-emerald-600'],
  [/\btext-cyan-400\b/g, 'text-cyan-600'],
  [/\btext-orange-400\b/g, 'text-orange-600'],
  [/\btext-purple-400\b/g, 'text-purple-600'],
  
  // Shadow artifacts
  [/shadow-\[0_0_20px_rgba\(255\,255\,255\,0\.1\)\]/g, 'shadow-[0_0_20px_rgba(0,0,0,0.05)]'],
];

walk(directoryPath, (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;

  // Let's do a few explicit passes so we don't clobber things up
  // Specifically: "bg-white" in the button should NOT become bg-zinc-900, because the script above doesn't map bg-white to dark.
  // Wait, if I invert, hover:text-white might become hover:text-zinc-900.
  // Group hover overrides:
  content = content.replace(/group-hover:text-white/g, 'group-hover:text-zinc-900');
  content = content.replace(/hover:text-white/g, 'hover:text-zinc-900');
  
  map.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });

  // Specifically fix IP pulse page colors that looked weird (black badges that should be light)
  content = content.replace(/bg-zinc-100 border border-zinc-200 px-4 py-2/g, 'bg-white border border-zinc-200 px-4 py-2');

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Upgraded ${filepath} to premium light mode`);
  }
});
