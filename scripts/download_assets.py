import json
import urllib.request
import os
import re
from urllib.parse import urlparse

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

with open("d:/dhruv work/airtribe_extracted/raw_pages/image_urls.json", "r") as f:
    urls = json.load(f)

# Categorize and prioritize logos, wordmark, icons, partner brands, etc.
download_dir = "d:/dhruv work/airtribe_extracted/assets"
os.makedirs(download_dir, exist_ok=True)

# Let's inspect some of the URLs
print(f"Total image candidates: {len(urls)}")
airtribe_assets = [u for u in urls if 'airtribe.live' in u]
print(f"Direct airtribe assets: {len(airtribe_assets)}")

# Filter top essential assets: wordmark, logo, icons, banner images, logos of companies
priority_keywords = [
    'logo', 'wordmark', 'icon', 'nova', 'banner', 'hero', 'brand', 'nav',
    'google', 'amazon', 'microsoft', 'flipkart', 'uber', 'swiggy', 'zomato',
    'star', 'arrow', 'check', 'avatar', 'instructor', 'mentor', 'badge'
]

targets = []
for u in urls:
    low = u.lower()
    if any(k in low for k in priority_keywords) or low.endswith('.svg'):
        targets.append(u)

# Also grab some realistic course & instructor webps/pngs
targets += [u for u in urls if ('/images/' in u or 'cloudfront' in u or 'airtribe' in u) and u not in targets][:80]

print(f"Selected {len(targets)} priority assets to download.")

downloaded = 0
for idx, url in enumerate(targets[:120]):
    try:
        parsed = urlparse(url)
        path = parsed.path
        filename = os.path.basename(path)
        if not filename or len(filename) > 60 or not ('.' in filename):
            filename = f"asset_{idx}.png"
        
        # prefix with safe category or index
        safe_name = f"{idx:03d}_{re.sub(r'[^a-zA-Z0-9_.-]', '_', filename)}"
        dest = os.path.join(download_dir, safe_name)
        
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read()
            if len(content) > 100:  # avoid empty/error files
                with open(dest, "wb") as out:
                    out.write(content)
                downloaded += 1
    except Exception as e:
        pass

print(f"Successfully downloaded {downloaded} assets to {download_dir}")
