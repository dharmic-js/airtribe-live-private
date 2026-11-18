with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'--font-[a-zA-Z0-9_-]+:[^;"]+', text)
print('Font vars:')
for m in set(matches):
    print(' ', m)
