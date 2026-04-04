const fs = require('fs');
const path = require('path');

// Target directories
const targetDirs = [
  path.join(__dirname, '../app'),
  path.join(__dirname, '../components')
];

// File extensions to process
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

// Replacement map: [regex/string, replacement]
const replacements = [
  // Backgrounds
  [/bg-slate-950\/40/g, 'bg-white/80'],
  [/bg-slate-950\/60/g, 'bg-transparent'],
  [/bg-slate-950/g, 'bg-[#f4f7fb]'],
  [/bg-slate-900\/50/g, 'bg-white/90'],
  [/bg-slate-900\/60/g, 'bg-white/90'],
  [/bg-slate-900/g, 'bg-white'],
  [/bg-slate-800/g, 'bg-slate-100'],
  [/bg-white\/5(?!0)/g, 'bg-white'], // replace bg-white/5 but not bg-white/50
  [/bg-white\/10(?:0)?/g, 'bg-slate-50'],
  
  // Gradients
  [/from-slate-950/g, 'from-black/60'],
  [/via-slate-950\/60/g, 'via-black/20'],
  [/to-slate-950/g, 'to-slate-50'],
  [/from-indigo-950\/20 via-slate-950 to-slate-950/g, 'from-indigo-50/50 via-[#f4f7fb] to-[#f4f7fb]'],
  
  // Borders
  [/border-white\/10/g, 'border-slate-200'],
  [/border-white\/20/g, 'border-slate-300'],
  
  // Text colors
  [/text-white/g, 'text-slate-900'],
  [/text-slate-300/g, 'text-slate-600'],
  [/text-slate-400/g, 'text-slate-500'],
  [/text-indigo-400/g, 'text-indigo-700'],
  [/text-indigo-300/g, 'text-indigo-800'],
  
  // Indigo Accents Backgrounds
  [/bg-indigo-500\/20/g, 'bg-indigo-100'],
  [/bg-indigo-500\/30/g, 'bg-indigo-200'],
  [/bg-indigo-950\/40/g, 'bg-indigo-50/80'],
  [/border-indigo-500\/30/g, 'border-indigo-200'],
  
  // Drop shadows
  [/shadow-\[0_0_40px_rgba\(99,102,241,0.2\)\]/g, 'shadow-[0_10px_40px_rgba(0,0,0,0.06)]'],
  [/shadow-\[0_0_30px_rgba\(99,102,241,0.15\)\]/g, 'shadow-[0_8px_30px_rgba(0,0,0,0.05)]'],
  [/shadow-\[0_0_50px_rgba\(99,102,241,0.4\)\]/g, 'shadow-[0_15px_50px_rgba(0,0,0,0.1)]'],
  [/drop-shadow-\[0_0_10px_rgba\(255,255,255,0.3\)\]/g, 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]'],
  [/shadow-2xl/g, 'shadow-xl'],
  
  // Blurs
  [/backdrop-blur-xl/g, 'backdrop-blur-md'],
];

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (extensions.includes(path.extname(fullPath))) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

targetDirs.forEach(processDirectory);
console.log('Theme update complete!');
