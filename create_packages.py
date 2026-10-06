import os
import shutil
import zipfile
import json

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
BUILD_TMP = os.path.join(BASE_DIR, 'tmp_packages')
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')
os.makedirs(BUILD_TMP, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

# Common package.json template for standalone projects
def get_pkg_json(name):
    return json.dumps({
        "name": name.lower(),
        "private": True,
        "version": "1.0.0",
        "type": "module",
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
        },
        "dependencies": {
            "clsx": "^2.1.1",
            "lucide-react": "^1.16.0",
            "motion": "^12.23.24",
            "react": "^19.0.0",
            "react-dom": "^19.0.0",
            "tailwind-merge": "^3.5.0"
        },
        "devDependencies": {
            "@vitejs/plugin-react": "^5.0.0",
            "typescript": "^5.8.0",
            "vite": "^6.2.0"
        }
    }, indent=2)

def get_vite_config():
    return """import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
"""

def get_html(title):
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-slate-950 text-slate-100">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
"""

def get_main_tsx():
    return """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""

# 1. FIXIT (Copy directly from fixitfirst)
fixit_dst = os.path.join(BUILD_TMP, 'FixIt')
if os.path.exists(fixit_dst):
    shutil.rmtree(fixit_dst)
shutil.copytree(os.path.join(BASE_DIR, 'fixitfirst'), fixit_dst)

# 2. DANS
dans_dst = os.path.join(BUILD_TMP, 'Dans')
if os.path.exists(dans_dst):
    shutil.rmtree(dans_dst)
os.makedirs(os.path.join(dans_dst, 'src', 'assets'), exist_ok=True)
with open(os.path.join(dans_dst, 'package.json'), 'w') as f:
    f.write(get_pkg_json('dans-lawn-care'))
with open(os.path.join(dans_dst, 'vite.config.ts'), 'w') as f:
    f.write(get_vite_config())
with open(os.path.join(dans_dst, 'index.html'), 'w') as f:
    f.write(get_html("Dan's Lawn Care"))
with open(os.path.join(dans_dst, 'src', 'main.tsx'), 'w') as f:
    f.write(get_main_tsx())

# Copy Dan assets
src_assets = os.path.join(BASE_DIR, 'src', 'assets')
dst_assets = os.path.join(dans_dst, 'src', 'assets')
for asset_file in ['Header.jpg', 'dananddog.jpeg', 'kidsongrass.jpg', 'trim.jpg', 'mulch.jpeg', 'drone.avif', 'GIF.mp4']:
    s = os.path.join(src_assets, asset_file)
    if os.path.exists(s):
        shutil.copy2(s, os.path.join(dst_assets, asset_file))

# Copy types and utils for Dans
shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(dans_dst, 'src', 'types.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(dans_dst, 'src', 'utils.ts'))
shutil.copy2(os.path.join(BASE_DIR, 'src', 'components', 'projects', 'DansCard.tsx'), os.path.join(dans_dst, 'src', 'DansCard.tsx'))

# Fix DansCard import paths
with open(os.path.join(dans_dst, 'src', 'DansCard.tsx'), 'r') as f:
    content = f.read()
content = content.replace('../../types', './types').replace('../../utils', './utils')
with open(os.path.join(dans_dst, 'src', 'DansCard.tsx'), 'w') as f:
    f.write(content)

def sanitize_icons(code):
    return code.replace('Instagram', 'Globe').replace('Facebook', 'Share2').replace('Twitter', 'MessageCircle')

# Dans App.tsx
with open(os.path.join(BASE_DIR, 'src', 'components', 'projects', 'DansLawnCare.tsx'), 'r') as f:
    dans_code = f.read()
# adapt imports in DansLawnCare to be root App
dans_code = dans_code.replace('../../types', './types').replace('../../utils', './utils')
dans_code = dans_code.replace('./DansCard', './DansCard')
dans_code = dans_code.replace('../../assets/', './assets/')
dans_code = sanitize_icons(dans_code)

dans_app = f"""import React from 'react';
import {{ Tractor, Scissors, Leaf }} from 'lucide-react';
import {{ DansLawnCare }} from './DansComponent';
import {{ Project }} from './types';

const project: Project = {{
  id: 'dans-lawn-care',
  name: "Dan's Lawn Care",
  businessName: "Dan's Lawn Care",
  description: 'Just a guy, a mower, and a perfect yard.',
  logo: 'DansLawn',
  heroImage: 'https://placehold.co/1920x1080?text=Hero+Image',
  accentColor: '#fbbf24',
  theme: 'light',
  fontFamily: 'font-lawn',
  serviceSectionTitle: 'Fair & Fast',
  serviceSectionSubtitle: 'Simple service for busy neighbors.',
  aboutText: "Hey, I'm Dan. I'm just a guy with a mower who loves making yards look great. I've been mowing neighborhood lawns in Charlotte County for years—I just show up, do a good job, and let you get back to your weekend.",
  services: [
    {{ title: 'Weekly Mowing', description: "I'll show up every week and keep it looking short and tidy. No fuss.", icon: Tractor }},
    {{ title: 'String Trimming', description: 'Clean, crisp edges around the fence and flower beds.', icon: Scissors }},
    {{ title: 'Landscaping', description: 'Mulching and bed maintenance to keep things looking clean.', icon: Leaf }}
  ],
  testimonials: []
}};

export default function App() {{
  return <DansLawnCare project={{project}} />;
}}
"""
with open(os.path.join(dans_dst, 'src', 'DansComponent.tsx'), 'w') as f:
    f.write(dans_code)
with open(os.path.join(dans_dst, 'src', 'App.tsx'), 'w') as f:
    f.write(dans_app)

# Helper for other projects (Pizza, Bloom, Sparkle, Aqua)
other_projects = [
    {
        "folder": "Pizza",
        "title": "Pizza Prime & Slice",
        "component_src": "PizzaShop.tsx",
        "data": """{
  id: 'pizza-shop',
  name: 'Pizza Prime',
  businessName: 'Pizza Prime Fire-Pies',
  description: 'Blistering heat. Authentic dough.',
  logo: 'PizzaPrime',
  heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000',
  accentColor: '#facc15',
  theme: 'dark',
  fontFamily: 'font-pizza',
  serviceArea: '123 Fire Lane, Pizzaville, FL 33950 | (555) 012-3456',
  serviceSectionTitle: 'The Pies',
  serviceSectionSubtitle: 'Cooked in 90 Seconds. Pure Perfection.',
  aboutText: "Family owned and operated. Our pizza is born from a 48-hour fermentation process and the blistering 900-degree heat of our custom volcanic stone oven. Dine-In, Take-Out, or Delivery—we bring the heat.",
  services: [],
  testimonials: []
}"""
    },
    {
        "folder": "Bloom",
        "title": "Bloom & Batch Artisanal Bakery",
        "component_src": "Bakery.tsx",
        "data": """{
  id: 'bakery',
  name: 'Bloom & Batch',
  businessName: 'Bloom & Batch Artisanal Bakery',
  description: 'Hand-rolled, stone-baked, slow-cooled.',
  logo: 'Bloom&Batch',
  heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000',
  accentColor: '#10b981',
  theme: 'light',
  fontFamily: 'font-bakery',
  serviceSectionTitle: 'The Daily Bake',
  serviceSectionSubtitle: 'Hand-crafted every morning.',
  aboutText: "We are curators of the sourdough tradition. Every loaf at Bloom & Batch is the result of a slow, patient process. We mill our own flour and let the bread decide when it is ready.",
  services: [],
  testimonials: []
}"""
    },
    {
        "folder": "Sparkle",
        "title": "Sparkle Fresh Home Cleaning",
        "component_src": "HomeCleanup.tsx",
        "data": """{
  id: 'housecleaner',
  name: 'Sparkle Fresh',
  businessName: 'Sparkle Fresh Home Cleaning',
  description: 'Breathe easy in a truly clean home.',
  logo: 'SparkleFresh',
  heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000',
  accentColor: '#facc15',
  theme: 'light',
  fontFamily: 'font-sans',
  serviceSectionTitle: 'Clean Standards',
  serviceSectionSubtitle: 'Dedicated care for your unique space.',
  aboutText: 'Sparkle Fresh provides professional cleaning that treats your home as a sanctuary. We make every surface shine.',
  services: [],
  testimonials: []
}"""
    },
    {
        "folder": "Aqua",
        "title": "Aqua Glow Pool & Wash",
        "component_src": "PoolService.tsx",
        "data": """{
  id: 'pool-service',
  name: 'Aqua Glow',
  businessName: 'Aqua Glow Pool Service',
  description: 'Perfect water, zero effort.',
  logo: 'AquaGlow',
  heroImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000',
  accentColor: '#0ea5e9',
  theme: 'light',
  fontFamily: 'font-pool',
  serviceSectionTitle: 'Pool Standards',
  serviceSectionSubtitle: 'Crystal clear results every single visit.',
  aboutText: 'Aqua Glow makes pool ownership a breeze. We handle the chemicals, scrubbing, and filtering so you can jump into crystal-clear water.',
  services: [],
  testimonials: []
}"""
    }
]

for p in other_projects:
    target_dir = os.path.join(BUILD_TMP, p['folder'])
    if os.path.exists(target_dir):
        shutil.rmtree(target_dir)
    os.makedirs(os.path.join(target_dir, 'src'), exist_ok=True)
    with open(os.path.join(target_dir, 'package.json'), 'w') as f:
        f.write(get_pkg_json(p['folder'].lower()))
    with open(os.path.join(target_dir, 'vite.config.ts'), 'w') as f:
        f.write(get_vite_config())
    with open(os.path.join(target_dir, 'index.html'), 'w') as f:
        f.write(get_html(p['title']))
    with open(os.path.join(target_dir, 'src', 'main.tsx'), 'w') as f:
        f.write(get_main_tsx())
    shutil.copy2(os.path.join(BASE_DIR, 'src', 'types.ts'), os.path.join(target_dir, 'src', 'types.ts'))
    shutil.copy2(os.path.join(BASE_DIR, 'src', 'utils.ts'), os.path.join(target_dir, 'src', 'utils.ts'))
    
    # Read component and fix relative imports
    with open(os.path.join(BASE_DIR, 'src', 'components', 'projects', p['component_src']), 'r') as f:
        comp_code = f.read()
    comp_code = comp_code.replace('../../types', './types').replace('../../utils', './utils')
    comp_code = sanitize_icons(comp_code)
    
    comp_name = p['component_src'].replace('.tsx', '')
    with open(os.path.join(target_dir, 'src', f'{comp_name}.tsx'), 'w') as f:
        f.write(comp_code)
        
    app_code = f"""import React from 'react';
import {{ {comp_name} }} from './{comp_name}';
import {{ Project }} from './types';

const project: Project = {p['data']};

export default function App() {{
  return <{comp_name} project={{project}} />;
}}
"""
    with open(os.path.join(target_dir, 'src', 'App.tsx'), 'w') as f:
        f.write(app_code)

# Now create ZIP files!
# 1. Master zip containing all 6 folders
master_zip_path = os.path.join(PUBLIC_DIR, 'my_sites.zip')
if os.path.exists(master_zip_path):
    os.remove(master_zip_path)

with zipfile.ZipFile(master_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for folder_name in ['FixIt', 'Dans', 'Aqua', 'Sparkle', 'Bloom', 'Pizza']:
        folder_path = os.path.join(BUILD_TMP, folder_name)
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, BUILD_TMP)
                zipf.write(full_p, rel_p)

# 2. Individual zip files
for folder_name in ['FixIt', 'Dans', 'Aqua', 'Sparkle', 'Bloom', 'Pizza']:
    ind_zip_path = os.path.join(PUBLIC_DIR, f"{folder_name.lower()}.zip")
    if os.path.exists(ind_zip_path):
        os.remove(ind_zip_path)
    with zipfile.ZipFile(ind_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        folder_path = os.path.join(BUILD_TMP, folder_name)
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, folder_path)
                zipf.write(full_p, rel_p)

print("ZIP PACKAGING COMPLETED SUCCESSFULLY!")
