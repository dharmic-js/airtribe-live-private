import os
import shutil

src = "d:/dhruv work/public/images"
dst = "d:/dhruv work/public"

# Copy logo
shutil.copy2(os.path.join(src, "020_airtribe-logo-white.172c180.svg"), os.path.join(dst, "logo.svg"))

# Also look for chevron, close, social icons
for f in os.listdir(src):
    if 'linkedin' in f.lower():
        shutil.copy2(os.path.join(src, f), os.path.join(dst, "linkedin.svg"))
    if 'chevron' in f.lower():
        shutil.copy2(os.path.join(src, f), os.path.join(dst, "chevron.svg"))

print("Created logo aliases in public/")
