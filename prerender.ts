import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routesToPrerender = [
  '/',
  '/projects',
  '/sitemap',
  '/locations/delhi',
  '/locations/mumbai',
  '/locations/bangalore',
  '/locations/hyderabad',
  '/locations/pune',
  '/locations/kolkata',
  '/locations/patna',
  '/locations/chennai',
  '/locations/ahmedabad',
  '/locations/jaipur'
];

async function generate() {
  // Use Vite SSR build output
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
  
  // Read the server bundle
  // @ts-ignore
  const { render } = await import('./dist/server/entry-server.js');

  for (const url of routesToPrerender) {
    const context = {};
    const { html, helmetContext } = render(url, context);

    let htmlTemplate = template.replace('<!--app-html-->', html);

    // If using helmet, inject meta tags
    if (helmetContext && helmetContext.helmet) {
      const { helmet } = helmetContext;
      const headTags = `
        ${helmet.title.toString()}
        ${helmet.priority.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;
      htmlTemplate = htmlTemplate.replace('<!--helmet-html-->', headTags);
    }

    const filePath = path.join(__dirname, `dist${url === '/' ? '/index' : url}`);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(`${filePath}.html`, htmlTemplate);
    console.log(`pre-rendered ${url} -> ${filePath}.html`);
  }
}

generate().catch((e) => {
  console.error(e);
  process.exit(1);
});
