with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'font-nova-display[^;\{\}]+:[^;\{\}]+;', text)
print("Matches:", matches[:10])

# also look for @font-face or font-family
ff = re.findall(r'@font-face\s*\{[^}]+\}', text)
print(f"Font faces ({len(ff)}):")
for f in ff[:5]:
    print(f[:200])
