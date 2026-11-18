import urllib.request
import re
import os
import json
from urllib.parse import urljoin, urlparse

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return b""

pages_to_crawl = [
    ("home", "https://www.airtribe.live/"),
    ("course_catalog", "https://www.airtribe.live/course"),
    ("generative_ai", "https://www.airtribe.live/generative-ai/course"),
    ("backend_engineering", "https://www.airtribe.live/backend-engineering/course"),
    ("product_management", "https://www.airtribe.live/product-management/course"),
    ("testimonials", "https://www.airtribe.live/testimonials"),
    ("about_us", "https://www.airtribe.live/about-us"),
    ("business", "https://www.airtribe.live/business"),
    ("events", "https://www.airtribe.live/events"),
    ("contact_us", "https://www.airtribe.live/contact-us")
]

raw_dir = "d:/dhruv work/airtribe_extracted/raw_pages"
assets_dir = "d:/dhruv work/airtribe_extracted/assets"
os.makedirs(raw_dir, exist_ok=True)
os.makedirs(assets_dir, exist_ok=True)

all_images = set()

for name, url in pages_to_crawl:
    print(f"Fetching {name} from {url}...")
    data = fetch(url)
    if data:
        with open(f"{raw_dir}/{name}.html", "wb") as f:
            f.write(data)
        text = data.decode('utf-8', errors='ignore')
        # find image src
        imgs = re.findall(r'src=[\"\']([^\"\'>]+\.(?:svg|png|jpg|jpeg|webp))[\"\']', text, re.IGNORECASE)
        imgs += re.findall(r'href=[\"\']([^\"\'>]+\.(?:svg|png|ico))[\"\']', text, re.IGNORECASE)
        for img in imgs:
            if not img.startswith('data:'):
                full = urljoin(url, img)
                all_images.add(full)

print(f"\nExtracted {len(all_images)} unique image URLs.")
with open(f"{raw_dir}/image_urls.json", "w") as f:
    json.dump(list(all_images), f, indent=2)

print("Saved image list.")
