import os
import shutil
import zipfile
import json

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
TMP_DIR = os.path.join(BASE_DIR, 'separated_sites')
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')

if os.path.exists(TMP_DIR):
    shutil.rmtree(TMP_DIR)
os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

# 1. FIXIT (Copy exact fixitfirst folder)
print("Setting up FixIt...")
fixit_dst = os.path.join(TMP_DIR, 'FixIt')
shutil.copytree(
    os.path.join(BASE_DIR, 'fixitfirst'),
    fixit_dst,
    ignore=shutil.ignore_patterns('node_modules', '.git', 'dist', '.vite')
)

# Standard template for the other 6 sites (Dans, Aqua, Sparkle, Bloom, Pizza, Paws)
SITES = [
    ('Dans', 'dans-lawn-care', "Dan's Lawn Care"),
    ('Aqua', 'pool-service', "Aqua Glow Pool Service"),
    ('Sparkle', 'housecleaner', "Sparkle Fresh Home Cleaning"),
    ('Bloom', 'bakery', "Bloom & Batch Artisanal Bakery"),
    ('Pizza', 'pizza-shop', "Pizza Prime Fire-Pies"),
    ('Paws', 'pet-grooming', "Paws & Pamper Pet Spa")
]

# Read root files to replicate 1:1
with open(os.path.join(BASE_DIR, 'package.json'), 'r') as f:
    root_pkg = json.load(f)

# Clean dependencies for each standalone site
standalone_pkg = {
    "name": "standalone-site",
    "private": True,
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": root_pkg.get("dependencies", {}),
    "devDependencies": root_pkg.get("devDependencies", {})
}

with open(os.path.join(BASE_DIR, 'vite.config.ts'), 'r') as f:
    vite_cfg = f.read()
# For standalone, simple Vite config with React & Tailwind
standalone_vite_config = """import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    open: true
  }
});
"""

with open(os.path.join(BASE_DIR, 'index.html'), 'r') as f:
    index_html = f.read()

with open(os.path.join(BASE_DIR, 'tsconfig.json'), 'r') as f:
    tsconfig = f.read()

with open(os.path.join(BASE_DIR, 'src', 'index.css'), 'r') as f:
    index_css = f.read()

with open(os.path.join(BASE_DIR, 'src', 'constants.ts'), 'r') as f:
    constants_ts = f.read()

with open(os.path.join(BASE_DIR, 'src', 'types.ts'), 'r') as f:
    types_ts = f.read()

with open(os.path.join(BASE_DIR, 'src', 'utils.ts'), 'r') as f:
    utils_ts = f.read()

with open(os.path.join(BASE_DIR, 'src', 'pages', 'ProjectDetail.tsx'), 'r') as f:
    detail_code = f.read()
# Adjust import paths inside ProjectDetail for standalone root:
# ../constants -> ./constants, ../utils -> ./utils, ../components/projects/ -> ./components/projects/
standalone_detail_code = detail_code.replace("from '../constants'", "from './constants'")
standalone_detail_code = standalone_detail_code.replace("from '../utils'", "from './utils'")
standalone_detail_code = standalone_detail_code.replace("from '../components/projects/", "from './components/projects/")

standalone_main_tsx = """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""

for folder_name, project_id, title in SITES:
    print(f"Setting up {folder_name} ({project_id})...")
    site_dir = os.path.join(TMP_DIR, folder_name)
    os.makedirs(os.path.join(site_dir, 'src', 'components', 'projects'), exist_ok=True)
    os.makedirs(os.path.join(site_dir, 'src', 'assets'), exist_ok=True)

    # 1. package.json
    pkg = dict(standalone_pkg)
    pkg["name"] = folder_name.lower()
    with open(os.path.join(site_dir, 'package.json'), 'w') as f:
        json.dump(pkg, f, indent=2)

    # 2. vite.config.ts & tsconfig.json
    with open(os.path.join(site_dir, 'vite.config.ts'), 'w') as f:
        f.write(standalone_vite_config)
    with open(os.path.join(site_dir, 'tsconfig.json'), 'w') as f:
        f.write(tsconfig)

    # 3. index.html
    site_html = index_html.replace("<title>My Google AI Studio App</title>", f"<title>{title}</title>")
    with open(os.path.join(site_dir, 'index.html'), 'w') as f:
        f.write(site_html)

    # 4. src/index.css, constants.ts, types.ts, utils.ts, main.tsx
    with open(os.path.join(site_dir, 'src', 'index.css'), 'w') as f:
        f.write(index_css)
    with open(os.path.join(site_dir, 'src', 'constants.ts'), 'w') as f:
        f.write(constants_ts)
    with open(os.path.join(site_dir, 'src', 'types.ts'), 'w') as f:
        f.write(types_ts)
    with open(os.path.join(site_dir, 'src', 'utils.ts'), 'w') as f:
        f.write(utils_ts)
    with open(os.path.join(site_dir, 'src', 'main.tsx'), 'w') as f:
        f.write(standalone_main_tsx)

    # 5. src/ProjectDetail.tsx
    with open(os.path.join(site_dir, 'src', 'ProjectDetail.tsx'), 'w') as f:
        f.write(standalone_detail_code)

    # 6. src/App.tsx
    standalone_app = f"""import React from 'react';
import {{ BrowserRouter as Router, Routes, Route }} from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

export default function App() {{
  return (
    <Router>
      <Routes>
        <Route path="*" element={{<ProjectDetail defaultProjectId="{project_id}" />}} />
      </Routes>
    </Router>
  );
}}
"""
    with open(os.path.join(site_dir, 'src', 'App.tsx'), 'w') as f:
        f.write(standalone_app)

    # 7. Copy all components from src/components/projects/
    src_comp_dir = os.path.join(BASE_DIR, 'src', 'components', 'projects')
    dst_comp_dir = os.path.join(site_dir, 'src', 'components', 'projects')
    for comp_file in os.listdir(src_comp_dir):
        if comp_file.endswith('.tsx') or comp_file.endswith('.ts'):
            shutil.copy2(os.path.join(src_comp_dir, comp_file), os.path.join(dst_comp_dir, comp_file))

    # 8. Copy all assets from src/assets/
    src_assets_dir = os.path.join(BASE_DIR, 'src', 'assets')
    dst_assets_dir = os.path.join(site_dir, 'src', 'assets')
    if os.path.exists(src_assets_dir):
        for asset in os.listdir(src_assets_dir):
            shutil.copy2(os.path.join(src_assets_dir, asset), os.path.join(dst_assets_dir, asset))

# Now create the single master zip: my_sites.zip containing all 7 folders
print("Compressing all 7 separate site folders into public/my_sites.zip...")
master_zip_path = os.path.join(PUBLIC_DIR, 'my_sites.zip')
if os.path.exists(master_zip_path):
    os.remove(master_zip_path)

EXCLUDE_DIRS = {'node_modules', '.git', 'dist', '.vite', 'build'}

with zipfile.ZipFile(master_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for folder_name in ['FixIt', 'Dans', 'Aqua', 'Sparkle', 'Bloom', 'Pizza', 'Paws']:
        folder_path = os.path.join(TMP_DIR, folder_name)
        for root, dirs, files in os.walk(folder_path):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, TMP_DIR)
                zipf.write(full_p, rel_p)

print("ALL 7 SITES PACKAGED SUCCESSFULLY INTO ONE FILE: public/my_sites.zip")
