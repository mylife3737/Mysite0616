import os
import zipfile
import shutil

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')
os.makedirs(PUBLIC_DIR, exist_ok=True)

zip_path = os.path.join(PUBLIC_DIR, 'my_sites.zip')
if os.path.exists(zip_path):
    os.remove(zip_path)

EXCLUDE_DIRS = {'node_modules', '.git', 'dist', '.vite', 'build', 'tmp_packages'}
EXCLUDE_EXTS = {'.zip'}

print("Packaging EXACT Live Preview App into public/my_sites.zip...")

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(BASE_DIR):
        # Modify dirs in-place to prevent descending into excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if file.endswith('.zip'):
                continue
            
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, BASE_DIR)
            
            # Skip python build helper scripts from the zip root
            if file in ['package_live_portfolio.py', 'build_full_sites.py', 'restore_original_packages.py', 'create_packages.py']:
                continue

            zipf.write(full_path, rel_path)

print("SUCCESS: Exact Live Preview App packaged into public/my_sites.zip!")
