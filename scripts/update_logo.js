const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Navbar logo
const oldNavbar = `<div class="w-12 h-12 rounded-2xl bg-[#0C3B2E] text-[#C6F235] flex items-center justify-center font-bold text-xl shadow-md border border-[#0C3B2E]/20">
          <i data-lucide="book-open" class="w-6 h-6"></i>
        </div>`;

const newNavbar = `<div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-md border border-[#0C3B2E]/10 overflow-hidden">
          <img src="img/logo.png" alt="Logo MAN 1 Pontianak" class="w-full h-full object-contain">
        </div>`;

// 2. Drawer logo
const oldDrawer = `<div class="w-10 h-10 rounded-xl bg-[#C6F235] text-[#0C3B2E] flex items-center justify-center font-bold text-lg">
          <i data-lucide="sparkles" class="w-5 h-5"></i>
        </div>`;

const newDrawer = `<div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow overflow-hidden">
          <img src="img/logo.png" alt="Logo MAN 1 Pontianak" class="w-full h-full object-contain">
        </div>`;

// 3. Footer logo
const oldFooter = `<div class="w-10 h-10 rounded-xl bg-[#C6F235] text-[#0C3B2E] font-bold flex items-center justify-center text-lg">
              <i data-lucide="book-open" class="w-5 h-5"></i>
            </div>`;

const newFooter = `<div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow overflow-hidden">
              <img src="img/logo.png" alt="Logo MAN 1 Pontianak" class="w-full h-full object-contain">
            </div>`;

// Normalize CRLF to LF for replacement, then replace
const normalize = (str) => str.replace(/\r\n/g, '\n');

content = normalize(content);

if (content.includes(normalize(oldNavbar))) {
  content = content.replace(normalize(oldNavbar), normalize(newNavbar));
  console.log('Replaced navbar logo successfully');
} else {
  console.log('Navbar logo pattern not found');
}

if (content.includes(normalize(oldDrawer))) {
  content = content.replace(normalize(oldDrawer), normalize(newDrawer));
  console.log('Replaced drawer logo successfully');
} else {
  console.log('Drawer logo pattern not found');
}

if (content.includes(normalize(oldFooter))) {
  content = content.replace(normalize(oldFooter), normalize(newFooter));
  console.log('Replaced footer logo successfully');
} else {
  console.log('Footer logo pattern not found');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('index.html updated successfully with new logos!');
