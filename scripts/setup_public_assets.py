import os
import shutil

src_dir = "d:/dhruv work/airtribe_extracted/assets"
pub_dir = "d:/dhruv work/public"
img_dir = os.path.join(pub_dir, "images")
os.makedirs(img_dir, exist_ok=True)

# Copy all extracted assets into public/images
files = os.listdir(src_dir)
copied = 0
for f in files:
    src_file = os.path.join(src_dir, f)
    dst_file = os.path.join(img_dir, f)
    shutil.copy2(src_file, dst_file)
    copied += 1

print(f"Copied {copied} assets to {img_dir}")
