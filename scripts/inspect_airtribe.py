import urllib.request
import json
import re
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def fetch(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

# Check sitemap
sitemap = fetch('https://www.airtribe.live/sitemap.xml')
print("Sitemap length:", len(sitemap))
urls = re.findall(r'<loc>(https://www\.airtribe\.live[^<]+)</loc>', sitemap)
print(f"Total URLs in sitemap: {len(urls)}")
for u in urls[:30]:
    print(" -", u)

# Check robots.txt
robots = fetch('https://www.airtribe.live/robots.txt')
print("\nRobots.txt:")
print(robots[:500])
