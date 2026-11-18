with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

nav_idx = text.find('<header')
if nav_idx == -1:
    nav_idx = text.find('<nav')

print("Nav index:", nav_idx)
# find end of hero section or mentors from
end_idx = text.find('Mentors from')
if end_idx != -1:
    end_idx = text.find('</section>', end_idx) + 1000

print(text[nav_idx:min(len(text), nav_idx + 8000)])
