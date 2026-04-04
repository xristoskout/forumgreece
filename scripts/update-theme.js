const fs = require('fs');
const path = require('path');

function replaceClasses(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Theme text colors
  content = content.replace(/text-slate-900/g, 'text-white');
  content = content.replace(/text-slate-800/g, 'text-white');
  content = content.replace(/text-slate-700/g, 'text-slate-300');
  content = content.replace(/text-slate-600/g, 'text-slate-400');
  content = content.replace(/text-slate-500/g, 'text-slate-400');
  content = content.replace(/text-sky-800/g, 'text-indigo-400');
  content = content.replace(/text-sky-700/g, 'text-indigo-400');
  content = content.replace(/text-sky-900/g, 'text-indigo-300');
  content = content.replace(/text-sky-950/g, 'text-indigo-200');
  
  // Theme backgrounds and glass
  content = content.replace(/bg-\[\#f7fbff\]/g, 'bg-transparent');
  content = content.replace(/bg-white\/(72|78|80|82|88)/g, 'bg-white/5 backdrop-blur-md');
  content = content.replace(/bg-white(?![\/\-])/g, 'bg-white/5 backdrop-blur-md');
  content = content.replace(/bg-slate-50/g, 'bg-white/5 hover:bg-white/10');
  
  // Borders
  content = content.replace(/border-slate-200/g, 'border-white/10');
  content = content.replace(/border-slate-300/g, 'border-white/10');
  content = content.replace(/border-sky-200/g, 'border-indigo-500/30');
  content = content.replace(/border-white\/60/g, 'border-white/20');
  
  // Sky -> Indigo specific
  content = content.replace(/bg-sky-100/g, 'bg-indigo-500/20 text-indigo-300');
  content = content.replace(/bg-sky-700/g, 'bg-indigo-600 border-none');
  content = content.replace(/hover:bg-sky-800/g, 'hover:bg-indigo-500');
  content = content.replace(/bg-sky-900\/8/g, 'bg-slate-950/60');
  
  // Shadows
  content = content.replace(/shadow-\[.*?\]/g, 'shadow-2xl shadow-black/50');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      callback(dirPath);
    }
  });
}

function processAllFiles() {
  const skipList = [
    'app\\\\destinations\\\\page.tsx', 
    'app/destinations/page.tsx',
    'app\\\\destinations\\\\[slug]\\\\page.tsx',
    'app/destinations/[slug]/page.tsx',
    'GlassCard.tsx',
    'BusinessCard.tsx',
    'WeatherWidget.tsx'
  ];

  walkDir(path.join(__dirname, '../app'), (filePath) => {
    if (skipList.some(skip => filePath.includes(skip))) return;
    replaceClasses(filePath);
  });
  
  walkDir(path.join(__dirname, '../components'), (filePath) => {
     if (skipList.some(skip => filePath.includes(skip))) return;
     replaceClasses(filePath);
  });
}

processAllFiles();
