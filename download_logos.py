import urllib.request
import re
import os

with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('Mentors from')
snippet = text[idx:idx + 8000]

logos = re.findall(r'src="(https://space-mycohort-web\.sgp1\.cdn\.digitaloceanspaces\.com/nova-landing-pages/hero2/logos/[^"]+)"', snippet)
print(f'Found {len(logos)} logos')

os.makedirs('d:/dhruv work/public/logos', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0'}

for l in set(logos):
    fname = os.path.basename(l)
    dest = os.path.join('d:/dhruv work/public/logos', fname)
    try:
        req = urllib.request.Request(l, headers=headers)
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            with open(dest, 'wb') as f:
                f.write(content)
            print(f'Downloaded {fname}')
    except Exception as e:
        print(f'Error {fname}: {e}')
